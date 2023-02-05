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

let Fire: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M455.110656 56.889344s303.839232 94.456832 236.606464 386.414592c0 0 33.615872-25.760768 67.232768-77.283328 0 0 151.272448 120.2176 151.272448 291.958784 0 120.2176-100.84864 223.261696-302.54592 309.131264h-24.495104c67.231744-97.318912 70.033408-177.46432 8.403968-240.4352C457.120768 597.869568 515.948544 512 515.948544 512S373.615616 581.07904 345.9584 709.77536c-14.848 69.087232 3.351552 155.353088 94.353408 257.335296h-13.6448C256 910.22336 113.77664 797.517824 113.77664 625.777664c0-320.92672 318.13632-267.33568 341.332992-568.88832z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

Fire.defaultProps = {
  size: 18,
};

Fire = React.memo ? React.memo(Fire) : Fire;

export default Fire;
