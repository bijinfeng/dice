import React, { forwardRef } from 'react';
import { View, Pressable, Text, StyleSheet, ColorValue } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';
import { QuestionO } from '@rn-vant/icons';
import pick from 'lodash-es/pick';
import Input, { InputSharedProps } from '../Input';
import { useMemoizedFn } from '../hooks';
import { cloneReactNode } from '../utils/cloneReactNode';
import Cell from '../Cell';
import Dialog from '../Dialog';
import type { FieldInstance, FieldProps, FieldTooltipProps } from './type';
import { useThemeFactory } from '../Theme';
import { createStyle } from './style';

const Field = forwardRef<FieldInstance, FieldProps>((props, ref) => {
  const { errorMessageAlign = 'left', align = 'left' } = props;
  const { styles, theme } = useThemeFactory(createStyle);

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
    if (!props.leftIcon) return undefined;

    return <Pressable onPress={props.onClickLeftIcon}>{props.leftIcon}</Pressable>;
  };

  const renderRightIcon = () => {
    if (!props.rightIcon) return undefined;

    return (
      <Pressable onPress={props.onClickRightIcon} style={{ marginLeft: theme.padding_xs }}>
        {cloneReactNode(props.rightIcon, {
          size: theme.field_icon_size,
          color: theme.field_right_icon_color,
        })}
      </Pressable>
    );
  };

  const renderInput = useMemoizedFn(() => {
    if (props.children) {
      return <View style={styles.children}>{props.children}</View>;
    }

    const commonProps: InputSharedProps = pick(props, [
      'value',
      'onChange',
      'placeholder',
      'name',
      'defaultValue',
      'disabled',
      'clearable',
      'clearIcon',
      'clearTrigger',
      'onClear',
      'onBlur',
      'onFocus',
      'onKeyPress',
      'onOverlimit',
      'autoFocus',
      'readOnly',
      'maxLength',
    ]);

    if (props.type === 'textarea') {
      return (
        <Input.TextArea
          ref={ref}
          showWordLimit={props.showWordLimit}
          rows={props.rows}
          {...commonProps}
        />
      );
    }

    return <Input ref={ref} type={props.type} align={props.align} {...commonProps} />;
  });

  const renderMessage = () => {
    const message = props.errorMessage;

    if (message) {
      return <Text style={[styles.errorMessage, { textAlign: errorMessageAlign }]}>{message}</Text>;
    }
    return null;
  };

  const renderIntro = () => {
    if (props.intro) {
      return <Text style={[styles.intro, { textAlign: align }]}>{props.intro}</Text>;
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
      onPress={props.onPress}
    >
      <View style={styles.container}>
        <View style={styles.body}>
          {props.prefix && <View style={styles.prefix}>{props.prefix}</View>}
          {renderInput()}
          {renderRightIcon()}
          {props.suffix && <View style={styles.suffix}>{props.suffix}</View>}
        </View>
        {renderMessage()}
        {renderIntro()}
      </View>
    </Cell>
  );
});

export default Field;
