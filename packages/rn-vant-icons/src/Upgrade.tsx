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

let Upgrade: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M513.61792 284.040192l40.225792 40.226816L694.636544 465.05984c11.108352 11.108352 11.108352 29.11744 0 40.225792-11.108352 11.108352-29.118464 11.108352-40.226816 0l-114.37056-114.37056V710.7072c0 15.70816-12.734464 28.443648-28.443648 28.443648-15.709184 0-28.444672-12.734464-28.444672-28.443648V394.958848l-110.32576 110.326784c-11.109376 11.108352-29.119488 11.108352-40.226816 0-11.108352-11.108352-11.108352-29.11744 0-40.225792l140.792832-140.792832 40.225792-40.226816z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Upgrade.defaultProps = {
  size: 18,
};

Upgrade = React.memo ? React.memo(Upgrade) : Upgrade;

export default Upgrade;
