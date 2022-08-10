import React, { useState } from 'react';
import isFunction from 'lodash-es/isFunction';
import { View, Text, Modal, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Image from '../Image';
import Swiper from '../Swiper';
import { useThemeFactory } from '../Theme';
import constants from '../utils/constants';
import { createStyle } from './style';
import type { ImagePreviewProps } from './type';

const defaultProps = {
  overlay: true,
  showIndex: true,
  images: [],
  swipeDuration: 300,
  startPosition: 0,
  closeIconPosition: 'top-right' as const,
  showIndicators: false,
  closeOnlyClickCloseIcon: false,
  maxZoom: 3,
};

const ImagePreview = (_props: ImagePreviewProps): JSX.Element => {
  const props = { ...defaultProps, ..._props };
  const insets = useSafeAreaInsets();
  const [active, setActive] = useState(() => props.startPosition);
  const { styles } = useThemeFactory(createStyle);

  const handleClose = async () => {
    const couldClose = isFunction(props.beforeClose)
      ? await Promise.resolve(props.beforeClose(active))
      : true;

    couldClose && props.onClose?.();
  };

  const renderImages = () => (
    <Swiper initialSwipe={active} onChange={setActive}>
      {props.images.map(image => (
        <Swiper.Item key={image} style={{ height: constants.screenHeight }}>
          <Image
            source={{ uri: image }}
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
          />
        </Swiper.Item>
      ))}
    </Swiper>
  );

  const renderIndex = () => {
    if (props.showIndex) {
      return (
        <View style={[styles.index, { top: insets.top }]}>
          <Text style={styles.indexText}>
            {props.indexRender
              ? props.indexRender({ index: active, len: props.images.length })
              : `${active + 1} / ${props.images.length}`}
          </Text>
        </View>
      );
    }
    return null;
  };

  return (
    <Modal
      visible={props.visible}
      transparent
      onRequestClose={() => handleClose()}
      onDismiss={props.onClosed}
    >
      <Pressable style={styles.wrapper} onPress={handleClose}>
        {renderImages()}
        {renderIndex()}
      </Pressable>
    </Modal>
  );
};

export default ImagePreview;
