import React, { FC, memo } from 'react';
import { View, Text, ViewProps, StyleSheet } from 'react-native';
import { useThemeFactory } from '../Theme';
import Circular from './Circular';
import Spinner from './Spinner';

export interface LoadingProps extends ViewProps {
  /**
   * 颜色
   * @default #c8c9cc
   */
  color?: string;
  /**
   * 加载图标大小
   * @default 30
   */
  size?: number;
  /**
   * 类型
   * @default circular
   */
  type?: 'spinner' | 'circular';
  /**
   * 文字大小
   */
  textSize?: number;
  /**
   * 文字颜色
   * @default #c8c9cc
   */
  textColor?: string;
  /**
   * 是否垂直排列图标和文字内容
   * @default false
   */
  vertical?: boolean;
}

const Loading: FC<LoadingProps> = memo(props => {
  const {
    children,
    size = 30,
    type = 'circular',
    vertical,
    textColor,
    textSize,
    style,
    ...rest
  } = props;
  const { styles, theme } = useThemeFactory(createStyle);
  const color = props.color ?? theme.gray_5;

  return (
    <View
      style={[{ flexDirection: vertical ? 'column' : 'row', alignItems: 'center' }, style]}
      {...rest}
    >
      {type === 'circular' ? (
        <Circular color={color} size={size} />
      ) : (
        <Spinner color={color} size={size} />
      )}
      {children && (
        <Text
          style={[
            vertical ? styles.verticalText : styles.text,
            { color: color ?? textColor, fontSize: textSize },
          ]}
        >
          {children}
        </Text>
      )}
    </View>
  );
});

const createStyle = (theme: DiceUI.Theme) => {
  const textFontSize = theme.font_size_md;

  return StyleSheet.create({
    text: {
      fontSize: textFontSize,
      marginLeft: theme.padding_xs,
    },
    verticalText: {
      fontSize: textFontSize,
      marginTop: theme.padding_xs,
    },
  });
};

export default Loading;
