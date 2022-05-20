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

let Medal: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.006144 284.444672c188.47232 0 341.332992 152.803328 341.332992 341.332992 0 188.473344-152.860672 341.332992-341.332992 341.332992-188.530688 0-341.334016-152.859648-341.334016-341.332992 0-188.529664 152.803328-341.332992 341.334016-341.332992z m40.219648 220.672c-22.243328-22.243328-58.254336-22.243328-80.44032 0l-80.441344 80.44032c-22.243328 22.244352-22.243328 58.198016 0 80.441344l80.441344 80.44032c22.185984 22.244352 58.196992 22.244352 80.44032 0l80.441344-80.44032c22.243328-22.243328 22.243328-58.196992 0-80.441344zM682.667008 56.89344c31.459328 0 56.88832 25.428992 56.88832 56.889344v113.77664l-44.713984 44.715008c-38.684672-20.08064-81.180672-33.734656-125.952-40.219648v-118.272H455.110656v118.272c-44.771328 6.484992-87.267328 20.137984-125.952 40.219648l-44.713984-44.713984V113.783808c0-31.460352 25.428992-56.889344 56.88832-56.889344z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Medal.defaultProps = {
  size: 18,
};

Medal = React.memo ? React.memo(Medal) : Medal;

export default Medal;
