import * as React from 'react';
import color from 'color';
import { StyleSheet, View, ViewStyle, StyleProp } from 'react-native';
import { useTheme } from '../Theme';
import { black, white } from '../../styles/colors';
import type { $RemoveChildren } from '../../types';

type Props = $RemoveChildren<typeof View> & {
  /**
   *  Whether divider has a left inset.
   */
  inset?: boolean;
  margin?: number;
  style?: StyleProp<ViewStyle>;
};

const Divider = ({ inset, style, margin = 0, ...rest }: Props) => {
  const { dark: isDarkTheme } = useTheme();

  return (
    <View
      {...rest}
      style={[
        isDarkTheme ? styles.dark : styles.light,
        inset && styles.inset,
        { marginHorizontal: margin },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  dark: {
    backgroundColor: color(white).alpha(0.12).rgb().string(),
    height: StyleSheet.hairlineWidth,
  },
  inset: {
    marginLeft: 72,
  },
  light: {
    backgroundColor: color(black).alpha(0.12).rgb().string(),
    height: StyleSheet.hairlineWidth,
  },
});

export default Divider;
