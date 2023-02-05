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

let Label: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M653.960192 341.332992H369.516544c-15.702016 0-28.444672-12.742656-28.444672-28.443648 0-15.702016 12.742656-28.444672 28.444672-28.444672h284.443648c15.702016 0 28.444672 12.742656 28.444672 28.444672 0 15.700992-12.742656 28.443648-28.444672 28.443648m0 170.667008H369.516544c-15.702016 0-28.444672-12.742656-28.444672-28.444672 0-15.700992 12.742656-28.444672 28.444672-28.444672h284.443648c15.702016 0 28.444672 12.74368 28.444672 28.444672 0 15.702016-12.742656 28.444672-28.444672 28.444672m142.22336-455.110656H227.293184c-31.460352 0-56.889344 25.428992-56.889344 56.88832v824.832c0 21.163008 22.300672 34.929664 41.187328 25.428992l274.716672-137.32864c15.985664-7.964672 34.873344-7.964672 50.859008 0l274.716672 137.32864c18.886656 9.500672 41.187328-4.265984 41.187328-25.428992v-824.832c0-31.459328-25.430016-56.88832-56.889344-56.88832"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

Label.defaultProps = {
  size: 18,
};

Label = React.memo ? React.memo(Label) : Label;

export default Label;
