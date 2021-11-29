import React, { ComponentType } from 'react';
import { hasIn } from 'lodash';
import { useTheme } from './index';

type ColorGenerator = (theme: DiceUI.Theme) => string;

const withColor = (fun: ColorGenerator) => {
  return <P extends Record<string, unknown>>(Component: ComponentType<P>): ComponentType<P> => {
    return (props: P) => {
      const theme = useTheme();
      const color = fun(theme);

      if (!hasIn(props, 'style')) {
        return <Component {...props} />;
      }

      return React.createElement<P>(Component, {
        ...props,
        style: [{ color }, props.style],
      });
    };
  };
};

export default withColor;
