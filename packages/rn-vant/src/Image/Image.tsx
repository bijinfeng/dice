import React, { useRef, useState } from 'react';
import type { NativeSyntheticEvent, ImageLoadEventData, ImageErrorEventData } from 'react-native';
import { View, Text, Animated, TouchableOpacity, Platform } from 'react-native';
import Icon from '@rn-vant/icons';

import type { ImageProps } from './type';
import createStyles from './style';
import { useTheme } from '../Theme';

/**
 * Image 图片
 * 参考代码：https://github.com/HandlebarLabs/react-native-examples-and-tutorials/blob/master/tutorials/progressive-image-loading/ProgressiveImage.js
 * @description 增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。
 */
const Image = (props: ImageProps): JSX.Element => {
  const {
    imageStyle,
    style,
    onLoad,
    onError,
    onPress,
    alt,
    radius = 0,
    round,
    loading,
    showError = true,
    showLoading = true,
    animated = true,
    duration = 200,
    fadeDuration = 0,
    ...resetProps
  } = props;
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const ImageAnimated = useRef(new Animated.Value(0)).current;

  const theme = useTheme();
  const Styles = React.useMemo(
    () =>
      createStyles(theme, {
        round,
        radius,
      }),
    [round, radius, theme]
  );

  /**
   * 图片加载好了
   */
  const onLoadImage = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    setIsLoaded(true);

    Animated.timing(ImageAnimated, {
      toValue: 1,
      duration: animated ? duration : 0,
      useNativeDriver: Platform.OS !== 'web',
    }).start();

    onLoad && onLoad(event);
  };

  /**
   * 图片加载失败
   */
  const onErrorImage = (event: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoaded(true);
    setIsError(true);
    onError && onError(event);
  };

  // 是否展示 loading
  const _showLoading = !isLoaded && showLoading;
  // 是否展示 error
  const _showError = isError && showError;
  // 是否展示背景颜色
  const _showBackground = _showLoading || _showError;

  return (
    <TouchableOpacity
      style={[Styles.wrapper, _showBackground && Styles.wrapperBg, style]}
      activeOpacity={theme.active_opacity}
      disabled={!onPress}
      onPress={onPress}
    >
      <Animated.Image
        {...resetProps}
        style={[Styles.image, { opacity: ImageAnimated }, imageStyle]}
        fadeDuration={fadeDuration}
        onLoad={onLoadImage}
        onError={onErrorImage}
      />

      {_showLoading && (
        <View style={Styles.hintWrapper}>
          {loading || (
            <Icon
              name="photo"
              size={theme.image_loading_icon_size}
              color={theme.image_loading_icon_color}
            />
          )}
        </View>
      )}

      {_showError && (
        <View style={Styles.hintWrapper}>
          {alt ? (
            <Text style={Styles.hintText}>{alt}</Text>
          ) : (
            <Icon
              name="photo-fail"
              size={theme.image_error_icon_size}
              color={theme.image_error_icon_color}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Image;
