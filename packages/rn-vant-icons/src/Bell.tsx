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

let Bell: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M597.332992 881.777664c0 47.128576-38.20544 85.332992-85.332992 85.332992-47.128576 0-85.332992-38.20544-85.332992-85.332992h170.665984z m-85.332992-768c15.709184 0 28.444672 12.735488 28.444672 28.444672l0.001024 29.613056C715.650048 186.290176 853.332992 333.06624 853.332992 512v284.443648h85.334016c15.70816 0 28.443648 12.735488 28.443648 28.445696 0 15.70816-12.734464 28.443648-28.443648 28.443648H85.332992c-15.70816 0-28.443648-12.734464-28.443648-28.443648 0-15.710208 12.734464-28.444672 28.443648-28.444672h85.334016V512c0-178.93376 137.683968-325.710848 312.88832-340.164608v-29.61408c0-15.70816 12.735488-28.443648 28.444672-28.443648z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Bell.defaultProps = {
  size: 18,
};

Bell = React.memo ? React.memo(Bell) : Bell;

export default Bell;
