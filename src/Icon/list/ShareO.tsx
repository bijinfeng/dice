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

let ShareO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M622.234624 123.076608l332.59008 324.588544c16.873472 16.492544 17.000448 43.175936 0.315392 59.602944L621.918208 835.125248c-16.704512 16.427008-30.246912 10.363904-30.246912-13.116416V650.533888C111.982592 650.533888 58.953728 901.86752 57.344 910.109696l0.4608-18.193408c4.714496-93.572096 52.7104-514.894848 533.866496-584.312832V136.107008c0-23.652352 13.5424-29.62944 30.563328-13.0304z m33.468416 123.053056l0.037888 61.473792c0 32.534528-23.49056 60.1088-55.0912 64.667648C395.674624 401.8432 265.0112 499.80416 189.359104 645.586944a565.121024 565.121024 0 0 0-11.319296 23.088128l-3.750912 8.573952 10.14272-5.855232c94.97088-52.511744 220.99968-83.0208 381.594624-85.940224l25.645056-0.231424c32.857088 0 59.937792 25.212928 63.638528 57.695232l0.43008 7.616512-0.036864 60.546048 237.182976-233.421824L655.70304 246.12864z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

ShareO.defaultProps = {
  size: 18,
};

ShareO = React.memo ? React.memo(ShareO) : ShareO;

export default ShareO;
