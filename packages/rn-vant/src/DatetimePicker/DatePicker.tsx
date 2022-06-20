import React, { forwardRef, useMemo } from 'react';
import type { View } from 'react-native';
import set from 'lodash-es/set';
import Picker from '../Picker';
import { getMonthEndDay, times, padZero } from './utils';
import type { DatePickerProps } from './type';
import { useDateState } from './useDateState';

const currentYear = new Date().getFullYear();
const defaultMinDate = new Date(currentYear - 10, 0, 1);
const defaultMaxDate = new Date(currentYear + 10, 11, 31);
const defaultFormatter = (_type: string, value: string) => value;

const DatePicker = forwardRef<View, DatePickerProps>((props, ref) => {
  const {
    type = 'datetime',
    minDate = defaultMinDate,
    maxDate = defaultMaxDate,
    formatter = defaultFormatter,
    filter,
    onConfirm,
    ...rest
  } = props;

  const {
    date: currentDate,
    splitDates: currentSplitDates,
    setDates,
  } = useDateState({
    minDate,
    maxDate,
    value: props.value,
    onChange: props.onChange,
  });

  const getBoundary = (boundaryType: 'max' | 'min', value: Date) => {
    const boundary = boundaryType === 'min' ? minDate : maxDate;
    const year = boundary.getFullYear();
    let month = 1;
    let date = 1;
    let hour = 0;
    let minute = 0;

    if (boundaryType === 'max') {
      month = 12;
      date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
      hour = 23;
      minute = 59;
    }

    if (value.getFullYear() === year) {
      month = boundary.getMonth() + 1;
      if (value.getMonth() + 1 === month) {
        date = boundary.getDate();
        if (value.getDate() === date) {
          hour = boundary.getHours();
          if (value.getHours() === hour) {
            minute = boundary.getMinutes();
          }
        }
      }
    }

    return {
      [`${boundaryType}Year`]: year,
      [`${boundaryType}Month`]: month,
      [`${boundaryType}Date`]: date,
      [`${boundaryType}Hour`]: hour,
      [`${boundaryType}Minute`]: minute,
    };
  };

  const ranges = useMemo(() => {
    const minDoundary = getBoundary('min', currentDate);
    const maxBoundary = getBoundary('max', currentDate);

    let result = [
      {
        index: 0,
        type: 'year',
        range: [minDoundary.minYear, maxBoundary.maxYear],
      },
      {
        index: 1,
        type: 'month',
        range: [minDoundary.minMonth, maxBoundary.maxMonth],
      },
      {
        index: 2,
        type: 'day',
        range: [minDoundary.minDate, maxBoundary.maxDate],
      },
      {
        index: 3,
        type: 'hour',
        range: [minDoundary.minHour, maxBoundary.maxHour],
      },
      {
        index: 4,
        type: 'minute',
        range: [minDoundary.minMinute, maxBoundary.maxMinute],
      },
    ];

    switch (type) {
      case 'date':
        result = result.slice(0, 3);
        break;
      case 'year-month':
        result = result.slice(0, 2);
        break;
      case 'month-day':
        result = result.slice(1, 3);
        break;
      case 'datehour':
        result = result.slice(0, 4);
        break;
      default:
        break;
    }

    if (props.columnsOrder) {
      const columnsOrder = props.columnsOrder.concat(result.map(column => column.type));
      result.sort((a, b) => columnsOrder.indexOf(a.type) - columnsOrder.indexOf(b.type));
    }

    return result;
  }, [currentDate]);

  const columns = useMemo(() => {
    const originColumns = ranges.map(({ type: _type, range: rangeArr }) => {
      // 根据范围获取每列的值
      let values = times(rangeArr[1] - rangeArr[0] + 1, (index: number) => {
        return padZero(rangeArr[0] + index);
      }) as string[];

      if (filter) {
        values = filter(_type, values);
      }

      return {
        type: _type,
        values,
      };
    });

    return originColumns.map(column =>
      column.values.map(value => ({
        text: formatter(column.type, value),
        value,
      }))
    );
  }, [ranges]);

  const handleChange = (values: string[]) => {
    const keyValues = values.reduce((obj: Record<string, number>, item, index) => {
      const key = ranges[index].index;
      set(obj, key, item);
      return obj;
    }, {});
    setDates(keyValues);
  };

  const handleConfirm = () => {
    onConfirm?.(currentDate);
  };

  const pickerValues = useMemo(() => {
    return ranges.map(item => padZero(currentSplitDates[item.index]));
  }, [currentSplitDates, ranges]);

  return (
    <Picker
      {...rest}
      ref={ref}
      columns={columns}
      value={pickerValues}
      onChange={handleChange}
      onConfirm={handleConfirm}
    />
  );
});

export default DatePicker;
