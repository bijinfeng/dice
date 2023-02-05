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

let WechatPay: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M382.204928 621.262848c-51.075072 29.129728-58.650624-16.35328-58.650624-16.35328l-64.01024-152.809472c-24.630272-72.61184 21.31456-32.740352 21.31456-32.740352s39.424 30.511104 69.34528 49.103872c29.903872 18.591744 63.98976 5.45792 63.98976 5.45792l418.475008-197.60128c-77.207552-98.279424-204.745728-162.542592-349.134848-162.542592-235.640832 0-426.64448 171.01824-426.64448 381.99296 0 121.34912 63.246336 229.35552 161.76128 299.358208l-17.7664 104.476672s-8.659968 30.500864 21.35552 16.35328c20.452352-9.645056 72.594432-44.210176 103.63392-65.246208 48.7936 17.394688 101.955584 27.05408 157.683712 27.05408 235.6224 0 426.66496-171.01824 426.66496-381.996032 0-61.108224-16.098304-118.818816-44.613632-170.044416-133.327872 82.065408-443.440128 272.782336-483.403776 295.53664z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

WechatPay.defaultProps = {
  size: 18,
};

WechatPay = React.memo ? React.memo(WechatPay) : WechatPay;

export default WechatPay;
