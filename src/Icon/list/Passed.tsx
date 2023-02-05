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

let Passed: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M784.444416 345.934848l7.419904 7.181312c6.457344 6.249472 5.987328 16.16896-0.781312 22.720512L467.772416 688.736256c-10.058752 9.735168-26.573824 9.30816-36.928512-0.712704l-140.93312-136.393728c-6.38976-6.18496-7.424-15.802368-1.790976-22.684672l13.170688-16.093184c5.398528-6.597632 15.49824-8.25344 22.63552-3.636224l113.998848 73.746432c6.012928 3.8912 16.362496 3.38432 21.976064-1.031168l301.232128-236.868608c6.770688-5.3248 17.37728-4.871168 23.31136 0.872448z"
        fill={getIconColor(color, 0, "#333333")}
      />
      <Path
        d="M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z"
        fill={getIconColor(color, 1, "#333333")}
      />
    </Svg>
  );
};

Passed.defaultProps = {
  size: 18,
};

Passed = React.memo ? React.memo(Passed) : Passed;

export default Passed;
