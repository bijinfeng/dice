import type { PickerOption, State, PickerProps } from './type';

// eslint-disable-next-line no-shadow
export enum DataType {
  SINGLE = 'single',
  CASCADE = 'cascade',
  MULTIPLE = 'multiple',
}

export const getDateType = (columnes: PickerProps['columns'], childrenKey: string): DataType => {
  if (isPlain(columnes)) {
    const firstColumn = columnes[0];
    if (Array.isArray(firstColumn[childrenKey])) {
      return DataType.CASCADE;
    }
    return DataType.SINGLE;
  }
  return DataType.MULTIPLE;
};

/**
 * 判断是否是多列
 * @param columnes
 * @returns
 */
export const isPlain = (columnes: PickerProps['columns']): columnes is PickerOption[] => {
  const firstColumn = columnes[0];
  return !Array.isArray(firstColumn);
};

export const flateColumns = (
  columns: PickerOption[][],
  values: State['values'],
  valueKey: string,
  childrenKey: string
): State => {
  const newValues: State['values'] = [];
  const options: PickerOption[] = [];
  const indexs: number[] = [];
  const newColumns: PickerOption[][] = [];

  const firstColumn = columns[0][0];

  if (Array.isArray(firstColumn[childrenKey])) {
    // 级联选择
    let targetColumns = columns[0];

    while (targetColumns) {
      const shiftValue = values.shift();
      const targetIndex = shiftValue
        ? targetColumns.findIndex(item => item[valueKey] === shiftValue)
        : 0;
      newValues.push(targetColumns[targetIndex][valueKey]);
      options.push(targetColumns[targetIndex]);
      indexs.push(targetIndex);
      newColumns.push(targetColumns);
      targetColumns = targetColumns[targetIndex][childrenKey];
    }
  } else {
    // 多列选择
    columns.forEach((items, idx) => {
      let columnIndex = 0;
      if (values[idx]) {
        const targetIndex = items.findIndex(item => item[valueKey] === values[idx]);
        columnIndex = targetIndex > -1 ? targetIndex : 0;
      }
      newValues.push(items[columnIndex][valueKey]);
      options.push(items[columnIndex]);
      indexs.push(columnIndex);
      newColumns.push(items);
    });
  }

  return {
    values: newValues,
    options,
    indexs,
    columns: newColumns,
  };
};
