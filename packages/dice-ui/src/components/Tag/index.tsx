import React, { FC, useRef } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Text, Animated, Platform } from 'react-native';
import type { TextStyle } from 'react-native';

import { useUpdateEffect } from '../../hooks';
import { useThemeFactory } from '../Theme';
import Icon from '../Icon';
import type { TagProps } from './interface';
import createStyle from './style';

const Tag: FC<TagProps> = props => {
  const {
    onPress,
    children,
    style,
    innerStyle,
    textStyle,
    color,
    show = true,
    textColor = '#fff',
    mark = false,
    plain = false,
    round = false,
    size = 'mini',
    type = 'default',
    closeable = false,
    onClose,
    hairline = false,
  } = props;
  const { styles } = useThemeFactory(createStyle, {
    color,
    textColor,
    plain,
    round,
    size,
    type,
    hairline,
  });

  const fadeAnim = useRef(new Animated.Value(show ? 1 : 0)).current;

  useUpdateEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: show ? 1 : 0,
      duration: 300,
      useNativeDriver: Platform.OS !== 'web',
    }).start();
  }, [show]);

  const textStyleSummary: TextStyle = StyleSheet.flatten([styles.text, textStyle]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.tag, { opacity: fadeAnim }, style]}>
        <View style={[styles.wrapper, mark ? styles.wrapperMark : null, innerStyle]}>
          <Text style={textStyleSummary}>{children}</Text>
          {closeable ? (
            <TouchableWithoutFeedback onPress={onClose}>
              <Icon
                name="cross"
                size={textStyleSummary.fontSize}
                color={textStyleSummary.color as string}
              />
            </TouchableWithoutFeedback>
          ) : null}
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Tag;
