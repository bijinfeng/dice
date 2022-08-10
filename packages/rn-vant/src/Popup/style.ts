import { StyleSheet } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';
import constants from '../utils/constants';
import type { PopupProps, PopupCloseIconPosition, PopupPosition } from './type';

interface Styles {
  wrapper: ViewStyle;
  icon: ViewStyle;
  round: ViewStyle;
  title: TextStyle;
}

type Params = Pick<PopupProps, 'position' | 'closeIconPosition'>;

const IconPositionMap: Record<PopupCloseIconPosition, ('bottom' | 'left' | 'top' | 'right')[]> = {
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
    round: {
      ...roundRadius,
      overflow: 'hidden',
    },
    title: {
      fontSize: theme.popup_header_font_size,
      fontWeight: theme.font_weight_bold,
      lineHeight: theme.popup_header_height,
      textAlign: 'center',
    },
    wrapper: {
      backgroundColor: theme.popup_background_color,
      position: 'relative',
      ...layout,
    },
  });
};

export const getOverlayStyle = (position: PopupPosition): ViewStyle => {
  const alignments: ViewStyle = {};

  if (position === 'center') {
    alignments.justifyContent = 'center';
    alignments.alignItems = 'center';
  } else if (position === 'top') {
    alignments.justifyContent = 'flex-start';
  } else if (position === 'left') {
    alignments.alignItems = 'flex-start';
  } else if (position === 'bottom') {
    alignments.justifyContent = 'flex-end';
  } else if (position === 'right') {
    alignments.alignItems = 'flex-end';
  }

  return alignments;
};
