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

let BagO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M264.282112 341.332992L228.726784 910.22336H790.28224l-35.555328-568.889344h-490.4448z m242.174976-170.665984c-60.92288 0-110.73024 50.712576-110.73024 113.77664h-56.88832c0-94.256128 75.044864-170.665984 167.61856-170.665984s167.61856 76.41088 167.61856 170.667008h97.723392c20.445184 0 37.36576 15.896576 38.64064 36.3008l37.827584 605.2352c1.334272 21.34016-14.884864 39.72096-36.225024 41.055232-0.804864 0.050176-1.609728 0.074752-2.415616 0.074752H209.3824c-21.38112 0-38.715392-17.333248-38.715392-38.715392 0-0.805888 0.024576-1.610752 0.074752-2.415616l37.82656-605.234176c1.275904-20.404224 18.19648-36.3008 38.641664-36.3008h369.977344c0-63.065088-49.80736-113.777664-110.73024-113.777664z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

BagO.defaultProps = {
  size: 18,
};

BagO = React.memo ? React.memo(BagO) : BagO;

export default BagO;
