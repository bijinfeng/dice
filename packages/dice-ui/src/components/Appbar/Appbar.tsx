import * as React from 'react';
import { View, ViewStyle, Platform, StyleSheet, StyleProp } from 'react-native';
import color from 'color';

import { overlay } from '../../styles';
import AppbarContent from './AppbarContent';
import AppbarAction from './AppbarAction';
import AppbarBackAction from './AppbarBackAction';
import Surface from '../Surface';
import { useTheme } from '../Theme';
import { black, white } from '../../styles/colors';

type Props = Partial<React.ComponentPropsWithRef<typeof View>> & {
  /**
   * Whether the background color is a dark color. A dark appbar will render light text and vice-versa.
   */
  dark?: boolean;
  /**
   * Content of the `Appbar`.
   */
  children: React.ReactNode;
  /**
   * @optional
   */
  style?: StyleProp<ViewStyle>;
};

export const DEFAULT_APPBAR_HEIGHT = 56;

const Appbar = ({ children, dark, style, ...rest }: Props) => {
  const { colors, dark: isDarkTheme, mode } = useTheme();
  const {
    backgroundColor: customBackground,
    elevation = 4,
    ...restStyle
  }: ViewStyle = StyleSheet.flatten(style) || {};

  let isDark: boolean;

  const backgroundColor =
    customBackground ||
    (isDarkTheme && mode === 'adaptive' ? overlay(elevation, colors.surface) : colors.primary);
  if (typeof dark === 'boolean') {
    isDark = dark;
  } else {
    isDark =
      backgroundColor === 'transparent'
        ? false
        : typeof backgroundColor === 'string'
        ? !color(backgroundColor).isLight()
        : true;
  }

  let shouldCenterContent = false;
  let shouldAddLeftSpacing = false;
  let shouldAddRightSpacing = false;
  if (Platform.OS === 'ios') {
    let hasAppbarContent = false;
    let leftItemsCount = 0;
    let rightItemsCount = 0;

    React.Children.forEach(children, child => {
      if (React.isValidElement(child)) {
        if (child.type === AppbarContent) {
          hasAppbarContent = true;
        } else if (hasAppbarContent) {
          rightItemsCount++;
        } else {
          leftItemsCount++;
        }
      }
    });

    shouldCenterContent = hasAppbarContent && leftItemsCount < 2 && rightItemsCount < 2;
    shouldAddLeftSpacing = shouldCenterContent && leftItemsCount === 0;
    shouldAddRightSpacing = shouldCenterContent && rightItemsCount === 0;
  }
  return (
    <Surface style={[{ backgroundColor }, styles.appbar, { elevation }, restStyle]} {...rest}>
      {shouldAddLeftSpacing ? <View style={styles.spacing} /> : null}
      {React.Children.toArray(children)
        .filter(child => child != null && typeof child !== 'boolean')
        .map((child, i) => {
          if (
            !React.isValidElement(child) ||
            ![AppbarContent, AppbarAction, AppbarBackAction].includes(
              // @ts-expect-error: TypeScript complains about the type of type but it doesn't matter
              child.type
            )
          ) {
            return child;
          }

          const props: { color?: string; style?: StyleProp<ViewStyle> } = {
            color:
              typeof child.props.color !== 'undefined' ? child.props.color : isDark ? white : black,
          };

          if (child.type === AppbarContent) {
            props.style = [
              // Since content is not first item, add extra left margin
              i !== 0 && { marginLeft: 8 },
              shouldCenterContent && { alignItems: 'center' },
              child.props.style,
            ];
          }
          return React.cloneElement(child, props);
        })}
      {shouldAddRightSpacing ? <View style={styles.spacing} /> : null}
    </Surface>
  );
};

const styles = StyleSheet.create({
  appbar: {
    alignItems: 'center',
    elevation: 4,
    flexDirection: 'row',
    height: DEFAULT_APPBAR_HEIGHT,
    paddingHorizontal: 4,
  },
  spacing: {
    width: 48,
  },
});

export default Appbar;
