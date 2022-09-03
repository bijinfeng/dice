import React, { FC, memo } from 'react';
import { View, ViewStyle, StyleSheet, Text, TextStyle } from 'react-native';
import Icon from '@rn-vant/icons';
import { isIcon } from '../utils/isIcon';
import TouchableOpacity from '../TouchableOpacity';
import { useThemeFactory } from '../Theme';
import Loading from '../Loading';
import createStyle from './style';
import type { ButtonProps } from './type';

const Button: FC<ButtonProps> = memo(props => {
  const {
    type = 'default',
    size = 'normal',
    loading,
    loadingText,
    loadingType,
    loadingSize,
    icon,
    iconPosition = 'left',
    color,
    plain,
    square,
    round,
    disabled,
    textStyle,
    ...rest
  } = props;
  const { styles } = useThemeFactory(createStyle, { type, size, plain });
  const textFlattenStyle = StyleSheet.flatten<TextStyle>([
    styles.text,
    !!color && { color: plain ? color : 'white' },
    textStyle,
  ]);

  const renderIcon = () => {
    const defaultIconSize = textFlattenStyle.fontSize;
    const iconColor = color ?? (textFlattenStyle.color as string);
    const marginStyles: ViewStyle =
      iconPosition === 'left'
        ? {
            marginRight: 4,
          }
        : { marginLeft: 4 };

    return (
      <>
        {icon && loading !== true && (
          <View style={marginStyles}>
            {isIcon(icon) ? <Icon name={icon} size={defaultIconSize} color={iconColor} /> : icon}
          </View>
        )}
        {loading && (
          <Loading
            size={loadingSize ?? defaultIconSize}
            type={loadingType}
            color={iconColor}
            style={marginStyles}
          />
        )}
      </>
    );
  };

  const renderText = () => {
    const text = loading ? loadingText : props.children;

    if (text) {
      return (
        <Text selectable={false} numberOfLines={1} style={textFlattenStyle}>
          {text}
        </Text>
      );
    }

    return null;
  };

  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      activeOpacity={0.6}
      style={[
        styles.button,
        props.style,
        plain && styles.plain,
        round && styles.round,
        square && styles.square,
        disabled && styles.disabled,
        !!color && { borderColor: color },
        !!color && !plain && { backgroundColor: color },
      ]}
    >
      {iconPosition === 'left' && renderIcon()}
      {renderText()}
      {iconPosition === 'right' && renderIcon()}
    </TouchableOpacity>
  );
});

export default Button;
