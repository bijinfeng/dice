import React from 'react';
import { ViewStyle, View } from 'react-native';
import Overlay from '../Overlay';
import OverlayPullView from '../Overlay/OverlayPullView';
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
    const { closeable, closeIcon = 'cross', closeIconPosition, ...rest } = options;
    let popup: OverlayPullView;

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
              onPress={() => close()}
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
    let iconStyle: ViewStyle;
    switch (iconPosition) {
      case 'top-left':
        iconStyle = {
          left: iconMargin,
          top: iconMargin,
        };
        break;
      case 'top-right':
        iconStyle = {
          right: iconMargin,
          top: iconMargin,
        };
        break;
      case 'bottom-left':
        iconStyle = {
          left: iconMargin,
          bottom: iconMargin,
        };
        break;
      case 'bottom-right':
        iconStyle = {
          right: iconMargin,
          bottom: iconMargin,
        };
        break;
      default:
        break;
    }
    return iconStyle;
  }
}
