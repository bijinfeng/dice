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

let Clear: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m180.675584 274.316288c-11.108352-11.108352-29.118464-11.108352-40.226816 0L511.65696 471.998464 370.864128 331.205632c-11.108352-11.108352-29.118464-11.108352-40.226816 0-11.108352 11.108352-11.108352 29.118464 0 40.226816L471.42912 512.22528 330.637312 653.018112c-11.108352 11.108352-11.108352 29.118464 0 40.226816 11.108352 11.108352 29.118464 11.108352 40.226816 0l140.792832-140.792832 140.791808 140.792832c11.108352 11.108352 29.118464 11.108352 40.226816 0 11.108352-11.108352 11.108352-29.118464 0-40.226816L551.882752 512.22528l140.792832-140.792832c11.108352-11.108352 11.108352-29.118464 0-40.226816z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

Clear.defaultProps = {
  size: 18,
};

Clear = React.memo ? React.memo(Clear) : Clear;

export default Clear;
