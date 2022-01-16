export function range(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

export function addNumber(num1: number, num2: number): number {
  const cardinal = 10 ** 10;
  return Math.round((num1 + num2) * cardinal) / cardinal;
}
