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

let ChatO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M155.974656 818.441216l111.712256-36.077568 21.907456 12.691456C354.75456 832.80384 431.485952 853.332992 512 853.332992c221.49632 0 398.222336-154.63424 398.222336-341.332992 0-186.697728-176.726016-341.332992-398.222336-341.332992S113.777664 325.301248 113.777664 512c0 65.89952 21.848064 129.069056 62.642176 183.640064l19.295232 25.810944-39.74144 96.990208zM512 910.222336c-92.73344 0-178.988032-24.2688-250.923008-65.942528l-145.903616 47.11936a28.444672 28.444672 0 0 1-19.526656-0.74752c-14.53568-5.955584-21.491712-22.56896-15.536128-37.10464l50.74432-123.845632C84.082688 667.132928 56.889344 592.345088 56.889344 512c0-219.931648 203.759616-398.222336 455.110656-398.222336S967.110656 292.068352 967.110656 512c0 219.931648-203.759616 398.222336-455.110656 398.222336z"
        fill={getIconColor(color, 0, "#333333")}
      />
      <Path
        d="M512 512m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0Z"
        fill={getIconColor(color, 1, "#333333")}
      />
      <Path
        d="M284.444672 512m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0Z"
        fill={getIconColor(color, 2, "#333333")}
      />
      <Path
        d="M739.555328 512m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0Z"
        fill={getIconColor(color, 3, "#333333")}
      />
    </Svg>
  );
};

ChatO.defaultProps = {
  size: 18,
};

ChatO = React.memo ? React.memo(ChatO) : ChatO;

export default ChatO;
