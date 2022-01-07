// 取中间值
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const getValueForPosition = (
  positionInView: number,
  containerWidth: number,
  min: number,
  max: number,
  step: number
): number => {
  const relStepUnit = step / (max - min);
  let relPosition = positionInView / containerWidth;
  const relOffset = relPosition % relStepUnit;
  relPosition -= relOffset;
  if (relOffset / relStepUnit >= 0.5) {
    relPosition += relStepUnit;
  }
  return clamp(min + Math.round(relPosition / relStepUnit) * step, min, max);
};

// 获取 value 中离 position 差值最小的下标
export const getActiveThumb = (
  position: number,
  value: number[],
  min: number,
  max: number,
  containerWidth: number
): number => {
  let curIndex = 0;
  let minDiff = Math.abs(position - value[0]);

  value.forEach((it, index) => {
    const itPositon = (it / (max - min)) * containerWidth;
    const diff = Math.abs(position - itPositon);
    if (diff < minDiff) {
      minDiff = diff;
      curIndex = index;
    }
  });
  return curIndex;
};
