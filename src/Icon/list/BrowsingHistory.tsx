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

let BrowsingHistory: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m0.002048 284.443648c-191.9744 0-284.44672 162.7136-284.44672 170.667008 0 7.962624 90.002432 170.667008 284.44672 170.667008 194.441216 0 284.442624-162.70336 284.442624-170.667008 0-7.954432-92.47232-170.667008-284.442624-170.667008z m0 56.889344c62.834688 0 113.77664 50.936832 113.77664 113.77664 0 62.83776-50.941952 113.778688-113.77664 113.778688-62.838784 0-113.779712-50.940928-113.779712-113.778688 0-62.839808 50.940928-113.77664 113.779712-113.77664z m0 56.88832c-31.423488 0-56.891392 25.470976-56.891392 56.887296 0 31.422464 25.46688 56.890368 56.891392 56.890368 31.41632 0 56.887296-25.46688 56.887296-56.890368 0-31.41632-25.470976-56.887296-56.887296-56.887296z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

BrowsingHistory.defaultProps = {
  size: 18,
};

BrowsingHistory = React.memo ? React.memo(BrowsingHistory) : BrowsingHistory;

export default BrowsingHistory;
