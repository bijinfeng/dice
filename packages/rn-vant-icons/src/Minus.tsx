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

let Minus: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M550.4 550.4h-409.6c-21.20704 0-38.4-17.19296-38.4-38.4s17.19296-38.4 38.4-38.4h742.4c21.20704 0 38.4 17.19296 38.4 38.4s-17.19296 38.4-38.4 38.4h-332.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Minus.defaultProps = {
  size: 18,
};

Minus = React.memo ? React.memo(Minus) : Minus;

export default Minus;
