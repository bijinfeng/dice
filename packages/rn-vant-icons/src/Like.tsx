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

let Like: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M376.892416 823.40352L129.993728 562.477056c-99.436544-105.086976-97.15712-270.232576 5.144576-372.533248 101.490688-101.489664 266.038272-101.489664 367.52896 0l9.984 9.984 9.996288-9.99424c101.53984-101.540864 266.16832-101.540864 367.70816 0 102.395904 102.393856 104.802304 267.651072 5.433344 372.984832l-341.21728 361.694208a56.88832 56.88832 0 0 1-2.463744 2.4576c-22.91712 21.492736-58.918912 20.33664-80.411648-2.58048l-94.803968-101.086208z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Like.defaultProps = {
  size: 18,
};

Like = React.memo ? React.memo(Like) : Like;

export default Like;
