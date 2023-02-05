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

let LikeO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M417.144832 784.264192l94.977024 101.270528 341.21728-361.694208c78.251008-82.948096 76.356608-213.086208-4.278272-293.720064-79.32416-79.32416-207.93344-79.32416-287.256576 0l-50.22208 50.22208-50.210816-50.210816c-79.273984-79.273984-207.802368-79.273984-287.075328 0-80.51712 80.51712-82.312192 210.495488-4.04992 293.206016l246.898688 260.92544z m84.452352-594.359296l9.984 9.984 9.997312-9.995264c101.53984-101.53984 266.16832-101.53984 367.70816 0 102.395904 102.39488 104.802304 267.652096 5.43232 372.984832L553.50272 924.572672a56.88832 56.88832 0 0 1-2.464768 2.4576c-22.91712 21.49376-58.918912 20.338688-80.411648-2.579456l-94.802944-101.086208-246.898688-260.926464c-99.436544-105.086976-97.15712-270.232576 5.144576-372.533248 101.489664-101.489664 266.038272-101.489664 367.527936 0z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

LikeO.defaultProps = {
  size: 18,
};

LikeO = React.memo ? React.memo(LikeO) : LikeO;

export default LikeO;
