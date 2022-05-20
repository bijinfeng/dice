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

let Gem: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M645.773312 426.665984l-134.68672 486.074368-143.988736-486.074368h278.675456z m305.065984 0l-358.196224 404.7872 112.162816-404.7872h246.033408z m-643.074048 0L426.52672 827.57632 74.19904 426.665984h233.566208z m79.4368-312.88832l-74.534912 256H66.343936l99.647488-255.673344a0.512 0.512 0 0 1 0.477184-0.326656h220.73344z m167.49568 0l87.533568 256H371.918848l74.534912-256h108.243968z m301.78304 0a0.512 0.512 0 0 1 0.475136 0.32256l101.62688 255.67744H702.353408l-87.533568-256h241.660928z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Gem.defaultProps = {
  size: 18,
};

Gem = React.memo ? React.memo(Gem) : Gem;

export default Gem;
