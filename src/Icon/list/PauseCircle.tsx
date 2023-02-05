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

let PauseCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 967.110656C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z m-92.444672-625.77664c-19.636224 0-35.555328 15.91808-35.555328 35.555328v270.221312c0 19.637248 15.919104 35.556352 35.555328 35.556352 19.637248 0 35.555328-15.919104 35.555328-35.556352V376.889344c0-19.637248-15.91808-35.556352-35.555328-35.556352z m184.889344 0c-19.637248 0-35.555328 15.91808-35.555328 35.555328v270.221312c0 19.637248 15.91808 35.556352 35.555328 35.556352 19.636224 0 35.555328-15.919104 35.555328-35.556352V376.889344c0-19.637248-15.919104-35.556352-35.555328-35.556352z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

PauseCircle.defaultProps = {
  size: 18,
};

PauseCircle = React.memo ? React.memo(PauseCircle) : PauseCircle;

export default PauseCircle;
