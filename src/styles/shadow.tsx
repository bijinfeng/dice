import { Animated } from "react-native";

const SHADOW_COLOR = "#000";
const SHADOW_OPACITY = 0.24;

function isAnimatedValue(value: any): value is Animated.Value {
  return value instanceof Animated.Value;
}

export const shadowAnimation = (elevation: Animated.Value) => {
  const inputRange = [0, 1, 2, 3, 8, 24];

  return {
    shadowColor: SHADOW_COLOR,
    shadowOffset: {
      width: new Animated.Value(0),
      height: elevation.interpolate({
        inputRange,
        outputRange: [0, 0.5, 0.75, 2, 7, 23],
      }),
    },
    shadowOpacity: elevation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, SHADOW_OPACITY],
      extrapolate: "clamp",
    }),
    shadowRadius: elevation.interpolate({
      inputRange,
      outputRange: [0, 0.75, 1.5, 3, 8, 24],
    }),
  };
};

export const shadowNumber = (elevation = 0) => {
  if (elevation === 0) {
    return {};
  }

  let height;
  let radius;
  switch (elevation) {
    case 1:
      height = 0.5;
      radius = 0.75;
      break;
    case 2:
      height = 0.75;
      radius = 1.5;
      break;
    default:
      height = elevation - 1;
      radius = elevation;
  }

  return {
    shadowColor: SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height,
    },
    shadowOpacity: SHADOW_OPACITY,
    shadowRadius: radius,
  };
};

const shadow = (elevation: number | Animated.Value) =>
  isAnimatedValue(elevation)
    ? shadowAnimation(elevation)
    : shadowNumber(elevation);

export default shadow;
