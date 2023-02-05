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

let PlayCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 967.110656C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z m171.776-432.851968a28.444672 28.444672 0 0 0 4.441088-4.442112c9.814016-12.26752 7.825408-30.16704-4.442112-39.980032L473.30816 321.462272a28.444672 28.444672 0 0 0-17.768448-6.232064c-15.710208 0-28.444672 12.734464-28.444672 28.443648v336.746496a28.444672 28.444672 0 0 0 6.233088 17.769472c9.814016 12.26752 27.713536 14.256128 39.980032 4.442112L683.776 534.258688z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

PlayCircle.defaultProps = {
  size: 18,
};

PlayCircle = React.memo ? React.memo(PlayCircle) : PlayCircle;

export default PlayCircle;
