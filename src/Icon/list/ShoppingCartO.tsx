/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from "react";
import { ViewProps } from "react-native";
import { GProps, Path, Svg } from "react-native-svg";
import { getIconColor } from "./helper";

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let ShoppingCartO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M136.129536 113.58208c43.70432 0 80.344064 33.020928 84.87424 76.489728l3.904512 37.48352h666.20416c31.418368 0 56.88832 25.470976 56.88832 56.889344 0 5.4272-0.776192 10.824704-2.306048 16.03072l-84.668416 288.29184c-6.56384 22.347776-26.0864 38.436864-49.275904 40.609792L272.04608 679.950336l3.584 34.393088c1.5104 14.4896 13.723648 25.496576 28.292096 25.496576h547.684352c15.709184 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.735488 28.444672-28.444672 28.444672H303.9232c-43.70432 0-80.345088-33.019904-84.87424-76.489728L164.420608 195.969024c-1.509376-14.4896-13.722624-25.496576-28.291072-25.496576H56.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h79.240192zM266.150912 623.366144l540.292096-50.628608 84.668416-288.29184h-660.2752l35.314688 338.920448z"
        fill={getIconColor(color, 0, "#333333")}
      />
      <Path
        d="M341.332992 910.222336m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0Z"
        fill={getIconColor(color, 1, "#333333")}
      />
      <Path
        d="M739.555328 910.222336m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0Z"
        fill={getIconColor(color, 2, "#333333")}
      />
    </Svg>
  );
};

ShoppingCartO.defaultProps = {
  size: 18,
};

ShoppingCartO = React.memo ? React.memo(ShoppingCartO) : ShoppingCartO;

export default ShoppingCartO;
