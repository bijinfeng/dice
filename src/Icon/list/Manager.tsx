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

let Manager: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M146.162688 662.038528l183.54688-87.602176a56.889344 56.889344 0 0 1 24.50432-5.547008h315.573248c8.47872 0 16.850944 1.8944 24.50432 5.547008l183.545856 87.602176a56.889344 56.889344 0 0 1 32.385024 51.341312v196.842496c0 31.418368-25.469952 56.88832-56.889344 56.88832H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.88832v-196.84352a56.889344 56.889344 0 0 1 32.385024-51.340288zM568.889344 768c0 15.709184 12.734464 28.444672 28.443648 28.444672h113.777664c15.710208 0 28.444672-12.735488 28.444672-28.444672s-12.734464-28.444672-28.444672-28.444672h-113.77664c-15.710208 0-28.444672 12.735488-28.444672 28.444672zM512 512c-125.67552 0-227.555328-101.879808-227.555328-227.555328S386.32448 56.889344 512 56.889344s227.555328 101.879808 227.555328 227.555328S637.67552 512 512 512z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

Manager.defaultProps = {
  size: 18,
};

Manager = React.memo ? React.memo(Manager) : Manager;

export default Manager;
