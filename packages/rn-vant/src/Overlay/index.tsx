import React, { useRef, useEffect, useState } from 'react';
import { Modal, Pressable, Animated } from 'react-native';
import Fade from '../Transitions/Fade';
import { Portal } from '../Portal';
import { useMemoizedFn } from '../hooks';
import { useThemeFactory } from '../Theme';
import { createStyle } from './style';
import type { OverlayProps } from './type';

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

const Overlay = (props: OverlayProps): JSX.Element => {
  const { children, visible = false, duration = 300 } = props;
  const [modalVisible, setModalVisible] = useState<boolean>(visible);
  const fadeAnimation = useRef(new Animated.Value(0));
  const { styles } = useThemeFactory(createStyle);

  const animateFading = useMemoizedFn((toValue: number) => {
    return Animated.timing(fadeAnimation.current, {
      toValue,
      duration,
      useNativeDriver: true,
    });
  });

  const handleClose = useMemoizedFn(() => {
    props.onBackdropPress?.();
  });

  const handleClosed = useMemoizedFn(() => {
    props.onFadeDone?.();
  });

  useEffect(() => {
    visible && setModalVisible(true);
    const timingEvent = animateFading(visible ? 1 : 0);
    timingEvent.start(() => {
      !visible && setModalVisible(false);
      handleClosed();
    });
    return () => timingEvent.stop();
  }, [visible]);

  const renderContent = () => (
    <>
      {!props.transparent && (
        <PressableAnimated
          style={[styles.backdrop, { opacity: fadeAnimation.current }, props.backdropStyle]}
          onPress={handleClose}
        />
      )}
      {children && (
        <Fade
          in={visible}
          entryDuration={duration}
          exitDuration={duration}
          style={[styles.container, props.overlayStyle]}
        >
          {children}
        </Fade>
      )}
    </>
  );

  if (props.transparent) {
    return modalVisible ? <Portal>{renderContent()}</Portal> : <></>;
  }

  return (
    <Modal visible={modalVisible} onRequestClose={handleClose} transparent>
      {renderContent()}
    </Modal>
  );
};

Overlay.displayName = 'Overlay';

export default Overlay;
