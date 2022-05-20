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

let CommentO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 807.663616l83.332096-124.997632h314.89024v-512H113.77664v512h314.89024L512 807.663616z m47.3344 31.555584a56.889344 56.889344 0 0 1-15.777792 15.778816c-26.14272 17.42848-61.462528 10.36288-78.891008-15.778816l-66.443264-99.664896H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832v-512c0-31.419392 25.469952-56.889344 56.88832-56.889344H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.889344v512c0 31.418368-25.469952 56.88832-56.88832 56.88832H625.77664l-66.443264 99.66592z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M312.889344 284.443648h398.221312c15.710208 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.734464 28.444672-28.444672 28.444672H312.889344c-15.710208 0-28.444672-12.734464-28.444672-28.444672 0-15.70816 12.734464-28.443648 28.444672-28.443648zM312.889344 455.109632h398.221312c15.710208 0 28.444672 12.735488 28.444672 28.444672S726.820864 512 711.110656 512H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

CommentO.defaultProps = {
  size: 18,
};

CommentO = React.memo ? React.memo(CommentO) : CommentO;

export default CommentO;
