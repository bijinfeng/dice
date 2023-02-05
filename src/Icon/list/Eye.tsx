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

let Eye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.004096 170.667008c-307.160064 0-455.114752 298.305536-455.114752 312.88832 0 14.599168 144.003072 312.889344 455.114752 312.889344 311.105536 0 455.10656-298.2912 455.10656-312.889344 0-14.582784-147.954688-312.88832-455.10656-312.88832z m0 483.555328c-94.2592 0-170.67008-76.41088-170.67008-170.669056 0-94.2592 76.41088-170.663936 170.67008-170.663936 94.251008 0 170.662912 76.40576 170.662912 170.663936 0 94.257152-76.411904 170.669056-170.662912 170.669056z m0-256c-47.136768 0-85.337088 38.20544-85.337088 85.32992 0 47.13472 38.20032 85.33504 85.337088 85.33504 47.123456 0 85.32992-38.20032 85.32992-85.33504 0-47.12448-38.206464-85.32992-85.32992-85.32992z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

Eye.defaultProps = {
  size: 18,
};

Eye = React.memo ? React.memo(Eye) : Eye;

export default Eye;
