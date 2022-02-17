import { StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';
import constants from '../utils/constants';
import type { PopupProps, IconPosition } from './type';

interface Styles {
  wrapper: ViewStyle;
  icon: ViewStyle;
  round: ViewStyle;
}

type Params = Pick<PopupProps, 'position' | 'closeIconPosition'>;

const IconPositionMap: Record<IconPosition, ('bottom' | 'left' | 'top' | 'right')[]> = {
  'bottom-left': ['bottom', 'left'],
  'bottom-right': ['bottom', 'right'],
  'top-left': ['top', 'left'],
  'top-right': ['top', 'right'],
};

export const createStyle = (theme: DiceUI.Theme, params: Params): Styles => {
  const { position, closeIconPosition = 'top-right' } = params;

  const layout: ViewStyle = {};
  const roundRadius: ViewStyle = {};

  if (position === 'bottom' || position === 'top') {
    layout.width = constants.screenWidth;
  } else if (position === 'left' || position === 'right') {
    layout.height = constants.screenHeight;
  }

  if (position === 'bottom') {
    roundRadius.borderTopLeftRadius = theme.popup_round_border_radius;
    roundRadius.borderTopRightRadius = theme.popup_round_border_radius;
  } else if (position === 'top') {
    roundRadius.borderBottomLeftRadius = theme.popup_round_border_radius;
    roundRadius.borderBottomRightRadius = theme.popup_round_border_radius;
  } else if (position === 'left') {
    roundRadius.borderTopRightRadius = theme.popup_round_border_radius;
    roundRadius.borderBottomRightRadius = theme.popup_round_border_radius;
  } else if (position === 'right') {
    roundRadius.borderTopLeftRadius = theme.popup_round_border_radius;
    roundRadius.borderBottomLeftRadius = theme.popup_round_border_radius;
  }

  const iconPosition = IconPositionMap[closeIconPosition].reduce<ViewStyle>((result, key) => {
    return {
      ...result,
      [key]: theme.popup_close_icon_margin,
    };
  }, {});

  return StyleSheet.create<Styles>({
    icon: {
      position: 'absolute',
      zIndex: 1,
      ...iconPosition,
    },
    round: roundRadius,
    wrapper: {
      backgroundColor: theme.popup_background_color,
      position: 'relative',
      ...layout,
    },
  });
};
