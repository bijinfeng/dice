import React, { useContext, FC } from 'react';
import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native';
import { LayoutContext } from '../../context';
import overlay from '../../styles/overlay';
import Appbar, { DEFAULT_APPBAR_HEIGHT } from './Appbar';
import shadow from '../../styles/shadow';
import { useTheme } from '../Theme';

type Props = React.ComponentProps<typeof Appbar> & {
  /**
   * Whether the background color is a dark color. A dark header will render light text and vice-versa.
   */
  dark?: boolean;
  /**
   * Extra padding to add at the top of header to account for translucent status bar.
   * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
   * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
   * Pass `0` or a custom value to disable the default behaviour, and customize the height.
   */
  statusBarHeight?: number;
  /**
   * Content of the header.
   */
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const AppbarHeader: FC<Props> = props => {
  const { statusBarHeight: _statusBarHeight } = useContext(LayoutContext);
  const { statusBarHeight = _statusBarHeight, style, dark, ...rest } = props;

  const { dark: isDarkTheme, colors, mode } = useTheme();
  const {
    height = DEFAULT_APPBAR_HEIGHT,
    elevation = 4,
    backgroundColor: customBackground,
    zIndex = 0,
    ...restStyle
  }: ViewStyle = StyleSheet.flatten(style) || {};
  const backgroundColor =
    customBackground ||
    (isDarkTheme && mode === 'adaptive' ? overlay(elevation, colors.surface) : colors.primary);

  return (
    <View
      style={[{ backgroundColor, zIndex, elevation }, shadow(elevation)] as StyleProp<ViewStyle>}
    >
      <Appbar
        style={[{ height, backgroundColor, marginTop: statusBarHeight }, styles.appbar, restStyle]}
        dark={dark}
        {...rest}
      />
    </View>
  );
};

AppbarHeader.displayName = 'Appbar.Header';

const styles = StyleSheet.create({
  appbar: {
    elevation: 0,
  },
});

export default AppbarHeader;
