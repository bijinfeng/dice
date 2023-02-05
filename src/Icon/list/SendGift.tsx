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

let SendGift: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M910.222336 284.444672v568.88832c0 31.460352-25.428992 56.889344-56.889344 56.889344H170.667008c-31.460352 0-56.889344-25.428992-56.889344-56.889344V284.444672H910.22336z m-227.555328 56.88832H341.332992v325.57568c0 7.73632 7.62368 13.198336 15.019008 10.752l137.670656-45.910016a57.143296 57.143296 0 0 1 35.954688 0L667.648 677.660672c7.395328 2.446336 15.019008-3.01568 15.019008-10.752V341.332992z m135.4752-227.572736c21.56032 0 41.300992 12.17536 50.915328 31.460352l41.187328 82.318336H113.800192l41.131008-82.31936c9.614336-19.284992 29.355008-31.459328 50.915328-31.459328z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

SendGift.defaultProps = {
  size: 18,
};

SendGift = React.memo ? React.memo(SendGift) : SendGift;

export default SendGift;
