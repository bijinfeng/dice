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

let EcardPay: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M910.222336 170.667008c31.459328 0 56.88832 25.428992 56.88832 56.88832v568.889344c0 31.459328-25.428992 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V227.555328c0-31.459328 25.485312-56.88832 56.88832-56.88832z m0 170.665984H113.77664v455.11168H910.22336V341.332992z m0-113.77664H113.77664v56.88832H910.22336v-56.889344zM426.667008 711.109632h170.665984c15.702016 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.742656-28.444672-28.444672-28.444672H455.110656v-56.889344h142.22336c15.700992 0 28.443648-12.742656 28.443648-28.443648 0-15.702016-12.742656-28.444672-28.444672-28.444672H455.110656v-56.889344h142.22336c15.700992 0 28.443648-12.742656 28.443648-28.444672 0-15.700992-12.742656-28.443648-28.444672-28.443648H426.667008c-15.702016 0-28.444672 12.742656-28.444672 28.443648v227.556352c0 15.700992 12.742656 28.443648 28.444672 28.443648"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

EcardPay.defaultProps = {
  size: 18,
};

EcardPay = React.memo ? React.memo(EcardPay) : EcardPay;

export default EcardPay;
