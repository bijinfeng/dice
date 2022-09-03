import React, { memo } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';
import Icon from '@rn-vant/icons';

import type { NavBarProps } from './interface';
import { useThemeFactory } from '../Theme';
import { isDef } from '../utils/typeof';
import { createStyle } from './style';

const NavBar: React.FC<NavBarProps> = props => {
  const {
    style,
    leftArrowStyle,
    titleTextStyle,
    title,
    leftText,
    rightText,
    leftArrow = true,
    border = true,
    onPressLeft,
    onPressRight,
    safeAreaInsetTop,
  } = props;
  const { styles, theme } = useThemeFactory(createStyle);

  const wrapperStyleSummary = StyleSheet.flatten<ViewStyle>([
    styles.wrapper,
    border
      ? {
          borderBottomColor: theme.border_color,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }
      : null,
    style,
  ]);
  const leftArrowStyleSummary = StyleSheet.flatten<TextStyle>([styles.leftArrow, leftArrowStyle]);

  /** 标题部分 纯文字或自定义 JSX */
  const titleJSX = isDef(title) ? (
    React.isValidElement(title) ? (
      title
    ) : (
      <Text style={[styles.titleText, titleTextStyle]}>{title}</Text>
    )
  ) : null;

  /** 左侧文字 纯文字或自定义 JSX */
  const leftTextJSX = isDef(leftText) ? (
    React.isValidElement(leftText) ? (
      leftText
    ) : (
      <Text style={styles.leftText}>{leftText}</Text>
    )
  ) : null;

  const Wrapper = safeAreaInsetTop ? SafeAreaView : View;

  return (
    <Wrapper style={wrapperStyleSummary}>
      {/* 左侧 */}
      {leftArrow && (
        <TouchableOpacity style={styles.leftWrapper} onPress={onPressLeft}>
          <Icon
            name="arrow-left"
            size={theme.nav_bar_arrow_size}
            style={leftArrowStyleSummary}
            color={leftArrowStyleSummary.color as string}
          />

          {leftTextJSX}
        </TouchableOpacity>
      )}
      {/* 右侧 */}
      {rightText && (
        <TouchableOpacity style={styles.rightWrapper} onPress={onPressRight}>
          {React.isValidElement(rightText) ? (
            rightText
          ) : (
            <Text style={styles.rightText}>{rightText}</Text>
          )}
        </TouchableOpacity>
      )}

      {titleJSX}
    </Wrapper>
  );
};

export default memo(NavBar);
