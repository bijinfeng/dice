import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Cross, Close } from '@rn-vant/icons';
import Image from '../Image';
import Loading from '../Loading';
import { createItemStyles } from './style';
import { useThemeFactory } from '../Theme';
import type { UploaderPrviewItemProps } from './types';

const ImageItem = (props: UploaderPrviewItemProps): JSX.Element => {
  const { onPreview, statusTextRender, status, url } = props;
  const { styles, theme } = useThemeFactory(createItemStyles);

  const renderPreview = () => {
    return (
      <Image
        resizeMode={props.imageFit}
        source={{ uri: url }}
        style={{ width: props.previewSize, height: props.previewSize }}
        onPress={onPreview}
      />
    );
  };

  const renderMask = () => {
    if (status === 'failed' || status === 'pending') {
      const MaskIcon =
        status === 'failed' ? (
          <Close
            size={theme.image_picker_mask_icon_size}
            color={theme.image_picker_mask_text_color}
          />
        ) : (
          <Loading
            size={theme.image_picker_loading_icon_size}
            color={theme.image_picker_loading_icon_color}
          />
        );

      return (
        <View style={styles.mask}>
          {MaskIcon}
          {statusTextRender && <Text style={styles.maskMessage}>{statusTextRender(status)}</Text>}
        </View>
      );
    }
    return null;
  };

  const renderDeleteIcon = () => {
    if (props.deletable) {
      if (props.deleteRender) {
        return props.deleteRender(props.onDelete);
      }
      return (
        <Pressable style={styles.delete}>
          <Cross
            scale={0.7}
            translateX="10%"
            translateY="-10%"
            color={theme.image_picker_delete_color}
            size={theme.image_picker_delete_icon_size}
          />
        </Pressable>
      );
    }
    return null;
  };

  return (
    <View style={styles.preview}>
      {renderPreview()}
      {renderMask()}
      {renderDeleteIcon()}
    </View>
  );
};

export default ImageItem;
