import React from 'react';
import Constants from '../utils/constants';

export function parseChildList<T, R = { key?: string; node: React.ReactElement<T> } & T>(
  children: React.ReactNode
): R[] {
  return React.Children.toArray(children).reduce<R[]>((result, node) => {
    if (React.isValidElement(node)) {
      const key = node.key !== undefined ? String(node.key) : undefined;
      result.push({
        key,
        ...node.props,
        node,
      });
    }
    return result;
  }, []);
}

export const getScreenWidth = (useSafeArea?: boolean): number => {
  const { left, right } = Constants.getSafeAreaInsets();
  return Constants.windowWidth - (useSafeArea && Constants.isIphoneX ? left + right : 0);
};
