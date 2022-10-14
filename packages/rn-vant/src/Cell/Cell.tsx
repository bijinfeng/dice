import React, { forwardRef } from 'react';
import { View, Text, Animated, TouchableOpacity as RNTouchableOpacity } from 'react-native';
import isFunction from 'lodash-es/isFunction';
import Icon from '@rn-vant/icons';
import { useMemoizedFn, useAnimatedValue, useUpdateEffect } from '../hooks';
import { useThemeFactory } from '../Theme';
import TouchableOpacity from '../TouchableOpacity';
import { createCellStyle } from './style';
import type { CellProps, Direction } from './type';

const directionRotates: Record<Direction, number> = {
  left: 0.5,
  right: 0,
  up: -0.25,
  down: 0.25,
};

const Cell = forwardRef<RNTouchableOpacity, CellProps>((props, ref) => {
  const {
    title,
    value,
    label,
    size = 'default',
    pressable = true,
    icon,
    isLink,
    arrowDirection = 'right',
    center,
    style,
    onPress,
    children,
    valueStyle,
    labelStyle,
    titleStyle,
  } = props;

  const arrowRotate = useAnimatedValue(directionRotates[arrowDirection]);
  const { styles, theme } = useThemeFactory(createCellStyle, props.disabled);
  const isLarge = size === 'large';

  useUpdateEffect(() => {
    Animated.timing(arrowRotate, {
      toValue: directionRotates[arrowDirection],
      duration: theme.animation_duration_base,
      useNativeDriver: true,
    }).start();
  }, [arrowDirection]);

  const spin = arrowRotate.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-360deg', '0deg', '360deg'],
  });

  const renderLeftIcon = () => {
    let iconComponent: React.ReactNode;

    if (React.isValidElement(icon)) {
      iconComponent = React.cloneElement(icon, {
        size: theme.cell_icon_size,
        color: theme.cell_text_color,
      });
    } else if (icon) {
      iconComponent = (
        <Icon name={icon} size={theme.cell_icon_size} color={theme.cell_text_color} />
      );
    }

    if (iconComponent) {
      return <View style={[styles.icon, { marginRight: 4 }]}>{iconComponent}</View>;
    }

    return null;
  };

  const renderTitle = () => {
    if (title) {
      const titleStyles = [styles.title, isLarge && styles.titleLarge, titleStyle];
      return (
        <View style={{ position: 'relative' }}>
          {!!props.required && <Text style={styles.required}>*</Text>}
          {isFunction(title) ? title(titleStyles) : <Text style={titleStyles}>{title}</Text>}
          {label && (
            <Text style={[styles.label, isLarge && styles.larbelLarge, labelStyle]}>{label}</Text>
          )}
        </View>
      );
    }
    return null;
  };

  const renderValue = useMemoizedFn(() => {
    const hasValue = !!children || !!value;

    if (React.isValidElement(children) || React.isValidElement(value)) {
      return children || value;
    }
    if (hasValue) {
      return <Text style={[styles.value, valueStyle]}>{children ?? value}</Text>;
    }
    return null;
  });

  const renderRightIcon = () => {
    if (isLink) {
      const iconColor = props.disabled
        ? theme.cell_disabled_text_color
        : theme.cell_right_icon_color;

      return (
        <View style={[styles.icon, { marginLeft: 4 }]}>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Icon name="arrow" size={theme.cell_icon_size} color={iconColor} />
          </Animated.View>
        </View>
      );
    }
    return null;
  };

  return (
    <TouchableOpacity
      ref={ref}
      onPress={onPress}
      disabled={props.disabled || !pressable}
      activeBackgroundColor={onPress ? theme.cell_active_color : undefined}
      style={[
        styles.wrapper,
        isLarge && styles.wrapperLarge,
        style,
        center ? { alignItems: 'center' } : { alignItems: 'flex-start' },
      ]}
    >
      {renderLeftIcon()}
      {renderTitle()}
      {renderValue()}
      {renderRightIcon()}
    </TouchableOpacity>
  );
});

Cell.displayName = 'Cell';

export default Cell;
