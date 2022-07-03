import React, { forwardRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { useThemeFactory } from '../Theme';
import Cell from '../Cell';
import type { CollapseItemProps } from './type';
import { createStyle } from './style';

const CollapseItem = forwardRef<View, CollapseItemProps>((props, ref) => {
  const {
    children,
    disabled,
    readonly,
    style,
    expanded = false,
    isLink = true,
    onExpand,
    ...rest
  } = props;
  const { styles } = useThemeFactory(createStyle);

  const onPressTitle = () => {
    if (!disabled && !readonly) {
      onExpand?.(!expanded);
    }
  };

  return (
    <View ref={ref} style={style}>
      <Cell
        onPress={onPressTitle}
        {...rest}
        isLink={readonly ? false : isLink}
        pressable={disabled || readonly ? false : rest.pressable}
        disabled={disabled}
        arrowDirection={expanded ? 'up' : 'down'}
      />
      {expanded && (
        <Animated.View style={styles.contentWrapper}>
          <Text style={styles.content}>{children}</Text>
        </Animated.View>
      )}
    </View>
  );
});

export default CollapseItem;
