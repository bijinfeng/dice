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

let StopCircleO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M398.768128 369.523712h227.555328c15.710208 0 28.444672 12.735488 28.444672 28.444672v227.555328c0 15.710208-12.734464 28.444672-28.444672 28.444672H398.768128c-15.709184 0-28.444672-12.734464-28.444672-28.444672V397.968384c0-15.709184 12.735488-28.444672 28.444672-28.444672zM512 910.22336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

StopCircleO.defaultProps = {
  size: 18,
};

StopCircleO = React.memo ? React.memo(StopCircleO) : StopCircleO;

export default StopCircleO;
