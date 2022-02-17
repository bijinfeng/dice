import React from 'react';
import { Animated, View as RNView, SafeAreaView } from 'react-native';
import type { ViewProps } from './type';

const View = React.forwardRef<RNView, ViewProps>((props: ViewProps, ref) => {
  const { children, useSafeArea, animated, style, ...rest } = props;

  const Element = useSafeArea ? SafeAreaView : RNView;
  const Container: React.ClassType<any, any, any> = animated
    ? Animated.createAnimatedComponent(Element)
    : Element;

  return (
    <Container ref={ref} style={style} {...rest}>
      {children}
    </Container>
  );
});

export default View;
