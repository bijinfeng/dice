import { useState, useCallback, useRef } from 'react';
import isDate from 'lodash-es/isDate';
import isEqual from 'lodash-es/isEqual';
import noop from 'lodash-es/noop';
import { useMemoizedFn, useUpdateEffect } from '../hooks';
import { range } from '../utils/number';
import { splitDate } from './utils';
import type { DatePickerProps } from './type';

interface DateState extends Pick<DatePickerProps, 'onChange'> {
  minDate: Date;
  maxDate: Date;
  value?: Date;
}

interface ReturnUseDateState {
  date: Date;
  splitDates: number[];
  setDates: (dates: Record<number, number>) => void;
}

export const useDateState = (props: DateState): ReturnUseDateState => {
  const { minDate, maxDate, value } = props;
  const preCacheDate = useRef<Date | null>(null);
  const onChange = useMemoizedFn(props.onChange ?? noop);

  const formatValue = (_value?: DatePickerProps['value']) => {
    if (!isDate(_value)) {
      _value = minDate;
    }
    return new Date(range(_value?.getTime(), minDate.getTime(), maxDate.getTime()));
  };

  const intialDate = () => {
    const _date = formatValue(value);
    preCacheDate.current = _date;

    return {
      date: _date,
      splitDates: splitDate(_date),
    };
  };

  const [currentDate, setCurrentDate] = useState(intialDate);

  const handleChange = useCallback(
    (newDate: Date) => {
      preCacheDate.current = newDate;
      onChange(newDate);
    },
    [onChange]
  );

  const setDates = useCallback(
    (dates: Record<string, number>) => {
      setCurrentDate(preDate => {
        const indexs = Object.keys(dates);
        indexs.forEach(index => {
          preDate.splitDates[Number(index)] = dates[Number(index)];
        });
        const newDate = new Date(...preDate.splitDates);
        handleChange(newDate);
        return { date: newDate, splitDates: preDate.splitDates };
      });
    },
    [handleChange]
  );

  useUpdateEffect(() => {
    if (!isEqual(value, preCacheDate.current)) {
      setCurrentDate(intialDate);
    }
  }, [value]);

  return { ...currentDate, setDates };
};
