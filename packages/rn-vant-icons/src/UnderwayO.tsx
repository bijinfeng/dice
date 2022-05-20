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

let UnderwayO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M508.899328 227.555328c10.171392 0 18.688 7.707648 19.700736 17.828864l27.81184 278.119424 173.637632 109.028352c8.669184 5.443584 11.927552 16.490496 7.602176 25.766912-4.3264 9.27744-14.88384 13.881344-24.625152 10.739712l-257.760256-83.130368-0.119808 0.001024 0.003072-0.038912-0.038912-0.011264 0.0512-0.109568 34.03776-340.365312c1.011712-10.121216 9.52832-17.82784 19.699712-17.82784z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

UnderwayO.defaultProps = {
  size: 18,
};

UnderwayO = React.memo ? React.memo(UnderwayO) : UnderwayO;

export default UnderwayO;
