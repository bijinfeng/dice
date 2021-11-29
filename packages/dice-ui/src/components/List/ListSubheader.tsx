import React, { FC } from 'react';
import { StyleSheet, StyleProp, TextStyle } from 'react-native';
import color from 'color';
import Text from '../Text';
import { useTheme } from '../Theme';

type Props = React.ComponentProps<typeof Text> & {
  /**
   * Style that is passed to Text element.
   */
  style?: StyleProp<TextStyle>;
};

const ListSubheader: FC<Props> = ({ style, ...rest }) => {
  const { colors, fonts } = useTheme();
  const font = fonts.medium;
  const textColor = color(colors.text).alpha(0.54).rgb().string();

  return (
    <Text
      numberOfLines={1}
      {...rest}
      style={[styles.container, { color: textColor, ...font }, style]}
    />
  );
};

ListSubheader.displayName = 'List.Subheader';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 13,
  },
});

export default ListSubheader;
