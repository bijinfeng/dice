import React, { forwardRef } from 'react';
import type { View } from 'react-native';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import type { DateTimePickerProps, TimePickerProps, DatePickerProps } from './type';

const DatetimePicker = forwardRef<View, DateTimePickerProps>((props, ref) => {
  const isTimePicker = props.type === 'time';

  if (isTimePicker) {
    return <TimePicker ref={ref} {...(props as TimePickerProps)} />;
  }

  return <DatePicker ref={ref} {...(props as DatePickerProps)} />;
});

export default DatetimePicker;
