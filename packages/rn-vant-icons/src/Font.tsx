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

let Font: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.221376 113.664c31.419392 0 56.889344 25.469952 56.889344 56.889344v682.668032c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.553344c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.553344C113.664 139.133952 139.133952 113.664 170.553344 113.664h682.668032zM710.99904 284.331008h-398.22336c-15.709184 0-28.444672 12.735488-28.444672 28.444672 0 13.964288 10.062848 25.577472 23.33184 27.98592l5.112832 0.458752h170.667008v369.778688c0 15.709184 12.735488 28.444672 28.444672 28.444672 13.964288 0 25.577472-10.062848 27.98592-23.33184l0.458752-5.112832V341.220352h170.667008c15.709184 0 28.444672-12.735488 28.444672-28.444672 0-13.964288-10.062848-25.577472-23.33184-27.98592l-5.112832-0.458752z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Font.defaultProps = {
  size: 18,
};

Font = React.memo ? React.memo(Font) : Font;

export default Font;
