import { StyleSheet, ViewProps, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  plusButton: ViewProps;
  minusButton: ViewProps;
  stepper: ViewProps;
  minus: ViewProps;
  plus: ViewProps;
  input: TextStyle;
  disabledInput: TextStyle;
}

interface Params {
  isRound: boolean;
  minusDisabled: boolean;
  plusDisabled: boolean;
  buttonSize?: number;
  inputWidth?: number;
}

export const createStyle = (theme: DiceUI.Theme, params: Params): Styles => {
  const {
    isRound,
    minusDisabled,
    plusDisabled,
    buttonSize = theme.stepper_input_height,
    inputWidth = theme.stepper_input_width,
  } = params;

  const buttonStyle: ViewStyle = {
    backgroundColor: theme.stepper_background,
    height: buttonSize,
    width: buttonSize,
    ...(isRound ? { borderRadius: buttonSize } : null),
  };

  const disabledButton: ViewStyle = {
    backgroundColor: theme.stepper_button_disabled_color,
    ...(isRound ? { opacity: 0.3 } : null),
  };

  const disabledLine: ViewStyle = {
    backgroundColor: theme.stepper_button_disabled_icon_color,
  };

  return StyleSheet.create<Styles>({
    disabledInput: {
      color: theme.stepper_input_disabled_text_color,
      ...(isRound
        ? { backgroundColor: 'transparent' }
        : { backgroundColor: theme.stepper_input_disabled_background }),
    },
    input: {
      color: theme.stepper_input_text_color,
      fontSize: theme.stepper_input_font_size,
      height: buttonSize,
      marginHorizontal: 2,
      textAlign: 'center',
      width: inputWidth,
      ...(isRound
        ? { backgroundColor: 'transparent' }
        : { backgroundColor: theme.stepper_background }),
    },
    minus: {
      backgroundColor: theme.stepper_button_icon_color,
      ...(minusDisabled ? disabledLine : null),
      ...(isRound ? {} : null),
      ...(isRound ? { backgroundColor: theme.stepper_button_round_theme_color } : null),
    },
    minusButton: {
      ...buttonStyle,
      ...(minusDisabled ? disabledButton : null),
      ...(isRound
        ? {
            backgroundColor: theme.background_2,
            borderWidth: 1,
            borderColor: theme.stepper_button_round_theme_color,
          }
        : null),
    },
    plus: {
      backgroundColor: theme.stepper_button_icon_color,
      ...(plusDisabled ? disabledLine : null),
      ...(isRound ? { backgroundColor: theme.white } : null),
    },
    plusButton: {
      ...buttonStyle,
      ...(plusDisabled ? disabledButton : null),
      ...(isRound ? { backgroundColor: theme.stepper_button_round_theme_color } : null),
    },
    stepper: {
      borderRadius: theme.stepper_radius,
      flexDirection: 'row',
      overflow: 'hidden',
    },
  });
};
