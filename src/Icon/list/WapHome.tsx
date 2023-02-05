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

let WapHome: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M548.727808 118.148096l358.22592 307.050496c11.930624 10.226688 13.312 28.189696 3.085312 40.12032-10.226688 11.931648-28.188672 13.313024-40.12032 3.086336l-16.807936-14.436352 0.022528 409.69728c0 31.428608-25.524224 56.909824-57.009152 56.909824H625.503232c-31.484928 0-57.009152-25.481216-57.009152-56.909824V692.94592H454.786048v170.720256l-0.534528 0.003072c0 31.428608-25.524224 56.906752-57.009152 56.906752H227.262464c-31.485952 0-57.009152-25.481216-57.009152-56.909824l-0.021504-409.69728-16.764928 14.436352c-11.930624 10.226688-29.893632 8.845312-40.12032-3.086336-10.226688-11.930624-8.845312-29.893632 3.086336-40.12032l358.22592-307.050496c21.310464-18.267136 52.757504-18.267136 74.068992 0z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

WapHome.defaultProps = {
  size: 18,
};

WapHome = React.memo ? React.memo(WapHome) : WapHome;

export default WapHome;
