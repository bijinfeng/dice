import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import { Animated } from 'react-native';
import View from '../../View';

interface Props {
  testID?: string;
  dialogVisibility?: boolean;
  modalVisibility?: boolean;
  overlayBackgroundColor?: string;
  onFadeDone?: () => void;
  fadeOut?: boolean;
}

const OverlayFadingBackground = (props: Props): JSX.Element => {
  const {
    testID,
    dialogVisibility,
    modalVisibility,
    overlayBackgroundColor,
    onFadeDone: propsOnFadeDone,
    fadeOut,
  } = props;

  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const isAnimating = useRef(false);

  const onFadeDone = useCallback(() => {
    isAnimating.current = false;
    propsOnFadeDone?.();
  }, [propsOnFadeDone]);

  const animateFading = useCallback(
    toValue => {
      isAnimating.current = true;
      Animated.timing(fadeAnimation, {
        toValue,
        duration: 400,
        useNativeDriver: true,
      }).start(onFadeDone);
    },
    [fadeAnimation, onFadeDone]
  );

  useEffect(() => {
    if (!isAnimating.current && (!dialogVisibility || fadeOut)) {
      animateFading(0);
    }
  }, [dialogVisibility, animateFading, fadeOut]);

  useEffect(() => {
    if (modalVisibility) {
      animateFading(1);
    }
  }, [modalVisibility, animateFading]);

  const style = useMemo(() => {
    return {
      opacity: fadeAnimation,
      backgroundColor: overlayBackgroundColor,
    };
  }, [overlayBackgroundColor, fadeAnimation]);

  return <View testID={testID} animated style={style} pointerEvents="none" />;
};

export default OverlayFadingBackground;
