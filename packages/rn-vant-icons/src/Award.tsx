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

let Award: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M682.667008 779.377664v166.048768c0 15.709184-12.735488 28.444672-28.444672 28.444672-3.812352 0-7.584768-0.765952-11.09504-2.2528L534.19008 925.47072a56.889344 56.889344 0 0 0-44.378112 0l-108.93824 46.14656c-14.465024 6.126592-31.159296-0.631808-37.286912-15.096832a28.444672 28.444672 0 0 1-2.2528-11.09504V779.377664c51.72736 24.572928 109.591552 38.322176 170.667008 38.322176 61.075456 0 118.939648-13.749248 170.667008-38.322176zM512 85.332992c188.51328 0 341.332992 152.820736 341.332992 341.334016S700.51328 768 512 768c-188.51328 0-341.332992-152.819712-341.332992-341.332992 0-188.51328 152.819712-341.334016 341.332992-341.334016z m0 227.556352c-62.83776 0-113.777664 50.939904-113.777664 113.77664 0 62.838784 50.939904 113.778688 113.777664 113.778688s113.777664-50.939904 113.777664-113.777664S574.83776 312.889344 512 312.889344z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Award.defaultProps = {
  size: 18,
};

Award = React.memo ? React.memo(Award) : Award;

export default Award;
