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

let Plus: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M550.4 550.4v332.8c0 21.20704-17.19296 38.4-38.4 38.4s-38.4-17.19296-38.4-38.4v-332.8h-332.8c-21.20704 0-38.4-17.19296-38.4-38.4s17.19296-38.4 38.4-38.4h332.8v-332.8c0-21.20704 17.19296-38.4 38.4-38.4s38.4 17.19296 38.4 38.4v332.8h332.8c21.20704 0 38.4 17.19296 38.4 38.4s-17.19296 38.4-38.4 38.4h-332.8z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

Plus.defaultProps = {
  size: 18,
};

Plus = React.memo ? React.memo(Plus) : Plus;

export default Plus;
