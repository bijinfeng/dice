import React from 'react';
import { View } from 'react-native';
import Overlay from '../Overlay';
import type OverlayPullView from '../Overlay/OverlayPullView';
import TouchableRipple from '../TouchableRipple';
import Icon, { IconNames, isIcon } from '../Icon';

const iconMargin = 16;

type PullViewProps = React.ComponentProps<typeof Overlay.PullView>;
type IconPosition = 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right';

export interface PopupProps extends PullViewProps {
  /**
   * 是否显示关闭图标
   */
  closeable?: boolean;
  closeIcon?: IconNames | React.ReactNode;
  closeIconPosition?: IconPosition;
}

export default class Popup extends Overlay {
  static PopupView = Overlay.PullView;

  static open(view: React.ReactNode, options?: Partial<PopupProps>) {
    const { closeable, closeIcon = 'cross', closeIconPosition, ...rest } = options ?? {};
    let popup: OverlayPullView | null;

    const close = (animated = false) => popup?.close(animated);

    const key = super.show(
      <this.PopupView
        {...rest}
        ref={v => {
          popup = v;
        }}
      >
        <View style={{ position: 'relative' }}>
          {closeable && (
            <TouchableRipple
              style={[this.buildIconStyle(closeIconPosition), { position: 'absolute', zIndex: 1 }]}
              onPress={() => {
                close();
              }}
            >
              {/* TODO: color 应该使用 theme 里的颜色 */}
              {isIcon(closeIcon) ? <Icon name={closeIcon} size={22} color="#c8c9cc" /> : closeIcon}
            </TouchableRipple>
          )}
          {view}
        </View>
      </this.PopupView>
    );

    return { key, close };
  }

  static buildIconStyle(iconPosition: IconPosition = 'top-right') {
    switch (iconPosition) {
      case 'top-left':
        return {
          left: iconMargin,
          top: iconMargin,
        };
      case 'top-right':
        return {
          right: iconMargin,
          top: iconMargin,
        };
      case 'bottom-left':
        return {
          left: iconMargin,
          bottom: iconMargin,
        };
      case 'bottom-right':
        return {
          right: iconMargin,
          bottom: iconMargin,
        };
      default:
        break;
    }

    return undefined;
  }
}
