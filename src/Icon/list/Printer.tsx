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

let Printer: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.332992 796.444672V625.77664H170.667008v170.667008H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.889344V398.22336c0-31.419392 25.469952-56.889344 56.88832-56.889344H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.889344v341.332992c0 31.419392-25.469952 56.889344-56.88832 56.889344h-56.889344zM227.556352 113.77664h568.88832c31.418368 0 56.88832 25.469952 56.88832 56.889344v113.77664H170.667008v-113.77664c0-31.419392 25.469952-56.889344 56.88832-56.889344zM839.109632 512c23.564288 0 42.667008-19.10272 42.667008-42.667008s-19.10272-42.665984-42.667008-42.665984c-23.563264 0-42.665984 19.101696-42.665984 42.665984 0 23.564288 19.10272 42.667008 42.665984 42.667008zM227.555328 682.667008h568.889344v170.665984c0 31.419392-25.469952 56.889344-56.889344 56.889344H284.444672c-31.419392 0-56.889344-25.469952-56.889344-56.889344V682.667008z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

Printer.defaultProps = {
  size: 18,
};

Printer = React.memo ? React.memo(Printer) : Printer;

export default Printer;
