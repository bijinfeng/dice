import React from 'react';
import isString from 'lodash-es/isString';
import { View, Image, Text } from 'react-native';
import { useThemeFactory } from '../Theme';
import { renderError, renderSearch, renderNetwork, renderMaterial } from './Images';
import type { EmptyProps } from './type';
import { createStyle } from './style';

const PRESET_IMAGES: Record<string, () => JSX.Element> = {
  error: renderError,
  search: renderSearch,
  network: renderNetwork,
  default: renderMaterial,
};

const Empty = (props: EmptyProps): JSX.Element => {
  const { image = 'default', imageSize, description, style, children, ...rest } = props;
  const { styles, theme } = useThemeFactory(createStyle);
  const size = imageSize ?? theme.empty_image_size;
  const imageStyle = { width: size, height: size };

  const renderImage = () => {
    if (isString(image) && PRESET_IMAGES[image]) {
      return PRESET_IMAGES[image]();
    }
    if (React.isValidElement(image)) {
      return image;
    }
    if (isString(image)) {
      return <Image source={{ uri: image }} style={imageStyle} />;
    }
    return null;
  };

  const renderDescription = () => {
    if (description) {
      return <Text style={styles.description}>{description}</Text>;
    }
    return null;
  };

  const renderBottom = () => {
    if (children) {
      return <View style={styles.bottom}>{children}</View>;
    }
    return null;
  };

  return (
    <View style={[styles.empty, style]} {...rest}>
      <View style={imageStyle}>{renderImage()}</View>
      {renderDescription()}
      {renderBottom()}
    </View>
  );
};

export default Empty;
