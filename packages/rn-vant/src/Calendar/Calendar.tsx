import React, { memo, forwardRef, useMemo, useContext, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import pick from 'lodash-es/pick';
import Popup from '../Popup';
import Button from '../Button';
import Toast from '../Toast';
import { useThemeFactory } from '../Theme';
import { useSetState, useUpdateEffect, useRefs } from '../hooks';
import ConfigProviderContext from '../ConfigProvider/ConfigProviderContext';
import CalendarHeader from './CalendarHeader';
import CalendarMonth from './CalendarMonth';
import {
  calcDateNum,
  cloneDate,
  cloneDates,
  compareDay,
  compareMonth,
  getDayByOffset,
  getNextDay,
  getPrevDay,
  getToday,
} from './utils';
import type { CalendarInstance, CalendarProps, CalendarDayItem } from './type';
import { createStyle } from './style';

const Calendar = forwardRef<CalendarInstance, CalendarProps>(props => {
  const insets = useSafeAreaInsets();
  const { locale } = useContext(ConfigProviderContext);
  const { styles } = useThemeFactory(createStyle);
  const [_, setMonthRefs] = useRefs();

  const limitDateRange = (date: Date, minDate = props.minDate!, maxDate = props.maxDate!) => {
    if (compareDay(date, minDate) === -1) {
      return minDate;
    }
    if (compareDay(date, maxDate) === 1) {
      return maxDate;
    }
    return date;
  };

  const getInitialDate = (defaultDate = props.defaultDate) => {
    const { type, minDate, maxDate } = props;

    if (defaultDate === null) {
      return defaultDate;
    }

    const now = getToday();

    if (type === 'range') {
      if (!Array.isArray(defaultDate)) {
        // eslint-disable-next-line no-param-reassign
        defaultDate = [];
      }
      const start = limitDateRange(defaultDate[0] || now, minDate, getPrevDay(maxDate!));
      const end = limitDateRange(defaultDate[1] || now, getNextDay(minDate!));
      return [start, end];
    }

    if (type === 'multiple') {
      if (Array.isArray(defaultDate)) {
        return defaultDate.map(date => limitDateRange(date));
      }
      return [limitDateRange(now)];
    }
    if (!defaultDate || Array.isArray(defaultDate)) {
      // eslint-disable-next-line no-param-reassign
      defaultDate = now;
    }
    return limitDateRange(defaultDate);
  };

  const [state, updateState] = useSetState({
    subtitle: '',
    currentDate: getInitialDate(),
  });

  const dayOffset = useMemo(
    () => (props.firstDayOfWeek ? +props.firstDayOfWeek % 7 : 0),
    [props.firstDayOfWeek, props.firstDayOfWeek]
  );

  const months = useMemo(() => {
    const internalMonths = [];
    const cursor = new Date(props.minDate!);

    cursor.setDate(1);

    do {
      internalMonths.push(new Date(cursor));
      cursor.setMonth(cursor.getMonth() + 1);
    } while (compareMonth(cursor, props.maxDate!) !== 1);

    return internalMonths;
  }, [props.minDate, props.maxDate]);

  const buttonDisabled = useMemo(() => {
    const { currentDate } = state;

    if (currentDate) {
      if (props.type === 'range') {
        return !(currentDate as Date[])[0] || !(currentDate as Date[])[1];
      }
      if (props.type === 'multiple') {
        return !(currentDate as Date[]).length;
      }
    }

    return !currentDate;
  }, [props.type, state.currentDate]);

  const checkRange = (date: [Date, Date]) => {
    const { maxRange, rangePrompt, showRangePrompt } = props;

    if (maxRange && calcDateNum(date) > maxRange) {
      if (showRangePrompt) {
        Toast.info(rangePrompt || locale.vanCalendar.rangePrompt(+maxRange));
      }
      props.onOverRange?.();
      return false;
    }

    return true;
  };

  const onConfirm = () => {
    props.onConfirm?.(cloneDates(state.currentDate));
  };

  const select = (date: Date | Date[], complete?: boolean) => {
    const setCurrentDate = (current: Date | Date[]) => {
      state.currentDate = current;
      updateState({ currentDate: current });
      props.onSelect?.(cloneDates(state.currentDate));
    };

    if (complete && props.type === 'range') {
      const valid = checkRange(date as [Date, Date]);

      if (!valid) {
        // auto selected to max range if showConfirm
        if (props.showConfirm) {
          setCurrentDate([
            (date as Date[])[0],
            getDayByOffset((date as Date[])[0], +props.maxRange! - 1),
          ]);
        } else {
          setCurrentDate(date);
        }
        return;
      }
    }

    setCurrentDate(date);

    if (complete && !props.showConfirm) {
      onConfirm();
    }
  };

  const onClickDay = (item: CalendarDayItem) => {
    if (props.readonly || !item.date) {
      return;
    }

    const { date } = item;
    const { type } = props;
    const { currentDate } = state;

    if (type === 'range') {
      if (!currentDate) {
        select([date]);
        return;
      }

      const [startDay, endDay] = currentDate;

      if (startDay && !endDay) {
        const compareToStart = compareDay(date, startDay);

        if (compareToStart === 1) {
          select([startDay, date], true);
        } else if (compareToStart === -1) {
          select([date]);
        } else if (props.allowSameDay) {
          select([date, date], true);
        }
      } else {
        select([date]);
      }
    } else if (type === 'multiple') {
      if (!currentDate) {
        select([date]);
        return;
      }

      let selectedIndex;
      const selected = state.currentDate.some((dateItem: Date, index: number) => {
        const equal = compareDay(dateItem, date) === 0;
        if (equal) {
          selectedIndex = index;
        }
        return equal;
      });

      if (selected) {
        const [unselectedDate] = currentDate.splice(selectedIndex, 1);
        props.onUnselect?.(cloneDate(unselectedDate));
        select([...currentDate]);
      } else if (props.maxRange && currentDate.length >= props.maxRange) {
        Toast(props.rangePrompt || `选择天数不能超过 ${props.maxRange} 天`);
      } else {
        select([...currentDate, date]);
      }
    } else {
      select(date, true);
    }
  };

  const renderMonth = (date: Date, index: number) => {
    const showMonthTitle = index !== 0 || !props.showSubtitle;

    return (
      <CalendarMonth
        key={index}
        ref={setMonthRefs(index)}
        date={date}
        currentDate={state.currentDate}
        showMonthTitle={showMonthTitle}
        firstDayOfWeek={dayOffset}
        {...pick(props, [
          'type',
          'color',
          'minDate',
          'maxDate',
          'showMark',
          'formatter',
          'rowHeight',
          'showSubtitle',
          'lazyRender',
          'allowSameDay',
          'topInfoRender',
          'bottomInfoRender',
          'formatMonthTitle',
        ])}
        onClick={onClickDay}
      />
    );
  };

  const renderFooterButton = () => {
    if (props.footer) {
      return props.footer;
    }

    if (props.showConfirm) {
      const text = buttonDisabled ? props.confirmDisabledText : props.confirmText;

      return (
        <Button
          round
          type="primary"
          color={props.color}
          disabled={buttonDisabled}
          style={styles.footerButton}
          onPress={onConfirm}
        >
          {text || locale.vanCalendar.confirm}
        </Button>
      );
    }
    return null;
  };

  const renderCalendar = () => (
    <View style={[styles.calendar, props.style]}>
      <CalendarHeader
        weekdays={props.weekdays}
        title={props.title}
        subtitle={props.subtitle || state.subtitle}
        showTitle={props.showTitle}
        showSubtitle={props.showSubtitle}
        firstDayOfWeek={dayOffset}
        onPressSubtitle={props.onPressSubtitle}
      />
      <ScrollView style={styles.body}>{months.map(renderMonth)}</ScrollView>
      <View
        style={[styles.footer, !!props.safeAreaInsetBottom && { paddingBottom: insets.bottom }]}
      >
        {renderFooterButton()}
      </View>
    </View>
  );

  useEffect(() => {
    // init();
  }, [props.visible]);

  useUpdateEffect(() => {
    updateState({ currentDate: props.defaultDate });
    // scrollIntoView();
  }, [props.defaultDate]);

  if (props.poppable) {
    return (
      <Popup
        visible={props.visible}
        style={styles.popup}
        round={props.round}
        position={props.position}
        closeable={props.showTitle || props.showSubtitle}
        onClose={props.onClose}
        onClosed={props.onClosed}
      >
        {renderCalendar()}
      </Popup>
    );
  }

  return renderCalendar();
});

Calendar.defaultProps = {
  round: true,
  poppable: true,
  showMark: true,
  showTitle: true,
  showConfirm: true,
  showSubtitle: true,
  lazyRender: true,
  closeOnPopstate: true,
  closeOnClickOverlay: true,
  safeAreaInsetBottom: true,
  type: 'single',
  position: 'bottom',
  minDate: getToday(),
  maxDate: (() => {
    const now = getToday();
    return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
  })(),
  firstDayOfWeek: 0,
  showRangePrompt: true,
};

export default memo(Calendar);
