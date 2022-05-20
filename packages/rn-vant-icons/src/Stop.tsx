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

let Stop: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M348.16 307.2h327.68c22.621184 0 40.96 18.338816 40.96 40.96v327.68c0 22.621184-18.338816 40.96-40.96 40.96H348.16c-22.621184 0-40.96-18.338816-40.96-40.96V348.16c0-22.621184 18.338816-40.96 40.96-40.96z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Stop.defaultProps = {
  size: 18,
};

Stop = React.memo ? React.memo(Stop) : Stop;

export default Stop;
