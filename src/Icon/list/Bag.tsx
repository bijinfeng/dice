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

let Bag: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M341.332992 284.444672c0-94.257152 75.045888-170.667008 167.61856-170.667008 92.57472 0 167.619584 76.41088 167.619584 170.667008h97.723392c20.445184 0 37.36576 15.896576 38.64064 36.3008l37.82656 605.2352c1.334272 21.34016-14.88384 39.72096-36.225024 41.055232-0.80384 0.050176-1.608704 0.074752-2.414592 0.074752H211.877888c-21.382144 0-38.716416-17.333248-38.716416-38.715392 0-0.805888 0.0256-1.610752 0.075776-2.415616l37.82656-605.234176c1.275904-20.404224 18.19648-36.3008 38.641664-36.3008h91.62752z m56.889344 0h221.46048c0-63.065088-49.80736-113.777664-110.73024-113.777664-60.92288 0-110.73024 50.712576-110.73024 113.77664z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

Bag.defaultProps = {
  size: 18,
};

Bag = React.memo ? React.memo(Bag) : Bag;

export default Bag;
