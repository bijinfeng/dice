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

let PeerPay: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M910.222336 341.332992v455.11168H113.77664V341.332992H910.22336z m0-113.77664v56.88832H113.77664v-56.889344H910.22336z m0-56.889344H113.77664c-31.459328 0-56.88832 25.428992-56.88832 56.88832v568.889344c0 31.459328 25.428992 56.88832 56.88832 56.88832H910.22336c31.403008 0 56.88832-25.428992 56.88832-56.88832V227.555328c0-31.459328-25.485312-56.88832-56.88832-56.88832z m-348.2112 478.6688H699.3408l-31.857664 31.913984c-11.150336 11.094016-11.150336 29.07136 0 40.220672 11.092992 11.092992 29.070336 11.092992 40.220672 0l80.44032-80.44032c11.094016-11.15136 11.094016-29.12768 0-40.278016l-80.44032-80.44032c-11.15136-11.094016-29.12768-11.094016-40.220672 0-11.150336 11.150336-11.150336 29.126656 0 40.219648l31.857664 31.915008H562.011136c-15.700992 0-28.444672 12.74368-28.444672 28.444672 0 15.700992 12.74368 28.444672 28.444672 28.444672"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

PeerPay.defaultProps = {
  size: 18,
};

PeerPay = React.memo ? React.memo(PeerPay) : PeerPay;

export default PeerPay;
