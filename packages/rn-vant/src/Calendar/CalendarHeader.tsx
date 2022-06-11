import React, { useContext } from 'react';
import DropShadow from 'react-native-drop-shadow';
import { View, Pressable, Text } from 'react-native';
import { useThemeFactory } from '../Theme';
import ConfigProviderContext from '../ConfigProvider/ConfigProviderContext';
import type { CalendarHeaderProps } from './type';
import { createHeaderStyle } from './style';

const CalendarHeader = (props: CalendarHeaderProps) => {
  const { locale } = useContext(ConfigProviderContext);
  const { styles } = useThemeFactory(createHeaderStyle);

  const renderTitle = () => {
    if (props.showTitle) {
      const text = props.title || locale?.vanCalendar?.title;
      return (
        <View style={styles.headerTitleWrap}>
          <Text style={styles.headerTitle}>{text}</Text>
        </View>
      );
    }
    return null;
  };

  const renderSubtitle = () => {
    if (props.showSubtitle) {
      return (
        <Pressable style={styles.headerTitleWrap} onPress={props.onPressSubtitle}>
          <Text style={[styles.headerTitle, styles.headerSubTitle]}>{props.subtitle}</Text>
        </Pressable>
      );
    }
    return null;
  };

  const renderWeekDays = () => {
    const { weekdays: customWeekdays, firstDayOfWeek } = props;
    const defaultWeekdays = locale.vanCalendar.weekdays;
    const weekdays = customWeekdays
      ? defaultWeekdays.map((wk, i) => customWeekdays[i] || wk)
      : defaultWeekdays;
    const renderWeekDaysContent = [
      ...weekdays.slice(firstDayOfWeek, 7),
      ...weekdays.slice(0, firstDayOfWeek),
    ];

    return (
      <View>
        {renderWeekDaysContent.map((text, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Text style={styles.weekday} key={i}>
            {text}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <DropShadow style={styles.header}>
      {renderTitle()}
      {renderSubtitle()}
      {renderWeekDays()}
    </DropShadow>
  );
};

export default CalendarHeader;
