import React, { forwardRef, useState, useMemo } from 'react';
import { View, Pressable, TextInput, Text, StyleSheet, ColorValue } from 'react-native';
import type { StyleProp, TextStyle, TextInputIOSProps, KeyboardTypeOptions } from 'react-native';
import { Clear, QuestionO } from '@rn-vant/icons';
import toString from 'lodash-es/toString';
import isFunction from 'lodash-es/isFunction';
import isObject from 'lodash-es/isObject';
import { formatNumber } from '../utils/number';
import { useControllableValue, useMemoizedFn } from '../hooks';
import { cloneReactNode } from '../utils/cloneReactNode';
import Cell from '../Cell';
import Dialog from '../Dialog';
import type {
  FieldInstance,
  FieldProps,
  FieldTooltipProps,
  InputEvent,
  FieldFormatTrigger,
  ContentSizeChangeEvent,
} from './type';
import { useThemeFactory } from '../Theme';
import { createStyle } from './style';

const Field = forwardRef<FieldInstance, FieldProps>((props, ref) => {
  const {
    type = 'text',
    clearIcon = <Clear />,
    clearTrigger = 'focus',
    errorMessageAlign = 'left',
    inputAlign = 'left',
    formatTrigger = 'onChange',
    formatter,
    rows = 1,
    autosize,
  } = props;
  const [value, setValue] = useControllableValue<string | number>(props);
  const [inputFocus, setInputFocus] = useState(false);
  const inputRef = React.useRef<TextInput>(null);
  const contentChanged = React.useRef<boolean>(false);
  const { styles, theme } = useThemeFactory(createStyle);
  // 单行的高度
  const singleRowHeight = theme.cell_line_height ?? 24;
  // input 高度
  const [inputHeight, setInputHeight] = useState<number>();

  React.useImperativeHandle(ref, () => inputRef.current!);

  // 是否显示清楚按钮
  const showClear = useMemo(() => {
    if (props.clearable && !props?.readonly) {
      const hasValue = value !== '' && value !== undefined;
      const trigger = clearTrigger === 'always' || (clearTrigger === 'focus' && inputFocus);
      return hasValue && trigger;
    }
    return false;
  }, [value, clearTrigger, inputFocus]);

  const formatValue = useMemoizedFn((inputValue: string | number, trigger = 'onChange') => {
    if (isFunction(formatter) && trigger === formatTrigger) {
      return formatter(inputValue);
    }

    return inputValue;
  });

  const handleFocus = useMemoizedFn((e: InputEvent) => {
    setInputFocus(true);
    props.onFocus?.(e);
  });
  const handleBulr = useMemoizedFn((e: InputEvent) => {
    setInputFocus(false);
    handleChange(toString(value), 'onBlur');
    props.onBlur?.(e);
  });

  const handleChange = useMemoizedFn((text: string, trigger?: FieldFormatTrigger) => {
    contentChanged.current = true;
    let finalValue: string | number = text;
    if (type === 'number' || type === 'digit') {
      const isNumber = type === 'number';
      finalValue = formatNumber(finalValue, isNumber, isNumber);
    }
    finalValue = formatValue(finalValue, trigger);
    setValue(finalValue);
  });

  const handleContentSizeChange = useMemoizedFn((event: ContentSizeChangeEvent) => {
    if (!contentChanged.current) return;
    let _height: number;
    if (autosize) {
      const { minHeight = singleRowHeight, maxHeight = event.nativeEvent.contentSize.height } =
        isObject(autosize) ? autosize : {};
      _height = Math.max(minHeight, maxHeight);
    } else if (rows > 1) {
      _height = rows * singleRowHeight;
    } else {
      _height = singleRowHeight;
    }
    setInputHeight(_height);
  });

  const getHeight = useMemoizedFn(() => {
    if (inputHeight) return inputHeight;
    return rows * singleRowHeight;
  });

  const renderTooltip = (iconColor?: ColorValue, iconSize?: number) => {
    const { tooltip } = props;
    if (tooltip) {
      let icon = (<QuestionO />) as React.ReactNode;
      let dialogProps = { message: tooltip };
      if (!(React.isValidElement(tooltip) || typeof tooltip === 'string')) {
        const { icon: customIcon, ...customDialogProps } = tooltip as FieldTooltipProps;
        icon = customIcon || icon;
        dialogProps = customDialogProps as typeof dialogProps;
      }

      return (
        <Pressable style={{ marginLeft: 2 }} onPress={() => Dialog.show(dialogProps)}>
          {cloneReactNode(icon, { color: iconColor, size: iconSize })}
        </Pressable>
      );
    }
    return null;
  };

  const renderLabel = (defaultStyles: StyleProp<TextStyle>) => {
    const { label, colon, disabled } = props;
    const textStyle = StyleSheet.flatten<TextStyle>([
      defaultStyles,
      styles.label,
      !!disabled && styles.disabledLabel,
      props.titleStyle,
    ]);

    if (label) {
      return (
        <View style={[styles.labelWrapper, !!props.labelWidth && { width: props.labelWidth }]}>
          <Text style={textStyle}>
            {label}
            {colon && ':'}
          </Text>
          {renderTooltip(textStyle.color, textStyle.fontSize)}
        </View>
      );
    }
    return null;
  };

  const renderLeftIcon = () => {
    const { leftIcon, onClickLeftIcon } = props;
    if (!leftIcon) return undefined;
    return <Pressable onPress={onClickLeftIcon}>{leftIcon}</Pressable>;
  };

  const renderRightIcon = () => {
    const { rightIcon, onClickRightIcon } = props;
    if (!rightIcon) return undefined;
    return (
      <Pressable onPress={onClickRightIcon} style={{ marginLeft: theme.padding_xs }}>
        {cloneReactNode(rightIcon, {
          size: theme.field_icon_size,
          color: theme.field_right_icon_color,
        })}
      </Pressable>
    );
  };

  const renderClearIcon = () => {
    if (showClear) {
      return (
        <Pressable
          onPress={() => inputRef.current?.clear()}
          style={{ marginLeft: theme.padding_xs }}
        >
          {cloneReactNode(clearIcon, {
            size: theme.field_clear_icon_size,
            color: theme.field_clear_icon_color,
          })}
        </Pressable>
      );
    }
    return null;
  };

  const renderWordLimit = () => {
    const { showWordLimit, maxLength } = props;
    if (showWordLimit && maxLength) {
      const count = (value ? `${value}` : '').length;
      return (
        <Text style={styles.wordLimit}>
          {count}/{maxLength}
        </Text>
      );
    }

    return null;
  };

  const renderInput = useMemoizedFn(() => {
    const inputStyles = StyleSheet.flatten<TextStyle>([
      styles.control,
      !!props.disabled && styles.disabledControl,
      !!props.error && styles.errorControl,
    ]);
    const placeholderTextColor = props.error
      ? inputStyles.color
      : theme.field_placeholder_text_color;

    const getTextContentType = (): TextInputIOSProps['textContentType'] => {
      if (type === 'tel') return 'telephoneNumber';
      if (type === 'password') return 'password';
      return undefined;
    };

    const getKeyboardType = (): KeyboardTypeOptions | undefined => {
      if (type === 'digit' || type === 'number') return 'numeric';
      if (type === 'tel') return 'phone-pad';
      return undefined;
    };

    return (
      <TextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        value={toString(value)}
        onChangeText={handleChange}
        placeholder={props.placeholder}
        placeholderTextColor={placeholderTextColor}
        selectionColor={inputStyles.color}
        autoFocus={props.autoFocus}
        editable={!props.disabled && !props.readonly}
        maxLength={props.maxLength}
        numberOfLines={rows}
        multiline={!!autosize || rows > 1}
        textAlign={props.inputAlign}
        textContentType={getTextContentType()}
        keyboardType={getKeyboardType()}
        style={[inputStyles, { height: getHeight() }]}
        onBlur={handleBulr}
        onFocus={handleFocus}
        onKeyPress={props.onKeyPress}
        onContentSizeChange={handleContentSizeChange}
        secureTextEntry={type === 'password'}
      />
    );
  });

  const renderMessage = () => {
    const message = props.errorMessage;

    if (message) {
      return <Text style={[styles.errorMessage, { textAlign: errorMessageAlign }]}>{message}</Text>;
    }
    return null;
  };

  const renderButton = () => {
    if (props.button) {
      return <View style={{ marginLeft: theme.padding_xs }}>{props.button}</View>;
    }

    return null;
  };

  const renderIntro = () => {
    if (props.intro) {
      return <Text style={[styles.intro, { textAlign: inputAlign }]}>{props.intro}</Text>;
    }
    return null;
  };

  return (
    <Cell
      title={renderLabel}
      size={props.size}
      required={props.required}
      icon={renderLeftIcon()}
      center={props.center}
      isLink={props.isLink}
      valueStyle={styles.value}
      arrowDirection={props.arrowDirection}
      style={props.style}
    >
      <View style={styles.container}>
        <View style={styles.body}>
          {renderInput()}
          {renderClearIcon()}
          {renderRightIcon()}
          {renderButton()}
        </View>
        {renderWordLimit()}
        {renderMessage()}
        {renderIntro()}
      </View>
    </Cell>
  );
});

export default Field;
