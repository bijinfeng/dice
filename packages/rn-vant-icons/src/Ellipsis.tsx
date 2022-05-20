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

let Ellipsis: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M184.889344 426.667008c39.273472 0 71.110656 31.837184 71.110656 71.110656s-31.837184 71.11168-71.110656 71.11168c-39.274496 0-71.11168-31.838208-71.11168-71.11168 0-39.273472 31.837184-71.110656 71.11168-71.110656z m327.110656 0c39.273472 0 71.110656 31.837184 71.110656 71.110656s-31.83616 71.11168-71.110656 71.11168c-39.273472 0-71.110656-31.838208-71.110656-71.11168 0-39.273472 31.83616-71.110656 71.110656-71.110656z m327.110656 0c39.274496 0 71.11168 31.837184 71.11168 71.110656s-31.837184 71.11168-71.11168 71.11168c-39.273472 0-71.110656-31.838208-71.110656-71.11168 0-39.273472 31.837184-71.110656 71.110656-71.110656z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Ellipsis.defaultProps = {
  size: 18,
};

Ellipsis = React.memo ? React.memo(Ellipsis) : Ellipsis;

export default Ellipsis;
