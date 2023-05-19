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

let BillO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M398.222336 113.777664v56.889344H625.77664V113.77664H398.22336z m398.222336 56.889344H682.667008c0 31.418368-25.469952 56.88832-56.889344 56.88832H398.22336c-31.419392 0-56.889344-25.469952-56.889344-56.88832h-113.77664v739.555328h568.88832V170.667008z m56.88832 0v739.555328c0 31.418368-25.469952 56.88832-56.88832 56.88832H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.88832V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344h113.777664c0-31.418368 25.469952-56.88832 56.889344-56.88832H625.77664c31.419392 0 56.889344 25.469952 56.889344 56.88832h113.77664c31.419392 0 56.889344 25.469952 56.889344 56.889344z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512.505856 453.891072l39.72096-39.72096c11.108352-11.108352 29.118464-11.108352 40.225792 0 11.108352 11.108352 11.108352 29.118464 0 40.225792l-29.1584 29.159424h19.816448c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672h-42.665984v28.444672h42.665984c15.710208 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.734464 28.444672-28.444672 28.444672h-42.665984v28.444672c0 15.709184-12.735488 28.444672-28.444672 28.444672s-28.444672-12.735488-28.444672-28.444672V625.77664h-42.665984c-15.710208 0-28.444672-12.734464-28.444672-28.444672 0-15.70816 12.734464-28.443648 28.444672-28.443648h42.665984v-28.444672h-42.665984c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h20.82816l-29.159424-29.159424c-11.108352-11.107328-11.108352-29.11744 0-40.225792 11.108352-11.108352 29.11744-11.108352 40.225792 0l39.72096 39.72096z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

BillO.defaultProps = {
  size: 18,
};

BillO = React.memo ? React.memo(BillO) : BillO;

export default BillO;