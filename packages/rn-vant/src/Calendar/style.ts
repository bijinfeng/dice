import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import constants from '../utils/constants';

interface HeadStyle {
  header: ViewStyle;
  headerTitle: TextStyle;
  headerSubTitle: TextStyle;
  headerTitleWrap: ViewStyle;
  weekday: TextStyle;
}

export const createHeaderStyle = (theme: DiceUI.Theme): StyleSheet.NamedStyles<HeadStyle> => {
  return StyleSheet.create<HeadStyle>({
    header: {
      shadowColor: 'rgba(125, 126, 128, 0.16)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 10,
    },
    headerSubTitle: {
      fontSize: theme.calendar_header_subtitle_font_size,
    },
    headerTitle: {
      color: theme.text_color,
      fontSize: theme.calendar_header_title_font_size,
      fontWeight: theme.font_weight_bold,
      lineHeight: theme.calendar_header_title_height,
    },
    headerTitleWrap: {
      alignItems: 'center',
      flexDirection: 'row',
      height: theme.calendar_header_title_height,
      justifyContent: 'center',
    },
    weekday: {
      flex: 1,
      fontSize: theme.calendar_weekdays_font_size,
      lineHeight: theme.calendar_weekdays_height,
      textAlign: 'center',
    },
  });
};

interface Style {
  footer: ViewStyle;
  footerButton: ViewStyle;
  calendar: ViewStyle;
  body: ViewStyle;
  popup: ViewStyle;
}

export const createStyle = (theme: DiceUI.Theme): StyleSheet.NamedStyles<Style> => {
  return StyleSheet.create<Style>({
    body: {
      flex: 1,
    },
    calendar: {
      backgroundColor: theme.calendar_background,
      flex: 1,
    },
    footer: {
      paddingHorizontal: theme.padding_md,
    },
    footerButton: {
      height: theme.calendar_confirm_button_height,
      marginHorizontal: theme.calendar_confirm_button_margin_horizontal,
      marginVertical: theme.calendar_confirm_button_margin_vertical,
    },
    popup: {
      height: theme.calendar_popup_height,
    },
  });
};

interface MonthStyle {
  monthTitle: TextStyle;
  days: ViewStyle;
  monthMark: TextStyle;
  monthMarkWrap: ViewStyle;
}

export const createMonthStyle = (theme: DiceUI.Theme): StyleSheet.NamedStyles<MonthStyle> => {
  return StyleSheet.create<MonthStyle>({
    days: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      position: 'relative',
    },
    monthMark: {
      color: theme.calendar_month_mark_color,
      fontSize: theme.calendar_month_mark_font_size,
      zIndex: 0,
    },
    monthMarkWrap: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },
    monthTitle: {
      color: theme.text_color,
      fontSize: theme.calendar_month_title_font_size,
      fontWeight: theme.font_weight_bold,
      lineHeight: theme.calendar_header_title_height,
      textAlign: 'center',
    },
  });
};

interface DayStyle {
  day: ViewStyle;
  selectedDay: ViewStyle;
  topInfo: TextStyle;
  bottomInfo: TextStyle;
}

export const createDayStyle = (theme: DiceUI.Theme): StyleSheet.NamedStyles<DayStyle> => {
  const info: TextStyle = {
    fontSize: constants.screenWidth <= 350 ? 9 : theme.calendar_info_font_size,
    left: 0,
    lineHeight: theme.calendar_info_line_height,
    position: 'absolute',
    right: 0,
  };

  return StyleSheet.create<DayStyle>({
    bottomInfo: {
      ...info,
      bottom: 6,
    },
    day: {
      alignItems: 'center',
      fontSize: theme.calendar_day_font_size,
      height: theme.calendar_day_height,
      justifyContent: 'center',
      position: 'relative',
      textAlign: 'center',
      width: '14.285%',
    },
    selectedDay: {
      alignItems: 'center',
      backgroundColor: theme.calendar_selected_day_background,
      borderRadius: theme.border_radius_md,
      color: theme.calendar_selected_day_color,
      height: theme.calendar_selected_day_size,
      justifyContent: 'center',
      textAlign: 'center',
      width: theme.calendar_selected_day_size,
    },
    topInfo: {
      ...info,
      top: 6,
    },
  });
};
