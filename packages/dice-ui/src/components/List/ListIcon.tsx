import React, { FC } from 'react';
import { View, ViewStyle, StyleSheet, StyleProp } from 'react-native';
import Icon, { IconNames } from '../Icon';

type Props = {
  /**
   * Icon to show.
   */
  icon: IconNames;
  /**
   * Color for the icon.
   */
  color?: string;
  style?: StyleProp<ViewStyle>;
};

const ICON_SIZE = 24;

/**
 * A component to show an icon in a list item.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/list-icon.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <>
 *     <List.Icon color={Colors.blue500} icon="folder" />
 *     <List.Icon color={Colors.blue500} icon="equal" />
 *     <List.Icon color={Colors.blue500} icon="calendar" />
 *   </>
 * );
 *
 * export default MyComponent;
 * ```
 */
const ListIcon: FC<Props> = ({ icon, color: iconColor, style }) => (
  <View style={[styles.item, style]} pointerEvents="box-none">
    <Icon name={icon} size={ICON_SIZE} color={iconColor} />
  </View>
);

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    margin: 8,
    width: 40,
  },
});

ListIcon.displayName = 'List.Icon';

export default ListIcon;
