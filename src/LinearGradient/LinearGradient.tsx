import colorTools from "color";
import times from "lodash-es/times";
import React, { useMemo } from "react";
import { View } from "react-native";
import Svg, {
  Defs,
  LinearGradient as LinearGradientSvg,
  Rect,
  Stop,
} from "react-native-svg";
import type { LinearGradientProps } from "./types";

const LinearGradient = (props: LinearGradientProps): JSX.Element => {
  const {
    colors,
    start = { x: 0.5, y: 0.0 },
    end = { x: 0.5, y: 1.0 },
    locations,
    ...rest
  } = props;

  const offsets = useMemo(() => {
    return locations
      ? locations.slice(0, colors.length)
      : times(colors.length, (idx: number) => (idx * 1) / (colors.length - 1));
  }, [locations, colors]);

  return (
    <View {...rest}>
      <Svg height="100%" width="100%">
        <Defs>
          <LinearGradientSvg
            id="grad"
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
          >
            {colors.map((color, idx) => (
              <Stop
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                offset={offsets[idx]}
                stopOpacity={colorTools(color).alpha()}
                stopColor={colorTools(color).hex()}
              />
            ))}
          </LinearGradientSvg>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
    </View>
  );
};

export default LinearGradient;
