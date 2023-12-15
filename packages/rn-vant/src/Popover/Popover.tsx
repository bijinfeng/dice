import React, { forwardRef, useImperativeHandle, useRef, useMemo } from 'react';
import { View, Pressable, Text, StyleSheet, TextStyle } from 'react-native';
import Pop, { PopoverPlacement } from 'react-native-popover-view';
import { useThemeFactory } from '../Theme';
import TouchableOpacity from '../TouchableOpacity';
import type { PopoverInstance, PopoverProps, PopoverAction } from './type';
import { createStyle } from './style';

const PlacementMap: Record<Required<PopoverProps>['placement'], PopoverPlacement> = {
  auto: PopoverPlacement.AUTO,
  top: PopoverPlacement.TOP,
  bottom: PopoverPlacement.BOTTOM,
  left: PopoverPlacement.LEFT,
  right: PopoverPlacement.RIGHT,
  center: PopoverPlacement.CENTER,
  floating: PopoverPlacement.FLOATING,
};

const Popover = forwardRef<PopoverInstance, PopoverProps>((props, ref) => {
  const {
    children,
    reference,
    duration = 300,
    placement = 'auto',
    theme = 'light',
    closeOnClickAction = true,
    closeOnClickOverlay = true,
    actions = [],
  } = props;
  const { styles, theme: globalTheme } = useThemeFactory(createStyle, theme);
  const touchable = useRef(null);
  const [visible, setVisible] = React.useState(false);

  const actionActiveBackgroundColor =
    theme === 'light' ? globalTheme.active_color : 'rgba(0, 0, 0, 0.2)';

  const openPopover = () => setVisible(true);
  const closePopover = () => setVisible(false);
  const handleClose = () => {
    props.onClickOverlay?.();
    closeOnClickOverlay && closePopover();
  };
  const handlePressAction = (action: PopoverAction, index: number) => {
    props.onSelect?.(action, index);
    closeOnClickAction && closePopover();
  };

  useImperativeHandle(ref, () => ({
    show: () => openPopover(),
    hide: () => closePopover(),
  }));

  const arrowSize = useMemo(
    () => ({
      width: globalTheme.popover_arrow_size * 2,
      height: globalTheme.popover_arrow_size,
    }),
    [globalTheme.popover_arrow_size]
  );

  const renderAction = (action: PopoverAction, index: number) => {
    const { icon, text, color, disabled, style: actionStyle } = action;
    const actionTextStyle: TextStyle = StyleSheet.flatten(styles.actionText);
    const disabledActionTextStyle: TextStyle = StyleSheet.flatten(styles.disabledActionText);
    const textColor = color || (disabled ? disabledActionTextStyle.color : actionTextStyle.color);

    return (
      <TouchableOpacity
        key={index}
        disabled={disabled}
        onPress={() => handlePressAction(action, index)}
        activeBackgroundColor={actionActiveBackgroundColor}
      >
        <View style={[styles.action, actionStyle, index > 0 && styles.actionBorder]}>
          {icon && (
            <View style={styles.iconWrapper}>
              {React.cloneElement(icon as React.ReactElement, {
                color: textColor,
                size: globalTheme.popover_action_icon_size,
              })}
            </View>
          )}
          <Text
            style={[
              styles.actionText,
              icon ? styles.actionTextWithIcon : null,
              { color: textColor },
            ]}
          >
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Pressable ref={touchable} onPress={openPopover}>
        {React.isValidElement(reference)
          ? React.cloneElement<any>(reference, { onPress: openPopover })
          : reference}
      </Pressable>
      <Pop
        from={touchable}
        isVisible={visible}
        placement={PlacementMap[placement]}
        offset={props.offset}
        animationConfig={{ duration }}
        onRequestClose={handleClose}
        backgroundStyle={[props.overlayStyle, !props.overlay && styles.transparentOverlay]}
        popoverStyle={[styles.popover, styles.content]}
        arrowSize={arrowSize}
        onOpenStart={props.onOpen}
        onOpenComplete={props.onOpened}
        onCloseStart={props.onClose}
        onCloseComplete={props.onClosed}
      >
        {children || actions.map(renderAction)}
      </Pop>
    </>
  );
});

export default Popover;
