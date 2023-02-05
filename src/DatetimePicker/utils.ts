export function times(
  n: number,
  iteratee: (index: number) => string
): unknown[] {
  let index = -1;
  const result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

export function getMonthEndDay(year: number, month: number): number {
  return 32 - new Date(year, month - 1, 32).getDate();
}

export function padZero(num: number | string, targetLength = 2): string {
  let str = `${num}`;

  while (str.length < targetLength) {
    str = `0${str}`;
  }

  return str;
}

export const splitDate = (
  _date: Date
): [number, number, number, number, number] => {
  const year = _date.getFullYear();
  const month = _date.getMonth() + 1;
  const date = _date.getDate();
  const hour = _date.getHours();
  const minute = _date.getMinutes();

  return [year, month, date, hour, minute];
};
