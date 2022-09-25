import React from 'react';
import ImagePreviewInner from './ImagePreview';
import { PortalRef } from '../ConfigProvider';
import type { ImagePreviewProps } from './type';

let currentKey = 0;

const openImagePreview = (options: Omit<ImagePreviewProps, 'visible'>) => {
  const key = `image_preview_${++currentKey}`;

  const handleClosed = () => {
    PortalRef.current?.removePortal(key);
    options.onClosed?.();
  };

  const renderImagePreview = () => (
    <ImagePreviewInner visible key={key} {...options} onClosed={handleClosed} />
  );

  PortalRef.current?.addPortal(key, renderImagePreview());

  return { close: handleClosed };
};

const ImagePreview = Object.assign(ImagePreviewInner, { open: openImagePreview });

export { ImagePreview };
export default ImagePreview;
export type { ImagePreviewProps, ImagePreviewItemProps } from './type';
