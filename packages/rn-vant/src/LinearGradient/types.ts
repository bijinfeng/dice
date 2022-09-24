import type { ViewProps, ColorValue } from 'react-native';

export interface LinearGradientProps extends ViewProps {
  colors: ColorValue[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
}
