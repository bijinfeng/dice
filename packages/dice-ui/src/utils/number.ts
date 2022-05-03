export function range(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

export function addNumber(num1: number, num2: number): number {
  const cardinal = 10 ** 10;
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

function trimExtraChar(value: string, char: string, regExp: RegExp) {
  const index = value.indexOf(char);

  if (index === -1) {
    return value;
  }

  if (char === '-' && index !== 0) {
    return value.slice(0, index);
  }

  return value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
}

export function formatNumber(value: string, allowDot = true, allowMinus = true): string {
  let _value = value;
  if (allowDot) {
    _value = trimExtraChar(value, '.', /\./g);
  } else {
    // eslint-disable-next-line prefer-destructuring
    _value = value.split('.')[0];
  }

  if (allowMinus) {
    _value = trimExtraChar(value, '-', /-/g);
  } else {
    _value = value.replace(/-/, '');
  }

  const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;

  return _value.replace(regExp, '');
}
