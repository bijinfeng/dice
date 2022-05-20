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

let Add: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M711.339008 540.444672h-170.89536v170.894336c0 15.643648-12.742656 28.443648-28.443648 28.443648s-28.444672-12.8-28.444672-28.443648v-170.89536H312.660992c-15.643648 0-28.443648-12.742656-28.443648-28.443648s12.8-28.444672 28.443648-28.444672h170.89536V312.660992c0-15.643648 12.742656-28.443648 28.443648-28.443648s28.444672 12.8 28.444672 28.443648v170.89536h170.894336c15.643648 0 28.443648 12.742656 28.443648 28.443648s-12.8 28.444672-28.443648 28.444672M512 56.889344c-251.334656 0-455.110656 203.776-455.110656 455.110656 0 251.334656 203.776 455.110656 455.110656 455.110656 251.334656 0 455.110656-203.776 455.110656-455.110656 0-251.334656-203.776-455.110656-455.110656-455.110656"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Add.defaultProps = {
  size: 18,
};

Add = React.memo ? React.memo(Add) : Add;

export default Add;
