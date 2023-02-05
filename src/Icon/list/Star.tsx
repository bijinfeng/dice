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

let Star: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 837.213184L255.744 950.136832c-14.37696 6.334464-31.16544-0.18432-37.499904-14.559232a28.444672 28.444672 0 0 1-2.270208-14.336l28.208128-278.60992L57.6 433.814528c-10.468352-11.71456-9.45664-29.696 2.25792-40.163328a28.444672 28.444672 0 0 1 12.932096-6.58944l273.690624-59.267072 140.941312-241.98144c7.906304-13.574144 25.320448-18.168832 38.895616-10.262528a28.444672 28.444672 0 0 1 10.262528 10.263552l140.941312 241.98144 273.690624 59.266048c15.353856 3.324928 25.105408 18.466816 21.78048 33.819648a28.444672 28.444672 0 0 1-6.58944 12.93312L779.81696 642.63168l28.208128 278.60992c1.583104 15.629312-9.8048 29.582336-25.434112 31.164416-4.89472 0.495616-9.833472-0.28672-14.336-2.270208L512 837.21216z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

Star.defaultProps = {
  size: 18,
};

Star = React.memo ? React.memo(Star) : Star;

export default Star;
