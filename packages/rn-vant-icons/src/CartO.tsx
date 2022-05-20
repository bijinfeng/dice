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

let CartO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M341.332992 853.332992m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M739.555328 853.332992m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M232.368128 284.798976l42.764288 372.946944c1.647616 14.3616 13.80352 25.203712 28.259328 25.203712h500.655104c13.765632 0 25.554944-9.856 27.995136-23.40352l61.45024-341.261312c2.783232-15.461376-7.493632-30.252032-22.953984-33.035264a28.444672 28.444672 0 0 0-5.041152-0.45056h-633.12896z m-6.52288-56.889344h639.65184c5.070848 0 10.13248 0.452608 15.122432 1.35168 46.383104 8.351744 77.212672 52.722688 68.860928 99.104768l-61.45024 341.262336c-7.318528 40.641536-42.687488 70.21056-83.98336 70.21056h-500.65408c-43.367424 0-79.838208-32.52736-84.779008-75.61216L164.919296 195.958784c-1.646592-14.3616-13.80352-25.203712-28.259328-25.203712H56.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672S41.179136 113.865728 56.889344 113.865728h79.770624c43.367424 0 79.838208 32.52736 84.777984 75.61216l4.407296 38.431744z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

CartO.defaultProps = {
  size: 18,
};

CartO = React.memo ? React.memo(CartO) : CartO;

export default CartO;
