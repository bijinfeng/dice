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

let Warning: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344zM514.844672 691.2c-21.993472 0-39.82336 17.828864-39.82336 39.822336s17.829888 39.822336 39.82336 39.822336 39.822336-17.828864 39.822336-39.82336c0-21.992448-17.828864-39.821312-39.82336-39.821312z m29.580288-438.044672H485.26336c-6.165504 0-10.365952 4.768768-10.23488 10.651648l8.424448 376.91904c0.13824 6.17984 4.844544 10.651648 10.52672 10.651648h41.728c5.398528 0 10.3936-4.768768 10.52672-10.651648l8.423424-376.91904c0.13824-6.178816-4.450304-10.651648-10.233856-10.651648z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Warning.defaultProps = {
  size: 18,
};

Warning = React.memo ? React.memo(Warning) : Warning;

export default Warning;
