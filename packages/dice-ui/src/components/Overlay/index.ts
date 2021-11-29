import React from 'react';
import { add, remove, transform, restore } from './context';

import OverlayView from './OverlayView';
import OverlayPullView from './OverlayPullView';
import OverlayPopView from './OverlayPopView';

/**
 * 断言 viewEle 是否是 React.ReactElement
 */
const isElement = (viewEle: any): viewEle is React.ReactElement => React.isValidElement(viewEle);

export default class Overlay {
  static View = OverlayView;
  static PullView = OverlayPullView;
  static PopView = OverlayPopView;

  static hide = remove;
  static transformRoot = transform;
  static restoreRoot = restore;

  static show(overlayView: React.ReactNode): number {
    // eslint-disable-next-line prefer-const
    let key: number;
    if (isElement(overlayView)) {
      const onDisappearCompletedSave = overlayView?.props?.onDisappearCompleted;
      const element = React.cloneElement(overlayView, {
        onDisappearCompleted: () => {
          remove(key);
          onDisappearCompletedSave && onDisappearCompletedSave();
        },
      });
      key = add(element);
    }
    return key;
  }
}
