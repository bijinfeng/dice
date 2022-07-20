import React, { forwardRef, useRef, useState, useMemo } from 'react';
import {
  KeyboardTypeOptions,
  TextInput,
  TextInputIOSProps,
  View,
  Pressable,
  StyleSheet,
  TextStyle,
} from 'react-native';
import { Clear } from '@rn-vant/icons';
import toString from 'lodash-es/toString';
import isFunction from 'lodash-es/isFunction';
import isObject from 'lodash-es/isObject';
import { useControllableValue, useMemoizedFn } from '../hooks';
import { formatNumber } from '../utils/number';
import { cloneReactNode } from '../utils/cloneReactNode';
import { useThemeFactory } from '../Theme';
import { createInputStyle } from './style';
import type {
  InputProps,
  TextAreaProps,
  InputInstance,
  InputEvent,
  InputFormatTrigger,
  ContentSizeChangeEvent,
  KeyPressEvent,
} from './type';

interface BaseInputProps extends InputProps, TextAreaProps {}

const BaseInput = forwardRef<InputInstance, BaseInputProps>((props, ref) => {
  const {
    type,
    formatter,
    clearIcon = <Clear />,
    clearTrigger = 'focus',
    formatTrigger = 'onChange',
    rows = 1,
    autoSize,
  } = props;
  const { styles, theme } = useThemeFactory(createInputStyle);
  const [value, setValue] = useControllableValue<string | number>(props);
  const [inputFocus, setInputFocus] = useState(false);
  // 单行的高度
  const singleRowHeight = theme.cell_line_height ?? 24;
  // input 高度
  const [inputHeight, setInputHeight] = useState<number>();
  const inputRef = useRef<TextInput>(null);
  const contentChanged = React.useRef<boolean>(false);

  React.useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    clear: () => inputRef.current?.clear(),
  }));

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

  const handleKeyPress = useMemoizedFn((e: KeyPressEvent) => {
    props.onKeyPress?.(e);
  });

  const handleChange = useMemoizedFn((text: string, trigger?: InputFormatTrigger) => {
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
    if (autoSize) {
      const { minHeight = singleRowHeight, maxHeight = event.nativeEvent.contentSize.height } =
        isObject(autoSize) ? autoSize : {};
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

  const renderInput = useMemoizedFn(() => {
    const inputStyles = StyleSheet.flatten<TextStyle>([
      styles.control,
      !!props.disabled && styles.disabledControl,
      !!props.error && styles.errorControl,
    ]);
    const placeholderTextColor = props.error
      ? inputStyles.color
      : theme.field_placeholder_text_color;

    return (
      <TextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        value={toString(value)}
        onChangeText={handleChange}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        placeholderTextColor={placeholderTextColor}
        selectionColor={inputStyles.color}
        autoFocus={props.autoFocus}
        editable={!props.disabled && !props.readonly}
        maxLength={props.maxLength}
        numberOfLines={rows}
        multiline={!!autoSize || rows > 1}
        textAlign={props.align}
        textContentType={getTextContentType()}
        keyboardType={getKeyboardType()}
        style={[inputStyles, { height: getHeight() }]}
        onBlur={handleBulr}
        onFocus={handleFocus}
        onKeyPress={handleKeyPress}
        onContentSizeChange={handleContentSizeChange}
        secureTextEntry={type === 'password'}
      />
    );
  });

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

  return (
    <View style={styles.body}>
      {renderInput()}
      {renderClearIcon()}
    </View>
  );
});

export default BaseInput;
