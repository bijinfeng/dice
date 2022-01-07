import { StyleSheet, Platform } from 'react-native';
import type { ViewStyle } from 'react-native';
import type { SliderProps } from './types';

type ExtraParams = Pick<
  SliderProps,
  'inactiveColor' | 'activeColor' | 'buttonSize' | 'disabled' | 'barHeight'
>;

interface Styles {
  container: ViewStyle;
  filledTrack: ViewStyle;
  thumb: ViewStyle;
  track: ViewStyle;
  trackContainer: ViewStyle;
  touchableArea: ViewStyle;
}

export const createStyle = (theme: DiceUI.Theme, params: ExtraParams): Styles => {
  const { inactiveColor, activeColor, buttonSize, disabled, barHeight } = params;

  const activeBackgroundColor = activeColor ?? theme.slider_active_background_color;
  const inactiveBackgroundColor = inactiveColor ?? theme.slider_inactive_background_color;

  const buttonWidth = buttonSize ?? theme.slider_button_width;
  const buttonHeight = buttonSize ?? theme.slider_button_height;

  const opacity = disabled ? theme.slider_disabled_opacity : 1;

  const trackHeight = barHeight ?? theme.slider_bar_height;

  return StyleSheet.create<Styles>({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      position: 'relative',
    },
    filledTrack: {
      backgroundColor: activeBackgroundColor,
      height: trackHeight,
      opacity,
    },

    thumb: {
      backgroundColor: theme.slider_button_background_color,
      borderRadius: buttonWidth,
      height: buttonHeight,
      position: 'relative',
      width: buttonWidth,
    },
    touchableArea: {
      ...StyleSheet.absoluteFillObject,
    },
    track: {
      backgroundColor: inactiveBackgroundColor,
      flex: 1,
      height: trackHeight,
      opacity,
      ...Platform.select({
        web: {
          cursor: 'pointer',
        },
      }),
    },
    trackContainer: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      flexDirection: 'row',
    },
  });
};
