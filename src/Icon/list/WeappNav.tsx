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

let WeappNav: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 682.667008c-94.256128 0-170.667008-76.41088-170.667008-170.667008S417.743872 341.332992 512 341.332992 682.667008 417.743872 682.667008 512 606.256128 682.667008 512 682.667008z m398.222336-56.889344c-62.83776 0-113.777664-50.939904-113.777664-113.777664s50.939904-113.777664 113.77664-113.777664C973.06112 398.222336 1024 449.16224 1024 512s-50.939904 113.777664-113.777664 113.777664z m-796.444672 0C50.939904 625.777664 0 574.83776 0 512s50.939904-113.777664 113.777664-113.777664S227.555328 449.16224 227.555328 512s-50.939904 113.777664-113.77664 113.777664z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

WeappNav.defaultProps = {
  size: 18,
};

WeappNav = React.memo ? React.memo(WeappNav) : WeappNav;

export default WeappNav;
