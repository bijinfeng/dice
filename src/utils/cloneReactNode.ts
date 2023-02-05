import React from "react";

export const cloneReactNode = <T>(
  node: React.ReactNode,
  props?: Record<string, any>
): React.ReactNode => {
  if (React.isValidElement(node) && props) {
    return React.cloneElement<React.ReactElement<T>>(node, props);
  }

  return node;
};
