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

let FilterO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M540.444672 541.273088l255.719424-370.60608H227.835904l255.719424 370.60608V832.50176l56.889344 34.134016V541.273088z m-113.777664 17.722368L168.701952 185.136128a45.510656 45.510656 0 0 1-8.051712-25.846784c0-25.135104 20.376576-45.51168 45.51168-45.51168h611.67616c9.233408 0 18.24768 2.808832 25.846784 8.051712 20.688896 14.27456 25.88672 42.61888 11.61216 63.306752L597.334016 558.995456v408.1152l-170.665984-102.4v-305.7152z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

FilterO.defaultProps = {
  size: 18,
};

FilterO = React.memo ? React.memo(FilterO) : FilterO;

export default FilterO;
