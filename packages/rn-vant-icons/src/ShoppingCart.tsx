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

let ShoppingCart: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M136.129536 113.58208c43.70432 0 80.344064 33.020928 84.87424 76.489728l3.904512 37.48352h740.835328a1.024 1.024 0 0 1 0.982016 1.312768L850.352128 625.112064a1.024 1.024 0 0 1-0.886784 0.731136l-577.41824 54.10816 3.584 34.392064c1.5104 14.4896 13.723648 25.496576 28.292096 25.496576h547.684352c15.709184 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.735488 28.444672-28.444672 28.444672H303.9232c-43.70432 0-80.345088-33.019904-84.87424-76.489728L164.420608 195.969024c-1.509376-14.4896-13.722624-25.496576-28.291072-25.496576H56.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h79.240192z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M341.332992 910.222336m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M739.555328 910.222336m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

ShoppingCart.defaultProps = {
  size: 18,
};

ShoppingCart = React.memo ? React.memo(ShoppingCart) : ShoppingCart;

export default ShoppingCart;
