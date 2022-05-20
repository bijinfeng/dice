/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let ArrowUp: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M525.492224 291.8912a42.467328 42.467328 0 0 1 20.504576 11.394048L887.92064 645.211136c16.662528 16.661504 16.662528 43.676672 0 60.3392s-43.677696 16.662528-60.3392 0L515.698688 393.66656 203.86304 705.502208c-16.662528 16.661504-43.677696 16.661504-60.3392 0-16.662528-16.662528-16.662528-43.677696 0-60.340224L485.44768 303.236096c10.860544-10.860544 26.120192-14.642176 40.04352-11.343872z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

ArrowUp.defaultProps = {
  size: 18,
};

ArrowUp = React.memo ? React.memo(ArrowUp) : ArrowUp;

export default ArrowUp;
