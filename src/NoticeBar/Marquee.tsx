import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import type { LayoutChangeEvent, StyleProp, TextStyle } from "react-native";
import {
  Animated,
  Easing,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { NoticeBarInstance, NoticeBarProps } from "./interface";

type MarqueeProps = Pick<
  NoticeBarProps,
  "wrapable" | "scrollable" | "speed" | "delay" | "text" | "onReplay"
> & {
  style: StyleProp<TextStyle>;
};

const isWeb = Platform.OS === "web";

const Marquee = forwardRef<NoticeBarInstance, MarqueeProps>((props, ref) => {
  const {
    scrollable = false,
    speed = 60,
    delay = 1000,
    style,
    text,
    wrapable,
    onReplay,
  } = props;

  // 内容的 translateX 值
  const translateX = useRef(new Animated.Value(0)).current;
  // 内容容器的宽度
  const wrapWidth = useRef(0);
  // 内容实际的宽度
  const contentWidth = useRef(0);

  const startTimer = useRef<any>(null);
  const translateAnimated = useRef<Animated.CompositeAnimation>();

  const handleTextLayout = (event: LayoutChangeEvent) => {
    contentWidth.current = event.nativeEvent.layout.width;
  };

  const handleContainerLayout = (event: LayoutChangeEvent) => {
    wrapWidth.current = event.nativeEvent.layout.width;
  };

  // 开始尝试开始动画
  const tryStart = () => {
    /**
     * 开始移动需要满足几个条件
     * 1. 文本的长度要大于容器的宽度
     * 2. 不允许换行
     * 3. 允许滚动
     */
    if (!wrapable && scrollable && contentWidth.current > wrapWidth.current) {
      startMove();
    }
  };

  // 开始滚动
  const startMove = () => {
    translateAnimated.current = Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: -contentWidth.current,
          duration: (contentWidth.current / speed) * 1000,
          easing: Easing.linear,
          useNativeDriver: !isWeb,
        }),
        Animated.timing(translateX, {
          toValue: wrapWidth.current,
          duration: 0,
          easing: Easing.linear,
          useNativeDriver: !isWeb,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: (contentWidth.current / speed) * 1000,
          easing: Easing.linear,
          useNativeDriver: !isWeb,
        }),
      ])
    );

    translateAnimated.current.start(() => {
      onReplay?.();
    });
  };

  const reset = () => {
    startTimer.current && clearTimeout(startTimer.current);
    translateAnimated.current && translateAnimated.current.reset();

    startTimer.current = setTimeout(() => {
      tryStart();
    }, delay ?? 0);
  };

  useEffect(() => {
    reset();
  }, [text, scrollable, wrapable]);

  useImperativeHandle(ref, () => ({ reset }));

  return (
    <View style={styles.container} onLayout={handleContainerLayout}>
      {/* TODO: 必须让 View 绝对定位，才能用 onLayout 获取到文本的宽度 */}
      {wrapable ? (
        <Text style={style}>{text}</Text>
      ) : (
        <Animated.View
          style={[
            { flexDirection: "row", transform: [{ translateX }] },
            scrollable && !isWeb ? { position: "absolute" } : undefined,
            !scrollable && isWeb ? { width: "100%" } : undefined,
          ]}
          onLayout={handleTextLayout}
        >
          <Text numberOfLines={1} ellipsizeMode="tail" style={style}>
            {text}
          </Text>
        </Animated.View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    position: "relative",
  },
});

export default Marquee;
