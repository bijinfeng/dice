import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import type { GridProps, GridItemProps } from './type';
import { margin } from '../styles';

interface Styles {
  grid: ViewStyle;
  borderTop: ViewStyle;
}

export const createStyle = (theme: DiceUI.Theme): StyleSheet.NamedStyles<Styles> => {
  return StyleSheet.create<Styles>({
    borderTop: {
      borderTopColor: theme.border_color,
      borderTopWidth: StyleSheet.hairlineWidth,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
};

interface ItemStyles {
  item: ViewStyle;
  square: ViewStyle;
  content: ViewStyle;
  text: TextStyle;
}

export const createItemStyle = (
  theme: DiceUI.Theme,
  parent: GridProps,
  props: GridItemProps
): StyleSheet.NamedStyles<ItemStyles> => {
  const { center, square, direction, reverse, border } = parent;
  const { icon } = props;

  return StyleSheet.create<ItemStyles>({
    content: {
      backgroundColor: theme.grid_item_content_background,
      paddingHorizontal: theme.grid_item_content_padding_horizontal,
      paddingVertical: theme.grid_item_content_padding_vertical,
      ...(border
        ? {
            borderBottomColor: theme.border_color,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderRightColor: theme.border_color,
            borderRightWidth: StyleSheet.hairlineWidth,
          }
        : {}),
      ...(center ? { alignItems: 'center', justifyContent: 'center' } : null),
      ...(square ? { left: 0, position: 'absolute', right: 0, top: 0 } : null),
      ...(reverse ? { flexDirection: 'column-reverse' } : null),
      ...(direction === 'horizontal' ? { flexDirection: 'row' } : null),
    },
    item: {
      position: 'relative',
    },
    square: {
      height: 0,
    },
    text: {
      color: theme.grid_item_text_color,
      fontSize: theme.grid_item_text_font_size,
      lineHeight: 1.5 * theme.grid_item_text_font_size,
      ...(icon ? margin(theme.padding_xs, 0, 0, 0) : null),
      ...(direction === 'horizontal' ? { flexDirection: 'row' } : null),
      ...(icon && direction === 'horizontal' ? margin(0, 0, 0, theme.padding_xs) : null),
      ...(icon && reverse ? margin(0, 0, theme.padding_xs, 0) : null),
      ...(icon && direction === 'horizontal' && reverse ? margin(0, theme.padding_xs, 0, 0) : null),
    },
  });
};
