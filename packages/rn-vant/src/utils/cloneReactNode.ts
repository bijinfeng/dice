import React from 'react';

export const cloneReactNode = <T>(
  node: React.ReactNode,
  props?: Record<string, any>
): React.ReactNode => {
  if (React.isValidElement(node) && props) {
    // TODO：类型问题
    return React.cloneElement<React.ReactElement<T>>(node as unknown as any, props);
  }

  return node;
};
