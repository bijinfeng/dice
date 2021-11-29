import React, { FC } from 'react';
import { Animated, StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { shadow, overlay } from '../../styles';
import { withTheme } from '../Theme';

type Props = React.ComponentPropsWithRef<typeof View> & {
  children: React.ReactNode;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  theme: DiceUI.Theme;
};

const Surface: FC<Props> = ({ style, theme, ...rest }) => {
  const { elevation = 4 } = (StyleSheet.flatten(style) || {}) as ViewStyle;
  const { dark: isDarkTheme, mode, colors } = theme;

  return (
    <Animated.View
      {...rest}
      style={[
        {
          backgroundColor:
            isDarkTheme && mode === 'adaptive'
              ? overlay(elevation, colors.surface)
              : colors.surface,
        },
        elevation ? shadow(elevation) : null,
        style,
      ]}
    />
  );
};

export default withTheme(Surface);
