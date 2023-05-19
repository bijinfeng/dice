import React from 'react';
import { View } from 'react-native';
import { Photograph } from '@pingtou/rn-vant-icons';
import { useThemeFactory } from '../Theme';
import type { ImagePickerProps, UploaderValueItem, PickerImageInfo } from './types';
import { useControllableValue } from '../hooks';
import ImageItem from './ImageItem';
import Uploader from './Uploader';
import { createStyles } from './style';

const ImagePicker = (props: ImagePickerProps): JSX.Element => {
  const [value = [], setValue] = useControllableValue<UploaderValueItem[]>(props);
  const { styles, theme } = useThemeFactory(createStyles);
  const { maxCount = 0, uploadIcon = <Photograph /> } = props;
  const previewSize = props.previewSize || theme.image_picker_size;

  const handleUpload = (files: PickerImageInfo[]) => {
    const nextValue: UploaderValueItem[] = value.concat(files.map(it => ({ url: it.uri, ...it })));
    setValue(nextValue);
  };

  const renderPreviewList = () => {
    if (props.previewImage) {
      return value.map((item, index) => (
        <ImageItem
          key={item.key ?? `-${index}`}
          name={props.name}
          url={item.thumbnail ?? item.url}
          imageFit={props.imageFit}
          deletable={props.deletable}
          previewSize={previewSize}
          deleteRender={props.deleteRender}
          previewCoverRender={() => props.previewCoverRender?.(item)}
          onDelete={async () => {
            try {
              const canDelete = await props.onDelete?.(item);
              if (canDelete === false) return;
              setValue(value.filter((_, i) => i !== index));
              // eslint-disable-next-line no-empty
            } catch (error) {}
          }}
        />
      ));
    }

    return null;
  };

  const renderUpload = () => {
    if (props.showUpload && (maxCount === 0 || value.length < maxCount)) {
      if (props.children) {
        return <View>{props.children}</View>;
      }

      return (
        <Uploader
          uploadIcon={uploadIcon}
          readOnly={props.readOnly}
          previewSize={previewSize}
          uploadText={props.uploadText}
          capture={props.capture}
          multiple={props.multiple}
          disabled={props.disabled}
          maxSize={props.maxSize}
          beforeUpload={props.beforeUpload}
          onOversize={props.onOversize}
          upload={handleUpload}
        />
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
};

export default ImagePicker;
