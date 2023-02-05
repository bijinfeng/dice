import isNil from "lodash-es/isNil";
import isObject from "lodash-es/isObject";

type ObjectIndex = Record<string, any>;

function assignKey(to: ObjectIndex, from: ObjectIndex, key: string) {
  const val = from[key];

  if (isNil(val)) {
    return;
  }

  if (!Object.prototype.hasOwnProperty.call(to, key) || !isObject(val)) {
    // eslint-disable-next-line no-param-reassign
    to[key] = val;
  } else {
    // eslint-disable-next-line
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

export function deepAssign(to: ObjectIndex, from: ObjectIndex): ObjectIndex {
  Object.keys(from).forEach((key) => {
    assignKey(to, from, key);
  });

  return to;
}
