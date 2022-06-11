import React, {
  forwardRef,
  useState,
  useMemo,
  useContext,
  useRef,
  useImperativeHandle,
} from 'react';
import { View, Text } from 'react-native';
import { useThemeFactory } from '../Theme';
import ConfigProviderContext from '../ConfigProvider/ConfigProviderContext';
import { getMonthEndDay } from '../DatetimePicker/utils';
import { compareDay, formatMonthTitle, getNextDay, getPrevDay } from './utils';
import type { CalendarDayItem, CalendarDayType, CalendarMonthProps } from './type';
import { createMonthStyle } from './style';
import CalendarDay from './CalendarDay';

const CalendarMonth = forwardRef<unknown, CalendarMonthProps>((props, ref) => {
  const { rowHeight, showMonthTitle, showMark } = props;
  const [_, setVisible] = useState();
  const { locale } = useContext(ConfigProviderContext);
  const { styles } = useThemeFactory(createMonthStyle);
  const daysRef = useRef<View>(null);
  const height = useRef<number>(0);

  const title = useMemo(() => {
    return props.formatMonthTitle
      ? props.formatMonthTitle(props.date)
      : locale.vanCalendar.monthTitle(...formatMonthTitle(props.date));
  }, [props.date, props.formatMonthTitle]);

  const offset = useMemo(() => {
    const realDay = props.date.getDay();

    if (props.firstDayOfWeek) {
      return (realDay + 7 - props.firstDayOfWeek) % 7;
    }
    return realDay;
  }, [props.date, props.firstDayOfWeek]);

  const totalDay = useMemo(
    () => getMonthEndDay(props.date.getFullYear(), props.date.getMonth() + 1),
    [props.date]
  );

  // const scrollIntoView = (body: Element) => {
  //   // const el = props.showSubtitle ? daysRef.current : monthRef;
  //   // const scrollTop =
  //   //   el!.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop;
  //   // setScrollTop(body, scrollTop);
  // };

  const getMultipleDayType = (day: Date) => {
    const isSelected = (date: Date) =>
      (props.currentDate as Date[]).some(item => compareDay(item, date) === 0);

    if (isSelected(day)) {
      const prevDay = getPrevDay(day);
      const nextDay = getNextDay(day);
      const prevSelected = isSelected(prevDay);
      const nextSelected = isSelected(nextDay);

      if (prevSelected && nextSelected) {
        return 'multiple-middle';
      }
      if (prevSelected) {
        return 'end';
      }
      if (nextSelected) {
        return 'start';
      }
      return 'multiple-selected';
    }

    return '';
  };

  const getRangeDayType = (day: Date) => {
    const [startDay, endDay] = props.currentDate as Date[];

    if (!startDay) {
      return '';
    }

    const compareToStart = compareDay(day, startDay);

    if (!endDay) {
      return compareToStart === 0 ? 'start' : '';
    }

    const compareToEnd = compareDay(day, endDay);

    if (props.allowSameDay && compareToStart === 0 && compareToEnd === 0) {
      return 'start-end';
    }
    if (compareToStart === 0) {
      return 'start';
    }
    if (compareToEnd === 0) {
      return 'end';
    }
    if (compareToStart > 0 && compareToEnd < 0) {
      return 'middle';
    }

    return '';
  };

  const getDayType = (day: Date): CalendarDayType => {
    const { type, minDate, maxDate, currentDate } = props;

    if (compareDay(day, minDate!) < 0 || compareDay(day, maxDate!) > 0) {
      return 'disabled';
    }

    if (currentDate === null) {
      return '';
    }

    if (Array.isArray(currentDate)) {
      if (type === 'multiple') {
        return getMultipleDayType(day);
      }
      if (type === 'range') {
        return getRangeDayType(day);
      }
    } else if (type === 'single') {
      return compareDay(day, currentDate as Date) === 0 ? 'selected' : '';
    }

    return '';
  };

  const getBottomInfo = (dayType: CalendarDayType) => {
    if (props.type === 'range') {
      if (dayType === 'start') {
        return locale.vanCalendar.start;
      }
      if (dayType === 'end') {
        return locale.vanCalendar.end;
      }
      if (dayType === 'start-end') {
        return locale.vanCalendar.startEnd;
      }
    }
    return undefined;
  };

  // const placeholders = useMemo<CalendarDayItem[]>(() => {
  //   const count = Math.ceil((totalDay + offset) / 7);
  //   return Array(count).fill({ type: 'placeholder' });
  // }, [totalDay, offset]);

  const days = useMemo(() => {
    const internalDays: CalendarDayItem[] = [];
    const year = props.date.getFullYear();
    const month = props.date.getMonth();

    for (let day = 1; day <= totalDay; day++) {
      const date = new Date(year, month, day);
      const type = getDayType(date);

      let config: CalendarDayItem = {
        date,
        type,
        text: day,
        bottomInfo: getBottomInfo(type),
      };

      if (props.formatter) {
        config = props.formatter(config);
      }

      internalDays.push(config);
    }

    return internalDays;
  }, [getDayType, props.date, props.formatter]);

  const renderDay = (item: CalendarDayItem, index: number) => (
    <CalendarDay
      key={index}
      item={item}
      index={index}
      color={props.color}
      offset={offset}
      rowHeight={rowHeight}
      onClick={props.onClick}
      topInfoRender={props.topInfoRender}
      bottomInfoRender={props.bottomInfoRender}
    />
  );

  useImperativeHandle(ref, () => ({
    getTitle: () => title,
    getHeight: () => height.current,
    setVisible,
    scrollIntoView: () => {},
  }));

  return (
    <View
      onLayout={event => {
        height.current = event.nativeEvent.layout.height;
      }}
    >
      {showMonthTitle && <Text style={styles.monthTitle}>{title}</Text>}
      <View ref={daysRef} style={styles.days}>
        {showMark && (
          <View style={styles.monthMarkWrap}>
            <Text style={styles.monthMark}>{props.date.getMonth() + 1}</Text>
          </View>
        )}
        {days.map(renderDay)}
      </View>
    </View>
  );
});

export default CalendarMonth;
