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

let Photograph: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M633.257984 113.777664a56.889344 56.889344 0 0 1 47.3344 25.332736l58.962944 88.444928H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.889344v568.88832c0 31.419392-25.469952 56.889344-56.88832 56.889344H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.889344V284.444672c0-31.419392 25.469952-56.889344 56.88832-56.889344h170.667008l58.962944-88.444928a56.889344 56.889344 0 0 1 47.3344-25.332736h242.515968zM512 341.332992c-125.67552 0-227.555328 101.880832-227.555328 227.556352 0 125.67552 101.879808 227.555328 227.555328 227.555328s227.555328-101.880832 227.555328-227.555328c0-125.67552-101.879808-227.556352-227.555328-227.556352z m0 113.777664c62.83776 0 113.777664 50.940928 113.777664 113.778688 0 62.83776-50.939904 113.77664-113.777664 113.77664s-113.777664-50.93888-113.777664-113.77664S449.16224 455.110656 512 455.110656z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

Photograph.defaultProps = {
  size: 18,
};

Photograph = React.memo ? React.memo(Photograph) : Photograph;

export default Photograph;
