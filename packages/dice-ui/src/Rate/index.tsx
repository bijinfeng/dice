import React, { forwardRef, useMemo, useRef } from 'react';
import { View, Pressable, PanResponder } from 'react-native';
import type { GestureResponderEvent, LayoutChangeEvent } from 'react-native';
import { useThemeFactory } from '../Theme';
import Icon from '../Icon';
import type { RateProps } from './type';
import { createStyle } from './style';
import { useControllableValue } from '../hooks';

type RateStatus = 'full' | 'half' | 'void';

type RateListItem = {
  value: number;
  status: RateStatus;
};

function getRateStatus(
  value: number,
  index: number,
  allowHalf?: boolean,
  readonly?: boolean
): RateListItem {
  if (value >= index) {
    return { status: 'full', value: 1 };
  }

  if (value + 0.5 >= index && allowHalf && !readonly) {
    return { status: 'half', value: 0.5 };
  }

  if (value + 1 >= index && allowHalf && readonly) {
    const cardinal = 10 ** 10;
    return {
      status: 'half',
      value: Math.round((value - index + 1) * cardinal) / cardinal,
    };
  }

  return { status: 'void', value: 0 };
}

const Rate = forwardRef<View, RateProps>((props, ref) => {
  const {
    count = 5,
    icon = 'star',
    voidIcon = 'star-o',
    touchable = true,
    allowHalf,
    readonly,
    disabled,
  } = props;
  const [value, setValue] = useControllableValue<number>(props);
  const { styles, theme } = useThemeFactory(createStyle);

  /**
   * 将每个 star 相对于父组件的 X 轴坐标和对应的评分保存到这里
   * 用于手势划过时，判断当前划过的到底是哪个 star
   */
  const ranges = useRef<Record<number, { left: number; score: number }>>({});
  // 容器的 X 轴坐标
  const containerX = useRef<number>(0);

  const {
    size = theme.radio_icon_size,
    gutter = theme.rate_icon_gutter,
    color = theme.rate_icon_full_color,
    voidColor = theme.rate_icon_void_color,
    disabledColor = theme.rate_icon_disabled_color,
  } = props;

  // 是否允许触摸拖动
  const untouchable = readonly || disabled || touchable;

  const list = useMemo<RateListItem[]>(() => {
    return Array(count)
      .fill('')
      .map((_, i) => getRateStatus(value, i + 1, allowHalf, readonly));
  }, [value, count]);

  const renderStar = (item: RateListItem, index: number) => {
    const isFull = item.status === 'full';
    const isVoid = item.status === 'void';
    const renderHalf = allowHalf && item.value > 0 && item.value < 1;

    const onClickItem = (event: GestureResponderEvent) => {
      if (allowHalf) {
        const { locationX } = event.nativeEvent;
        const halfScore = locationX < size / 2 ? 0.5 : 1;
        setValue(index + halfScore);
      } else {
        setValue(index + 1);
      }
    };

    const onLayout = (event: LayoutChangeEvent) => {
      ranges.current[index] = {
        left: event.nativeEvent.layout.x,
        score: index + 1,
      };
    };

    return (
      <Pressable
        key={index}
        style={[styles.item, index > 0 ? { marginLeft: gutter } : undefined]}
        onPress={onClickItem}
        disabled={disabled || readonly}
        onLayout={onLayout}
      >
        <Icon
          name={isFull ? icon : voidIcon}
          size={size}
          color={disabled ? disabledColor : isFull ? color : voidColor}
        />
        {renderHalf && (
          <View style={[styles.half, { width: item.value * size }]}>
            <Icon
              name={isVoid ? voidIcon : icon}
              size={size}
              color={disabled ? disabledColor : isVoid ? voidColor : color}
            />
          </View>
        )}
      </Pressable>
    );
  };

  // 根据触摸的距离算出评分
  const getScoreByPosition = (x: number): number => {
    for (let i = count - 1; i > 0; i--) {
      if (x > ranges.current[i].left) {
        return ranges.current[i].score;
      }
    }
    return allowHalf ? 0.5 : 1;
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: (_evt, gestureState) => {
        // 手势触摸点距离容器左侧的距离
        const locationX = gestureState.moveX - containerX.current;
        const score = getScoreByPosition(locationX);
        setValue(score);
      },
    })
  ).current;

  const onContainerLayout = (event: LayoutChangeEvent) => {
    containerX.current = event.nativeEvent.layout.x;
  };

  return (
    <View
      ref={ref}
      style={styles.wrapper}
      {...(untouchable ? panResponder.panHandlers : {})}
      onLayout={onContainerLayout}
    >
      {list.map(renderStar)}
    </View>
  );
});

Rate.displayName = 'Rate';

export default Rate;
