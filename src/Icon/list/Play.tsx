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

let Play: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M785.79712 539.923456L387.54816 858.523648c-12.26752 9.814016-30.16704 7.824384-39.981056-4.442112a28.444672 28.444672 0 0 1-6.233088-17.769472V199.110656c0-15.70816 12.735488-28.443648 28.444672-28.443648a28.444672 28.444672 0 0 1 17.769472 6.233088L785.79712 495.500288c12.266496 9.814016 14.255104 27.713536 4.442112 39.981056a28.444672 28.444672 0 0 1-4.442112 4.442112z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

Play.defaultProps = {
  size: 18,
};

Play = React.memo ? React.memo(Play) : Play;

export default Play;
