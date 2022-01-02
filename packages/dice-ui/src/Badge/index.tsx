import React, { forwardRef, useState } from 'react';
import { Text, View } from 'react-native';
import type { LayoutChangeEvent, LayoutRectangle, ViewStyle } from 'react-native';
import type { BadgeProps } from './type';
import { useThemeFactory } from '../Theme';
import { createStyle } from './style';
import { isDef } from '../utils/typeof';
import { isNumeric } from '../utils/validate';

const Badge = forwardRef<View, BadgeProps>((props, ref) => {
  const { style, color, dot, showZero = true, content, max, children, offset, ...rest } = props;
  const { styles } = useThemeFactory(createStyle, { color });
  const [badgeRange, setBadgeRange] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const onBadgeLayout = (event: LayoutChangeEvent) => {
    setBadgeRange(event.nativeEvent.layout);
  };

  const hasContent = () => {
    if (content) {
      return true;
    }
    return isDef(content) && content !== '' && (showZero || +content !== 0);
  };

  const renderContent = () => {
    if (!dot && hasContent()) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (isDef(max) && isNumeric(content?.toString()) && +content > max) {
        return `${max}+`;
      }

      return content;
    }

    return null;
  };

  const renderBadge = () => {
    if (hasContent() || dot) {
      const [x = 0, y = 0] = offset ?? [];

      const fixedTransformStyle: ViewStyle = {
        top: -badgeRange.height / 2 + x,
        right: -badgeRange.width / 2 + y,
      };

      return (
        <View
          ref={ref}
          style={[
            styles.badgeContainer,
            children ? styles.fixed : undefined,
            children ? fixedTransformStyle : { marginTop: y, marginLeft: x },
            children ? undefined : style,
          ]}
          onLayout={onBadgeLayout}
        >
          {React.isValidElement(content) ? (
            <View style={styles.badge}>{renderContent()}</View>
          ) : (
            <Text style={[styles.badge, dot ? styles.dot : undefined]}>{renderContent()}</Text>
          )}
        </View>
      );
    }

    return null;
  };

  return children ? (
    <View style={[styles.wrapper, style]} {...rest}>
      {children}
      {renderBadge()}
    </View>
  ) : (
    renderBadge()
  );
});

Badge.displayName = 'Badge';

export default Badge;
