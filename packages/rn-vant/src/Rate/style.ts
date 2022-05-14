import { StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';

interface Styles {
  wrapper: ViewStyle;
  item: ViewStyle;
  half: ViewStyle;
}

export const createStyle = (): Styles => {
  return StyleSheet.create<Styles>({
    half: {
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
    },

    item: {
      position: 'relative',
    },

    wrapper: {
      alignItems: 'center',
      flexDirection: 'row',
    },
  });
};
