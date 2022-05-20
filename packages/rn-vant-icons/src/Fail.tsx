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

let Fail: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M455.12192 128.99328c-0.187392-8.402944 5.812224-15.215616 14.620672-15.215616h84.514816c8.262656 0 14.81728 6.38976 14.620672 15.21664l-12.035072 538.456064c-0.187392 8.403968-7.324672 15.21664-15.03744 15.21664h-59.611136c-8.117248 0-14.839808-6.38976-15.03744-15.21664L455.12192 128.99328zM512 853.334016c-31.418368 0-56.889344-25.469952-56.889344-56.88832 0-31.419392 25.470976-56.889344 56.889344-56.889344s56.889344 25.469952 56.889344 56.889344c0 31.418368-25.470976 56.88832-56.889344 56.88832z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Fail.defaultProps = {
  size: 18,
};

Fail = React.memo ? React.memo(Fail) : Fail;

export default Fail;
