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

let FontO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.221376 113.664c31.419392 0 56.889344 25.469952 56.889344 56.889344v682.668032c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.553344c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.553344C113.664 139.133952 139.133952 113.664 170.553344 113.664h682.668032z m0 56.889344H170.553344v682.668032h682.668032V170.553344zM710.99904 284.331008c15.709184 0 28.444672 12.735488 28.444672 28.444672s-12.735488 28.444672-28.444672 28.444672H540.332032v369.778688c0 15.709184-12.735488 28.444672-28.444672 28.444672s-28.444672-12.735488-28.444672-28.444672V341.220352H312.77568c-15.709184 0-28.444672-12.735488-28.444672-28.444672s12.735488-28.444672 28.444672-28.444672h398.22336z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

FontO.defaultProps = {
  size: 18,
};

FontO = React.memo ? React.memo(FontO) : FontO;

export default FontO;
