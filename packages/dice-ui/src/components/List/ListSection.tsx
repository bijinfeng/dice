import React, { FC } from 'react';
import { View, ViewStyle, StyleSheet, StyleProp, TextStyle } from 'react-native';
import ListSubheader from './ListSubheader';

type Props = React.ComponentPropsWithRef<typeof View> & {
  /**
   * Title text for the section.
   */
  title?: string;
  /**
   * Content of the section.
   */
  children: React.ReactNode;
  /**
   * Style that is passed to Title element.
   */
  titleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

const ListSection: FC<Props> = ({ children, title, titleStyle, style, ...rest }) => (
  <View {...rest} style={[styles.container, style]}>
    {title ? <ListSubheader style={titleStyle}>{title}</ListSubheader> : null}
    {children}
  </View>
);

ListSection.displayName = 'List.Section';

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
});

export default ListSection;
