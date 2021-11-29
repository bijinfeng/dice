import React, { FC, memo, useMemo } from 'react';
import { View, ViewStyle, StyleSheet, StyleProp, TouchableOpacity } from 'react-native';
import Text from '../Text';
import Icon, { IconNames, isIcon } from '../Icon';
import { useTheme } from '../Theme';
import Loading from '../Loading';
import createStyle from './index.style';

export type Type = 'primary' | 'success' | 'warning' | 'danger' | 'default';
export type Size = 'large' | 'small' | 'mini' | 'normal';

type LoadingProps = React.ComponentProps<typeof Loading>;

interface Props {
  /**
   * 类型，可选值为 primary success warning danger
   * @default default
   */
  type?: Type;
  /**
   * 尺寸，可选值为 large small mini
   * @default normal
   */
  size?: Size;
  /**
   * 按钮颜色，支持传入 linear-gradient 渐变色
   */
  color?: string;
  /**
   * 左侧图标名称或自定义图标组件
   */
  icon?: IconNames | React.ReactNode;
  /**
   * 图标展示位置，可选值为 right
   * @default left
   */
  iconPosition?: 'left' | 'right';
  /**
   * 是否为朴素按钮
   */
  plain?: boolean;
  /**
   * 是否为方形按钮
   */
  square?: boolean;
  /**
   * 是否为圆形按钮
   */
  round?: boolean;
  /**
   * 是否禁用按钮
   */
  disabled?: boolean;
  /**
   * 是否显示为加载状态
   */
  loading?: boolean;
  /**
   * 加载状态提示文字
   */
  loadingText?: string;
  /**
   * 加载图标类型
   */
  loadingType?: LoadingProps['type'];
  /**
   * 加载图标大小
   */
  loadingSize?: number;
  onPress?: () => void;
  onLongPress?: () => void;
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

const Button: FC<Props> = memo(
  ({
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
    children,
    contentStyle,
    style,
    ...rest
  }) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyle(theme, type, size, plain), [theme, type, size, plain]);
    const [pressing, setPressing] = React.useState<boolean>(false);

    const renderIcon = () => {
      const iconStyle = StyleSheet.flatten(styles.icon);
      const defaultIconSize = iconStyle.fontSize;
      const iconColor = color ?? (iconStyle.color as string);
      const marginStyles: ViewStyle =
        iconPosition === 'left'
          ? {
              marginRight: 4,
            }
          : { marginLeft: 4 };

      return (
        <>
          {icon && loading !== true ? (
            <View style={marginStyles}>
              {isIcon(icon) ? <Icon name={icon} size={defaultIconSize} color={iconColor} /> : icon}
            </View>
          ) : null}
          {loading ? (
            <Loading
              size={loadingSize ?? defaultIconSize}
              type={loadingType}
              color={iconColor}
              style={marginStyles}
            >
              {loadingText}
            </Loading>
          ) : null}
        </>
      );
    };

    const buildWrapperStyle = () => {
      return StyleSheet.flatten([
        styles.button,
        plain && styles.plain,
        round && styles.round,
        square && styles.square,
        disabled && styles.disabled,
        color && (plain ? { borderColor: color } : { backgroundColor: color }),
      ]);
    };

    const buildTextStyle = () => {
      return StyleSheet.flatten([styles.text, color && { color: plain ? color : 'white' }]);
    };

    return (
      <TouchableOpacity
        disabled={disabled}
        style={[buildWrapperStyle(), style]}
        onPressIn={() => setPressing(true)}
        onPressOut={() => setPressing(false)}
        activeOpacity={1}
        {...rest}
      >
        <View style={[styles.content, contentStyle]}>
          {iconPosition === 'left' && renderIcon()}
          <Text selectable={false} numberOfLines={1} style={buildTextStyle()}>
            {children}
          </Text>
          {iconPosition === 'right' && renderIcon()}
        </View>
        <View style={[styles.back, { opacity: pressing ? 0.1 : 0 }]} />
      </TouchableOpacity>
    );
  }
);

export default Button;
