/**
 * 获取 React-Native components 的 `width` 和 `height`
 * 代码来自：https://github.com/obipawan/react-native-measureme
 */
import React, { useState } from 'react';
import { View } from 'react-native';
import type { ViewProps } from 'react-native';

export type MeasureMeState = {
  width: number;
  height: number;
  initialRender: true;
};

const measureMeHOC =
  <P extends ViewProps>(ComposedComponent: React.ComponentType<P & MeasureMeState>): React.FC<P> =>
  props => {
    const [state, setState] = useState<MeasureMeState>();

    const handleLayout: ViewProps['onLayout'] = ({
      nativeEvent: { layout: { width = 0, height = 0 } = {} } = {},
    }) => {
      setState({ width, height, initialRender: true });
    };

    return state?.initialRender ? (
      <ComposedComponent {...props} {...state} onLayout={handleLayout} />
    ) : (
      <View style={props.style} onLayout={handleLayout} />
    );
  };

export default measureMeHOC;
