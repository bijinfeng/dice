import React, { useState, useEffect } from 'react';
import isFunction from 'lodash-es/isFunction';
import { Clear } from '@pingtou/rn-vant-icons';
import { View, Text, Modal, Pressable, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Image from '../Image';
import Swiper from '../Swiper';
import { useThemeFactory } from '../Theme';
import constants from '../utils/constants';
import { cloneReactNode } from '../utils/cloneReactNode';
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
  closeIcon: <Clear />,
};

const ImagePreview = (_props: ImagePreviewProps): JSX.Element => {
  const props = { ...defaultProps, ..._props };
  const { beforeClose, closeIcon } = props;
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = useState(() => props.visible);
  const [active, setActive] = useState(() => props.startPosition);
  const { styles, theme } = useThemeFactory(createStyle);

  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  const handleClose = async (closeByIcon = false) => {
    if (!closeByIcon && props.closeOnlyClickCloseIcon) return;

    const couldClose = isFunction(beforeClose) ? await Promise.resolve(beforeClose(active)) : true;

    if (couldClose) {
      setVisible(false);
      props.onClose?.();
    }
  };

  const renderImages = () => (
    <Swiper initialSwipe={active} indicator={props.showIndicators} loop onChange={setActive}>
      {props.images.map(image => (
        <Swiper.Item
          key={image}
          style={{ height: constants.screenHeight }}
          onPress={() => handleClose()}
        >
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
        <View style={[styles.index, { top: insets.top + theme.padding_md }]}>
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

  const renderCloseIcon = () => {
    if (!props.closeable) return null;

    return (
      <TouchableOpacity
        style={[styles.icon, { top: insets.top + theme.image_preview_close_icon_margin }]}
        activeOpacity={theme.active_opacity}
        onPress={() => handleClose(true)}
      >
        {cloneReactNode(closeIcon, {
          size: theme.image_preview_close_icon_size,
          color: theme.image_preview_close_icon_color,
        })}
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={() => handleClose()}
      onDismiss={props.onClosed}
      testID={props.testID}
    >
      <Pressable style={styles.wrapper} onPress={() => handleClose()}>
        {renderImages()}
        {renderIndex()}
        {renderCloseIcon()}
      </Pressable>
    </Modal>
  );
};

export default ImagePreview;
