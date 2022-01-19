import React from 'react';
import { Modal, Pressable, View, StyleSheet, Platform } from 'react-native';

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
          <View
            style={StyleSheet.flatten([
              styles.overlay,
              fullScreen && styles.fullscreen,
              overlayStyle,
            ])}
          >
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
  overlay: {
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 10,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
      },
    }),
  },
});

Overlay.displayName = 'Overlay';

export default Overlay;
