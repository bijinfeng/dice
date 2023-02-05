import React, { forwardRef, useEffect, useMemo, useState } from "react";
import type { View } from "react-native";
import Picker from "../Picker";
import { range } from "../utils/number";
import type { TimePickerProps } from "./type";
import { padZero, times } from "./utils";

const defaultFormatter = (_type: string, value: string) => value;

const TimePicker = forwardRef<View, TimePickerProps>((props, ref) => {
  const {
    minHour = 0,
    maxHour = 23,
    minMinute = 0,
    maxMinute = 59,
    formatter = defaultFormatter,
    filter,
    ...rest
  } = props;

  const formatValue = (value?: string) => {
    if (!value) {
      value = `${padZero(minHour)}:${padZero(minMinute)}`;
    }

    let [hour, minute] = value.split(":");
    hour = padZero(range(Number(hour), +minHour, +maxHour));
    minute = padZero(range(Number(minute), +minMinute, +maxMinute));

    return [hour, minute];
  };

  const [currentDate, setCurrentDate] = useState(() =>
    formatValue(props.value)
  );

  useEffect(() => {
    const formatedValue = formatValue(props.value);
    if (currentDate.join(":") !== formatedValue.join(":")) {
      setCurrentDate(formatedValue);
    }
  }, [props.value]);

  const columns = useMemo(() => {
    const ranges = [
      {
        type: "hour",
        range: [+minHour, +maxHour],
      },
      {
        type: "minute",
        range: [+minMinute, +maxMinute],
      },
    ];

    const originColumns = ranges.map(({ type, range: rangeArr }) => {
      let values = times(rangeArr[1] - rangeArr[0] + 1, (index) =>
        padZero(rangeArr[0] + index)
      ) as string[];

      if (filter) {
        values = filter(type, values);
      }

      return {
        type,
        values,
      };
    });

    return originColumns.map((column) =>
      column.values.map((value) => ({
        text: formatter(column.type, value),
        value,
      }))
    );
  }, [minHour, maxHour, minMinute, maxMinute]);

  const handleChange = (values: string[]) => {
    setCurrentDate(values);
    props.onChange?.(values.join(":"));
  };

  const handleConfirm = (values: string[]) => {
    props.onConfirm?.(values.join(":"));
  };

  return (
    <Picker
      {...rest}
      ref={ref}
      value={currentDate}
      onChange={handleChange}
      onConfirm={handleConfirm}
      columns={columns}
    />
  );
});

export default TimePicker;
