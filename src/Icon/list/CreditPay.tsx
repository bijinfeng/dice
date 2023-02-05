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

let CreditPay: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M910.222336 170.667008c31.403008 0 56.88832 25.486336 56.88832 56.88832v568.889344c0 31.459328-25.485312 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V227.555328c0-31.401984 25.485312-56.88832 56.88832-56.88832z m0 170.665984H113.77664v455.11168H910.22336V341.332992z m0-113.77664H113.77664v56.88832H910.22336v-56.889344zM597.037056 683.098112h170.667008c15.700992 0 28.444672-12.74368 28.444672-28.444672 0-15.700992-12.74368-28.444672-28.444672-28.444672H597.037056c-15.700992 0-28.443648 12.74368-28.443648 28.444672 0 15.700992 12.742656 28.444672 28.443648 28.444672"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

CreditPay.defaultProps = {
  size: 18,
};

CreditPay = React.memo ? React.memo(CreditPay) : CreditPay;

export default CreditPay;
