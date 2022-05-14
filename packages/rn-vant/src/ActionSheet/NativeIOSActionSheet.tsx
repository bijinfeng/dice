import React, { useEffect } from 'react';
import { ActionSheetIOS } from 'react-native';
import isString from 'lodash-es/isString';
import type { ActionSheetProps } from './type';

/**
 * 原生的 IOS ActionSheet 组件
 * @param props ActionSheetProps
 * @returns JSX.Element
 */
const NativeIOSActionSheet = (props: ActionSheetProps): JSX.Element => {
  const {
    visible,
    actions = [],
    onClose,
    title,
    description,
    cancelText,
    onCancel,
    onSelect,
  } = props;

  const handleOpen = () => {
    const actionNames = actions.map(it => it.name);
    const hasCancel = cancelText && isString(cancelText);

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: hasCancel ? actionNames.concat(cancelText) : actionNames,
        title: isString(title) ? title : undefined,
        message: isString(description) ? description : undefined,
        cancelButtonIndex: hasCancel ? actionNames.length : undefined,
      },
      buttonIndex => {
        if (buttonIndex === actionNames.length) {
          onCancel?.();
        } else {
          onSelect?.(actions[buttonIndex], buttonIndex);
        }
        onClose?.();
      }
    );
  };

  useEffect(() => {
    if (visible) handleOpen();
  }, [visible]);

  return <></>;
};

export default NativeIOSActionSheet;
