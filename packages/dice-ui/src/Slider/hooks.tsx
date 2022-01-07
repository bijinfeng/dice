import { useCallback, useMemo } from 'react';

import { isArray } from '../utils/typeof';
import { useControllableValue } from '../hooks';
import type { SliderProps } from './types';
import { clamp } from './helpers';

export const useValue = ({ range, min = 0, max = 100, value, onChange }: SliderProps) => {
  const handleChange = useCallback(
    (v: number[]) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onChange?.(range ? v : v[0]);
    },
    [onChange, range]
  );

  const props = useMemo<SliderProps>(() => {
    const _value = value
      ? (isArray(value) ? value : [value]).map(i => clamp(i, min, max))
      : range
      ? [min, max]
      : [min];

    return onChange ? { value: _value, onChange: handleChange } : { value: _value };
  }, [handleChange, min, max, range, value]);

  return useControllableValue<number[]>(props);
};
