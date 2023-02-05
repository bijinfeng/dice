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

let Audio: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M113.777664 512c0-219.931648 178.290688-398.222336 398.222336-398.222336 219.931648 0 398.222336 178.290688 398.222336 398.222336v284.444672c0 31.418368-25.469952 56.88832-56.889344 56.88832h-56.88832c-31.419392 0-56.889344-25.469952-56.889344-56.88832V568.889344c0-31.419392 25.469952-56.889344 56.889344-56.889344h56.88832c0-188.51328-152.819712-341.332992-341.332992-341.332992-188.51328 0-341.332992 152.819712-341.332992 341.332992h56.88832c31.419392 0 56.889344 25.469952 56.889344 56.889344v227.555328c0 31.418368-25.469952 56.88832-56.889344 56.88832h-56.88832c-31.419392 0-56.889344-25.469952-56.889344-56.88832V512z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

Audio.defaultProps = {
  size: 18,
};

Audio = React.memo ? React.memo(Audio) : Audio;

export default Audio;
