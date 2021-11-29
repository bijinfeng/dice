import React, { FC } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Icon, { IconNames } from '../Icon';
import { withTheme } from '../Theme';

// 图标淡入淡出组件
type Props = {
  /**
   * Icon to display for the `CrossFadeIcon`.
   */
  name: IconNames;
  /**
   * Color of the icon.
   */
  color: string;
  /**
   * Size of the icon.
   */
  size: number;
  /**
   * @optional
   */
  theme: DiceUI.Theme;
};

const CrossFadeIcon: FC<Props> = ({ color, size, name, theme }) => {
  const [currentIcon, setCurrentIcon] = React.useState<IconNames>(() => name);
  const [previousIcon, setPreviousIcon] = React.useState<IconNames | null>(null);
  const { current: fade } = React.useRef<Animated.Value>(new Animated.Value(1));

  const { scale } = theme.animation;

  if (currentIcon !== name) {
    setPreviousIcon(() => currentIcon);
    setCurrentIcon(() => name);
  }

  React.useEffect(() => {
    if (previousIcon && previousIcon !== currentIcon) {
      fade.setValue(1);

      Animated.timing(fade, {
        duration: scale * 200,
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [currentIcon, previousIcon, fade, scale]);

  const opacityPrev = fade;
  const opacityNext = previousIcon
    ? fade.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
      })
    : 1;

  const rotatePrev = fade.interpolate({
    inputRange: [0, 1],
    outputRange: ['-90deg', '0deg'],
  });

  const rotateNext = previousIcon
    ? fade.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-180deg'],
      })
    : '0deg';

  return (
    <View
      style={[
        styles.content,
        {
          height: size,
          width: size,
        },
      ]}
    >
      {previousIcon ? (
        <Animated.View
          style={[
            styles.icon,
            {
              opacity: opacityPrev,
              transform: [{ rotate: rotatePrev }],
            },
          ]}
        >
          <Icon name={previousIcon} size={size} color={color} />
        </Animated.View>
      ) : null}
      <Animated.View
        style={[
          styles.icon,
          {
            opacity: opacityNext,
            transform: [{ rotate: rotateNext }],
          },
        ]}
      >
        <Icon name={currentIcon} size={size} color={color} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default withTheme(CrossFadeIcon);
