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

let AddSquare: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M483.555328 483.555328H284.444672C268.735488 483.555328 256 496.29184 256 512s12.735488 28.444672 28.444672 28.444672h199.110656v199.110656C483.555328 755.264512 496.29184 768 512 768s28.444672-12.735488 28.444672-28.444672V540.444672h199.110656C755.264512 540.444672 768 527.70816 768 512s-12.735488-28.444672-28.444672-28.444672H540.444672V284.444672C540.444672 268.735488 527.70816 256 512 256s-28.444672 12.735488-28.444672 28.444672v199.110656z m-312.88832-369.77664h682.665984c31.419392 0 56.889344 25.468928 56.889344 56.88832v682.665984c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.889344-56.889344z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

AddSquare.defaultProps = {
  size: 18,
};

AddSquare = React.memo ? React.memo(AddSquare) : AddSquare;

export default AddSquare;
