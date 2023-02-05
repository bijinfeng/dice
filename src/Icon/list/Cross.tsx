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

let Cross: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M573.592576 513.252352l261.472256 261.472256c16.662528 16.662528 16.662528 43.677696 0 60.340224s-43.677696 16.662528-60.340224 0L513.252352 573.592576 251.78112 835.064832c-16.662528 16.662528-43.677696 16.662528-60.3392 0-16.662528-16.662528-16.662528-43.677696 0-60.340224l261.472256-261.472256L191.440896 251.78112c-16.662528-16.662528-16.662528-43.677696 0-60.3392 16.661504-16.662528 43.676672-16.662528 60.3392 0l261.472256 261.472256 261.472256-261.472256c16.662528-16.662528 43.677696-16.662528 60.340224 0 16.662528 16.661504 16.662528 43.676672 0 60.3392L573.592576 513.252352z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

Cross.defaultProps = {
  size: 18,
};

Cross = React.memo ? React.memo(Cross) : Cross;

export default Cross;
