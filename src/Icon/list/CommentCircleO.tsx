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

let CommentCircleO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m0 56.88832c-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336 219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336z m224 170.667008c17.673216 0 32 14.32576 32 32v338.983936c0 17.673216-14.326784 32-32 32H438.417408l-33.1264 63.8208a32 32 0 0 1-13.66016 13.66016c-15.685632 8.1408-35.002368 2.025472-43.144192-13.66016l-33.1264-63.8208H288c-17.673216 0-32-14.326784-32-32v-338.98496c0-17.672192 14.326784-32 32-32h448z m-24.889344 56.88832H312.889344v289.206272h37.03808l26.96192 51.943424 26.960896-51.943424h307.26144V341.332992z"
        fill={getIconColor(color, 0, "#333333")}
      />
    </Svg>
  );
};

CommentCircleO.defaultProps = {
  size: 18,
};

CommentCircleO = React.memo ? React.memo(CommentCircleO) : CommentCircleO;

export default CommentCircleO;
