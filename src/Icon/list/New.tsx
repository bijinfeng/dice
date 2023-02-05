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

let New: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.332992 0v647.110656c0 82.475008-76.409856 149.334016-170.665984 149.334016H341.332992c-94.256128 0-170.665984-66.859008-170.665984-149.334016V0h682.665984zM313.771008 312.889344h-29.32736v170.665984h34.832384v-100.175872h0.800768l61.555712 100.175872h29.026304V312.889344h-34.83136v99.229696h-0.800768l-61.25568-99.229696z m217.696256 0h-98.989056v170.665984h98.99008v-35.008512h-62.257152v-34.771968h58.55232v-31.93344h-58.55232v-33.943552h62.256128v-35.008512z m51.847168 0h-37.93408l37.7344 170.665984h34.63168l24.321024-106.56256h0.800768l24.322048 106.56256h34.63168l37.7344-170.665984h-37.935104l-19.51744 115.314688h-0.800768l-24.122368-115.314688h-29.425664l-24.122368 115.314688h-0.800768l-19.51744-115.314688z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

New.defaultProps = {
  size: 18,
};

New = React.memo ? React.memo(New) : New;

export default New;
