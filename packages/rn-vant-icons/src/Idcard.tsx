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

let Idcard: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M910.222336 170.667008c31.403008 0 56.88832 25.486336 56.88832 56.88832v568.889344c0 31.459328-25.485312 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V227.555328c0-31.401984 25.485312-56.88832 56.88832-56.88832z m0 170.665984H113.77664v455.11168H910.22336V341.332992zM711.110656 625.777664c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h398.221312zM910.22336 227.555328H113.77664v56.889344H910.22336v-56.889344z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Idcard.defaultProps = {
  size: 18,
};

Idcard = React.memo ? React.memo(Idcard) : Idcard;

export default Idcard;
