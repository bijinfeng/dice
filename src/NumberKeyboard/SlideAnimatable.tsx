import React from "react";
import { View, ViewProps } from "react-native";
// import * as Animatable from 'react-native-animatable';

interface SlideAnimatableProps extends Pick<ViewProps, "children" | "style"> {
  visible: boolean;
  duration: number;
}

const SlideAnimatable: React.FC<SlideAnimatableProps> = ({
  children,
  style,
  visible,
  duration,
}) => {
  return <View />;

  // const handleViewRef = useRef<Animatable.View & View>(null);
  // const [layout, onLayout] = useLayout();

  // useUpdateEffect(() => {
  //   if (visible) {
  //     handleViewRef.current?.transition?.(
  //       { translateY: layout.height },
  //       { translateY: 0 },
  //       duration
  //     );
  //   } else {
  //     handleViewRef.current?.transitionTo?.({ translateY: layout.height }, duration);
  //   }
  // }, [visible]);

  // return (
  //   <Animatable.View style={style} ref={handleViewRef} onLayout={onLayout}>
  //     {children}
  //   </Animatable.View>
  // );
};

export default SlideAnimatable;
