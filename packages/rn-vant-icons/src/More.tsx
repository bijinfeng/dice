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

let More: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m0 398.221312c-31.418368 0-56.889344 25.470976-56.889344 56.889344s25.470976 56.889344 56.889344 56.889344 56.889344-25.470976 56.889344-56.889344-25.470976-56.889344-56.889344-56.889344z m-227.555328 0c-31.419392 0-56.889344 25.470976-56.889344 56.889344s25.469952 56.889344 56.889344 56.889344c31.418368 0 56.88832-25.470976 56.88832-56.889344s-25.469952-56.889344-56.88832-56.889344z m455.110656 0c-31.418368 0-56.88832 25.470976-56.88832 56.889344s25.469952 56.889344 56.88832 56.889344c31.419392 0 56.889344-25.470976 56.889344-56.889344s-25.469952-56.889344-56.889344-56.889344z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

More.defaultProps = {
  size: 18,
};

More = React.memo ? React.memo(More) : More;

export default More;
