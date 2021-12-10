import { default as isStr } from './isString';

const isType =
  (t: 'Array' | 'Object' | 'Function' | 'String' | 'Number' | 'Null' | 'Undefined') => (v: any) =>
    Object.prototype.toString.call(v) === `[object ${t}]`;

/** 已经声明/定义的数据 */
export function isDef<T>(val: T): val is NonNullable<T> {
  return val !== undefined && val !== null;
}

/** 是数组 */
export const isArray = <T>(v: T[]): v is T[] => isType('Array')(v);

/** 是对象 */
export const isObject = <T>(v: T): v is T => isType('Object')(v);

/** 是函数 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (v: any): v is Function => isType('Function')(v);

/** 是一个 Promise */
export const isPromise = <T = any>(val: any): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

/** 是手机号码 */
export function isMobile(value: string): boolean {
  // eslint-disable-next-line no-param-reassign
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}

/** 是空 */
export const isNullish = (value: any) => {
  return ['', undefined, null].includes(value);
};

export const isString = isStr;
