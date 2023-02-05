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

let WapNav: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M163.555328 227.555328h696.889344c27.491328 0 49.77664 22.286336 49.77664 49.777664 0 27.492352-22.285312 49.777664-49.77664 49.777664H163.555328c-27.491328 0-49.77664-22.285312-49.77664-49.77664 0-27.492352 22.285312-49.778688 49.77664-49.778688z m0 248.889344h696.889344c27.491328 0 49.77664 22.286336 49.77664 49.77664 0 27.492352-22.285312 49.778688-49.77664 49.778688H163.555328c-27.491328 0-49.77664-22.286336-49.77664-49.777664 0-27.491328 22.285312-49.777664 49.77664-49.777664z m0 248.88832h696.889344c27.491328 0 49.77664 22.286336 49.77664 49.777664 0 27.492352-22.285312 49.778688-49.77664 49.778688H163.555328c-27.491328 0-49.77664-22.286336-49.77664-49.778688 0-27.491328 22.285312-49.77664 49.77664-49.77664z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

WapNav.defaultProps = {
  size: 18,
};

WapNav = React.memo ? React.memo(WapNav) : WapNav;

export default WapNav;
