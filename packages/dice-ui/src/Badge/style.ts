import { StyleSheet } from 'react-native';
import type { TextStyle, ViewStyle } from 'react-native';
import type { BadgeProps } from './type';

interface Styles {
  badge: TextStyle;
  dot: TextStyle;
  fixed: TextStyle;
  wrapper: ViewStyle;
  badgeContainer: ViewStyle;
}

type ExtraParams = Pick<BadgeProps, 'color'>;

export const createStyle = (theme: DiceUI.Theme, { color }: ExtraParams): Styles => {
  const backgroundColor = color ?? theme.badge_background_color;

  return StyleSheet.create<Styles>({
    badge: {
      alignItems: 'center',
      color: theme.badge_color,
      display: 'flex',
      fontSize: theme.badge_font_size,
      fontWeight: theme.badge_font_weight,
      justifyContent: 'center',
      lineHeight: theme.badge_font_size * 1.2,
      minWidth: theme.badge_size,
      paddingHorizontal: theme.badge_padding_horizontal,
      paddingVertical: theme.badge_padding_vertical,
      textAlign: 'center',
    },
    badgeContainer: {
      alignItems: 'center',
      backgroundColor,
      borderColor: theme.white,
      borderRadius: theme.border_radius_max,
      borderWidth: theme.badge_border_width,
      justifyContent: 'center',
      overflow: 'hidden',
    },
    dot: {
      height: theme.badge_dot_size,
      minWidth: 0,
      width: theme.badge_dot_size,
    },
    fixed: {
      position: 'absolute',
      right: 0,
      top: 0,
    },
    wrapper: {
      position: 'relative',
    },
  });
};
