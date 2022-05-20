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

let VipCardO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M910.222336 170.667008c31.403008 0 56.88832 25.486336 56.88832 56.88832v568.889344c0 31.459328-25.485312 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V227.555328c0-31.401984 25.485312-56.88832 56.88832-56.88832z m0 170.665984H113.77664v455.11168H910.22336V341.332992z m0-113.77664H113.77664v56.88832H910.22336v-56.889344zM245.588992 438.953984h43.350016l66.900992 198.656h1.024l66.900992-198.656h43.350016l-86.699008 243.712h-48.128l-86.699008-243.712z m247.126016 0h39.936v243.712h-39.936v-243.712z m87.721984 0H681.472c58.708992 0 88.404992 24.916992 88.404992 74.752 0 50.176-29.696 75.433984-89.088 75.433984h-60.416v93.526016h-39.936v-243.712z m39.936 34.132992v81.92H678.4c17.748992 0 30.72-3.412992 38.912-9.556992 8.192-6.486016 12.288-17.067008 12.288-31.744 0-14.678016-4.436992-24.918016-12.628992-31.062016C708.779008 476.16 695.808 473.088 678.4 473.088h-58.027008z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VipCardO.defaultProps = {
  size: 18,
};

VipCardO = React.memo ? React.memo(VipCardO) : VipCardO;

export default VipCardO;
