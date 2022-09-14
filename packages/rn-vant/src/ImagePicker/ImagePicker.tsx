import React from 'react';
import { View, Text } from 'react-native';
import { Photograph } from '@rn-vant/icons';
import { useThemeFactory } from '../Theme';
import type { ImagePickerProps, UploaderValueItem } from './types';
import { useControllableValue } from '../hooks';
import ImageItem from './ImageItem';
import TouchableOpacity from '../TouchableOpacity';
import { createStyles } from './style';

const ImagePicker = (props: ImagePickerProps): JSX.Element => {
  const [value, setValue] = useControllableValue<UploaderValueItem[]>(props);
  const { styles, theme } = useThemeFactory(createStyles);
  const previewSize = props.previewSize || theme.image_picker_size;

  const renderPreviewList = () => {
    if (props.previewImage) {
      return (
        <>
          {value.map((item, index) => (
            <ImageItem
              key={item.key ?? `-${index}`}
              name={props.name}
              url={item.thumbnail ?? item.url}
              imageFit={props.imageFit}
              deletable={props.deletable}
              previewSize={previewSize}
              deleteRender={props.deleteRender}
            />
          ))}
        </>
      );
    }

    return null;
  };

  const renderUploadIcon = () => {
    if (props.uploadIcon) {
      return React.cloneElement(props.uploadIcon as React.ReactElement, {
        color: theme.image_picker_icon_color,
        size: theme.image_picker_icon_size,
      });
    }

    return null;
  };

  const renderUpload = () => {
    if (props.showUpload) {
      if (props.children) {
        return <View>{props.children}</View>;
      }

      return (
        <TouchableOpacity
          backgroundColor={theme.image_picker_upload_background}
          activeBackgroundColor={theme.image_picker_upload_active_color}
          disabled={props.readOnly}
          style={[styles.upload, { width: previewSize, height: previewSize }]}
        >
          {renderUploadIcon()}
          {props.uploadText && <Text style={styles.uploadText}>{props.uploadText}</Text>}
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, props.disabled && styles.wrapperDisabled]}>
        {renderPreviewList()}
        {renderUpload()}
      </View>
    </View>
  );
};

ImagePicker.defaultProps = {
  maxSize: Number.MAX_VALUE,
  maxCount: Number.MAX_VALUE,
  deletable: true,
  showUpload: true,
  previewImage: true,
  previewFullImage: true,
  name: '',
  accept: 'image/*',
  imageFit: 'cover',
  resultType: 'dataUrl',
  uploadIcon: <Photograph />,
};

export default ImagePicker;
