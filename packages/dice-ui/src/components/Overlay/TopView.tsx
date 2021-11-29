import React, { FC, memo, useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { forEach } from 'lodash';
import {
  removeAllListeners,
  listenAddOverlay,
  listenRemoveAll,
  listenRemoveOverlay,
  listenRestore,
  listenTransform,
  TransformParams,
  RestoreParams,
} from './context';
import useAnimatedValue from '../../utils/useAnimatedValue';

const screenColor = '#444';

type Element = {
  key: number;
  element: React.ReactNode;
};

const TopView: FC = memo(({ children }) => {
  const [elements, setElements] = useState<Element[]>([]);
  const translateX = useAnimatedValue(0);
  const translateY = useAnimatedValue(0);
  const scaleX = useAnimatedValue(1);
  const scaleY = useAnimatedValue(1);

  useEffect(() => {
    listenAddOverlay(add);
    listenRemoveOverlay(remove);
    listenRemoveAll(removeAll);
    listenTransform(transform);
    listenRestore(restore);
    return () => removeAllListeners();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const add = (e: Element) => {
    setElements([...elements, e]);
  };

  const remove = (key: number) => {
    setElements(elements.filter(it => it.key !== key));
  };

  const removeAll = () => {
    setElements([]);
  };

  const transform = (e: TransformParams) => {
    const { transform: _transform, animated, animatesOnly } = e;
    let tx = 0;
    let ty = 0;
    let sx = 1;
    let sy = 1;
    _transform.forEach(item => {
      if (item && typeof item === 'object') {
        forEach(item, (value, name) => {
          // eslint-disable-next-line default-case
          switch (name as unknown as string) {
            case 'translateX':
              tx = value as number;
              break;
            case 'translateY':
              ty = value as number;
              break;
            case 'scaleX':
              sx = value as number;
              break;
            case 'scaleY':
              sy = value as number;
              break;
          }
        });
      }
    });
    if (animated) {
      const animates = [
        Animated.spring(translateX, {
          toValue: tx,
          friction: 9,
          useNativeDriver: false,
        }),
        Animated.spring(translateY, {
          toValue: ty,
          friction: 9,
          useNativeDriver: false,
        }),
        Animated.spring(scaleX, {
          toValue: sx,
          friction: 9,
          useNativeDriver: false,
        }),
        Animated.spring(scaleY, {
          toValue: sy,
          friction: 9,
          useNativeDriver: false,
        }),
      ];
      animatesOnly ? animatesOnly(animates) : Animated.parallel(animates).start();
    } else if (animatesOnly) {
      const animates = [
        Animated.timing(translateX, {
          toValue: tx,
          duration: 1,
          useNativeDriver: false,
        }),
        Animated.timing(translateY, {
          toValue: ty,
          duration: 1,
          useNativeDriver: false,
        }),
        Animated.timing(scaleX, {
          toValue: sx,
          duration: 1,
          useNativeDriver: false,
        }),
        Animated.timing(scaleY, {
          toValue: sy,
          duration: 1,
          useNativeDriver: false,
        }),
      ];
      animatesOnly(animates);
    } else {
      translateX.setValue(tx);
      translateY.setValue(ty);
      scaleX.setValue(sx);
      scaleY.setValue(sy);
    }
  };

  const restore = (e: RestoreParams) => {
    const { animated, animatesOnly } = e;
    if (animated) {
      const animates = [
        Animated.spring(translateX, {
          toValue: 0,
          friction: 9,
          useNativeDriver: false,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          friction: 9,
          useNativeDriver: false,
        }),
        Animated.spring(scaleX, {
          toValue: 1,
          friction: 9,
          useNativeDriver: false,
        }),
        Animated.spring(scaleY, {
          toValue: 1,
          friction: 9,
          useNativeDriver: false,
        }),
      ];
      animatesOnly ? animatesOnly(animates) : Animated.parallel(animates).start();
    } else if (animatesOnly) {
      const animates = [
        Animated.timing(translateX, {
          toValue: 0,
          duration: 1,
          useNativeDriver: false,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1,
          useNativeDriver: false,
        }),
        Animated.timing(scaleX, {
          toValue: 1,
          duration: 1,
          useNativeDriver: false,
        }),
        Animated.timing(scaleY, {
          toValue: 1,
          duration: 1,
          useNativeDriver: false,
        }),
      ];
      animatesOnly(animates);
    } else {
      translateX.setValue(0);
      translateY.setValue(0);
      scaleX.setValue(1);
      scaleY.setValue(1);
    }
  };

  return (
    <View style={{ backgroundColor: screenColor, flex: 1 }}>
      <Animated.View
        style={{
          flex: 1,
          transform: [{ translateX }, { translateY }, { scaleX }, { scaleY }],
        }}
      >
        <View style={styles.pureWrapper}>{children}</View>
      </Animated.View>
      {elements.map(item => (
        <View key={`topView${item.key}`} style={styles.overlay} pointerEvents="box-none">
          {item.element}
        </View>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  pureWrapper: {
    flex: 1,
  },
});

export default TopView;
