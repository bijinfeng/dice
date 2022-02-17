import React from 'react';
import { Modal, Pressable, StyleSheet } from 'react-native';

import View from '../View';
import { useTheme } from '../Theme';
import type { OverlayProps } from './type';

const Overlay = (props: OverlayProps) => {
  const {
    children,
    backdropStyle,
    overlayStyle,
    useSafeArea,
    onBackdropPress = () => null,
    visible,
    pressableProps,
    onPressOut,
    onPressIn,
    onLongPress,
    ...rest
  } = props;

  const theme = useTheme();

  return (
    <Modal visible={visible} onRequestClose={onBackdropPress} transparent {...rest}>
      <Pressable
        style={StyleSheet.flatten([
          styles.backdrop,
          { backgroundColor: theme.overlay_background_color },
          backdropStyle,
        ])}
        onPress={onBackdropPress}
        testID="RNE__Overlay__backdrop"
        {...pressableProps}
        {...{ onPressOut, onPressIn, onLongPress }}
      />
      {children && (
        <View
          useSafeArea={useSafeArea}
          style={[styles.container, overlayStyle]}
          pointerEvents="box-none"
        >
          {children}
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

Overlay.displayName = 'Overlay';

export default Overlay;
