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

let Underway: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m-3.100672 170.665984c-10.171392 0-18.688 7.707648-19.700736 17.828864l-34.035712 340.36224-0.0512 0.11264 0.038912 0.01024-0.004096 0.04096 0.12288-0.001024 257.757184 83.129344c9.6256 3.104768 20.047872-1.353728 24.467456-10.409984l0.157696-0.329728c4.325376-9.27744 1.067008-20.323328-7.602176-25.766912L556.41088 523.503616l-27.81184-278.1184c-1.000448-10.00448-9.331712-17.649664-19.346432-17.826816z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Underway.defaultProps = {
  size: 18,
};

Underway = React.memo ? React.memo(Underway) : Underway;

export default Underway;
