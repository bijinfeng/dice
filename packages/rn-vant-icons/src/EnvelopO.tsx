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

let EnvelopO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M113.777664 227.555328v568.889344H910.22336V227.555328H113.77664z m0-56.88832H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832v568.889344c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V227.555328c0-31.418368 25.469952-56.88832 56.88832-56.88832z m-46.186496 79.121408l35.484672-44.466176 392.153088 312.945664c10.39872 8.298496 25.15968 8.281088 35.53792-0.043008l390.10304-312.859648 35.593216 44.38016-390.104064 312.859648c-31.13472 24.97024-75.419648 25.023488-106.614784 0.129024L67.591168 249.788416z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

EnvelopO.defaultProps = {
  size: 18,
};

EnvelopO = React.memo ? React.memo(EnvelopO) : EnvelopO;

export default EnvelopO;
