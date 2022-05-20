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

let Circle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 903.110656c216.004608 0 391.110656-175.106048 391.110656-391.110656S728.004608 120.889344 512 120.889344 120.889344 295.995392 120.889344 512 295.995392 903.110656 512 903.110656z m0 64C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Circle.defaultProps = {
  size: 18,
};

Circle = React.memo ? React.memo(Circle) : Circle;

export default Circle;
