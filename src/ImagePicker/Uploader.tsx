import {
  launchCameraAsync,
  launchImageLibraryAsync,
  useCameraPermissions,
  useMediaLibraryPermissions,
} from "expo-image-picker";
import React from "react";
import { useThemeFactory } from "../Theme";
import { createUploaderStyles } from "./style";
import type { ImagePickerProps, PickerImageInfo } from "./types";

export type UploaderProps = Pick<
  ImagePickerProps,
  | "uploadIcon"
  | "disabled"
  | "readOnly"
  | "previewSize"
  | "uploadText"
  | "capture"
  | "multiple"
  | "maxSize"
  | "beforeUpload"
  | "onOversize"
> & {
  upload: (files: PickerImageInfo[]) => void;
};

const Uploader = (props: UploaderProps): JSX.Element => {
  const {
    previewSize,
    uploadText,
    capture,
    multiple = false,
    disabled,
    maxSize,
    onOversize,
    beforeUpload,
    upload,
  } = props;
  const { styles, theme } = useThemeFactory(createUploaderStyles);
  const [cameraStatus, requestCameraPermission] = useCameraPermissions();
  const [mediaLibraryStatus, requestmediaLibraryPermission] =
    useMediaLibraryPermissions();

  // const fetchImageFromUri = async (uri: string) => {
  //   const response = await fetch(uri);
  //   const blob = await response.blob();
  //   return blob;
  // };

  // 获取权限
  const getPermissions = async (): Promise<boolean> => {
    if (capture) {
      if (cameraStatus?.status === "granted") {
        return true;
      }
      return requestCameraPermission().then(
        ({ status }) => status === "granted"
      );
    }

    if (mediaLibraryStatus?.status === "granted") {
      return true;
    }
    return requestmediaLibraryPermission().then(
      ({ status }) => status === "granted"
    );
  };

  const handlePicker = async () => {
    if (disabled) return;

    const hasPermission = await getPermissions();
    if (hasPermission) {
      const pickerResult = await (capture
        ? launchCameraAsync({ allowsMultipleSelection: multiple })
        : launchImageLibraryAsync({ allowsMultipleSelection: multiple }));

      if (pickerResult.cancelled) return;

      let pickerFiles: PickerImageInfo[] = (pickerResult as any)?.selected ?? [
        pickerResult,
      ];

      // 根据图片大小筛选图片
      if (maxSize) {
        const exceedFiles = pickerFiles.filter(
          (it) => it.fileSize && it.fileSize > maxSize
        );
        if (exceedFiles.length > 0) {
          onOversize?.(exceedFiles);
          return;
        }
      }

      // 上传前回调
      if (beforeUpload) {
        await Promise.all(
          pickerFiles.map((file) => beforeUpload(file, pickerFiles))
        ).then((filesList) => {
          pickerFiles = filesList.filter(Boolean) as PickerImageInfo[];
        });
      }

      upload(pickerFiles);
    } else {
      Dialog.alert({
        message: "Sorry, we need these permissions to make this work!",
      });
    }
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

  return (
    <TouchableOpacity
      backgroundColor={theme.image_picker_upload_background}
      activeBackgroundColor={theme.image_picker_upload_active_color}
      disabled={props.readOnly}
      style={[styles.upload, { width: previewSize, height: previewSize }]}
      onPress={handlePicker}
    >
      {renderUploadIcon()}
      {uploadText && <Text style={styles.uploadText}>{uploadText}</Text>}
    </TouchableOpacity>
  );
};

export default Uploader;
