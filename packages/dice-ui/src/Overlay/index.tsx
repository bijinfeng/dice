import React from 'react';
import { Modal, Pressable, View, StyleSheet } from 'react-native';

import { useTheme } from '../Theme';
import type { OverlayProps } from './type';

const Overlay = ({
  children,
  backdropStyle,
  overlayStyle,
  onBackdropPress = () => null,
  fullScreen = false,
  visible,
  pressableProps,
  onPressOut,
  onPressIn,
  onLongPress,
  ...rest
}: OverlayProps) => {
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
        <View style={styles.container} pointerEvents="box-none">
          <View style={StyleSheet.flatten([fullScreen && styles.fullscreen, overlayStyle])}>
            {children}
          </View>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  fullscreen: {
    height: '100%',
    width: '100%',
  },
});

Overlay.displayName = 'Overlay';

export default Overlay;
