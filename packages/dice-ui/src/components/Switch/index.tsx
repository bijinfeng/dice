import React, { FC, useRef, useEffect } from 'react';
import { TouchableWithoutFeedback, Animated, Platform } from 'react-native';
import { useControllableValue } from '../../hooks';
import { useThemeFactory } from '../Theme';
import Loading from '../Loading';
import createStyle from './style';
import type { SwitchProps } from './interface';

const Switch: FC<SwitchProps> = props => {
  const {
    loading,
    disabled,
    size,
    onPress,
    style,
    activeValue = true,
    inactiveValue = false,
  } = props;
  const [checked, setChecked] = useControllableValue(props, {
    valuePropName: 'checked',
    defaultValuePropName: 'defaultChecked',
  });
  const { styles, theme } = useThemeFactory(createStyle, size);

  const isChecked = checked === activeValue;
  const translateXValueEnd = styles.nodeRight.left as number;
  const translateXValueStart = styles.nodeLeft.left as number;
  const duration = theme.switch_transition_duration;

  const translateX = useRef(
    new Animated.Value(isChecked ? translateXValueEnd : translateXValueStart)
  ).current;

  const onPressTouchable = () => {
    onPress?.();
    if (!disabled && !loading) {
      const newValue = isChecked ? inactiveValue : activeValue;
      setChecked(newValue);
    }
  };

  useEffect(() => {
    let actionAnimated: Animated.CompositeAnimation | null;
    actionAnimated = Animated.timing(translateX, {
      toValue: isChecked ? translateXValueEnd : translateXValueStart,
      duration,
      useNativeDriver: Platform.OS !== 'web',
    });

    actionAnimated.start(() => {
      actionAnimated = null;
    });

    return () => {
      // 停止动画
      if (actionAnimated) {
        actionAnimated.stop();
        actionAnimated = null;
      }
    };
  }, [isChecked]);

  const activeColor = props.activeColor || theme.switch_on_background_color;
  const inactiveColor = props.inactiveColor || theme.switch_background_color;

  return (
    <TouchableWithoutFeedback onPress={onPressTouchable} disabled={disabled}>
      <Animated.View
        style={[
          styles.switch,
          disabled ? styles.disabled : undefined,
          { backgroundColor: isChecked ? activeColor : inactiveColor },
          style,
        ]}
      >
        <Animated.View style={[styles.node, { transform: [{ translateX }] }]}>
          {loading ? (
            <Loading
              type="circular"
              size={(styles.node.width as number) / 2}
              color={isChecked ? activeColor : inactiveColor}
            />
          ) : null}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Switch;
