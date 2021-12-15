import React from 'react';
import { Animated, LayoutChangeEvent, ViewProps } from 'react-native';

import OverlayView, { OverlayViewProps, OverlayViewState } from './OverlayView';

interface Props extends OverlayViewProps {
  /**
   * 弹出效果。
   * - zoomOut: 缩小, 弹出框放大后动画过度到原大
   * - zoomIn: 放大, 弹出框缩小后动画过度到原大
   * - custom: 自定义, 弹出框从 customBounds 位置和大小动画过度到原大
   */
  type?: 'zoomOut' | 'zoomIn' | 'custom';
  /**
   * 弹出框容器样式。
   */
  containerStyle?: ViewProps['style'];
  /**
   * 弹出框动画过度起始位置和大小, type = 'custom' 时有效。
   */
  customBounds?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

interface State extends OverlayViewState {
  opacity: Animated.Value;
  translateX: Animated.Value;
  translateY: Animated.Value;
  scaleX: Animated.Value;
  scaleY: Animated.Value;
  showed: boolean;
}

export default class OverlayPopView extends OverlayView<Props, State> {
  static defaultProps = {
    ...OverlayView.defaultProps,
    type: 'zoomOut',
    animated: true,
  };

  private viewLayout = { x: 0, y: 0, width: 0, height: 0 };

  constructor(props: Props) {
    super(props);
    this.viewLayout = { x: 0, y: 0, width: 0, height: 0 };
    Object.assign(this.state, {
      opacity: new Animated.Value(1),
      translateX: new Animated.Value(0),
      translateY: new Animated.Value(0),
      scaleX: new Animated.Value(1),
      scaleY: new Animated.Value(1),
      showed: false,
    });
  }

  get appearAnimates() {
    let animates = super.appearAnimates;
    const duration = 200;
    animates = animates.concat([
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.translateX, {
        toValue: 0,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.translateY, {
        toValue: 0,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.scaleX, {
        toValue: 1,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.scaleY, {
        toValue: 1,
        duration,
        useNativeDriver: false,
      }),
    ]);
    return animates;
  }

  get disappearAnimates() {
    let animates = super.disappearAnimates;
    const duration = 200;
    const ft = this.fromTransform;
    animates = animates.concat([
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.translateX, {
        toValue: ft.translateX,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.translateY, {
        toValue: ft.translateY,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.scaleX, {
        toValue: ft.scaleX,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.scaleY, {
        toValue: ft.scaleY,
        duration,
        useNativeDriver: false,
      }),
    ]);
    return animates;
  }

  get appearAfterMount() {
    return false;
  }

  get fromBounds() {
    const { type, customBounds } = this.props;
    let bounds;
    if (type === 'custom' && !customBounds) {
      // eslint-disable-next-line no-console
      console.error('OverlayPopView: customBounds can not be null when type is "custom"');
    }
    if (type === 'custom' && customBounds) {
      bounds = customBounds;
    } else {
      const zoomRate = type === 'zoomIn' ? 0.3 : 1.2;
      const { x, y, width, height } = this.viewLayout;
      bounds = {
        x: x - (width * zoomRate - width) / 2,
        y: y - (height * zoomRate - height) / 2,
        width: width * zoomRate,
        height: height * zoomRate,
      };
    }
    return bounds;
  }

  get fromTransform() {
    const fb = this.fromBounds;
    const tb = this.viewLayout;
    const transform = {
      translateX: fb.x + fb.width / 2 - (tb.x + tb.width / 2),
      translateY: fb.y + fb.height / 2 - (tb.y + tb.height / 2),
      scaleX: fb.width / tb.width,
      scaleY: fb.height / tb.height,
    };
    return transform;
  }

  appear(animated = this.props.animated): void {
    if (animated) {
      const { opacity, translateX, translateY, scaleX, scaleY } = this.state;
      const ft = this.fromTransform;
      opacity.setValue(0);
      translateX.setValue(ft.translateX);
      translateY.setValue(ft.translateY);
      scaleX.setValue(ft.scaleX);
      scaleY.setValue(ft.scaleY);
    }
    super.appear(animated);
  }

  onLayout(e: LayoutChangeEvent): void {
    this.viewLayout = e.nativeEvent.layout;
    if (!this.state.showed) {
      this.setState({ showed: true });
      this.appear();
    }
  }

  renderContent(content = null): React.ReactElement {
    const { containerStyle, children } = this.props;
    const { opacity, translateX, translateY, scaleX, scaleY } = this.state;

    return (
      <Animated.View
        style={[
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            minWidth: 1,
            minHeight: 1,
          },
          containerStyle,
          {
            opacity: this.state.showed ? opacity : 0,
            transform: [{ translateX }, { translateY }, { scaleX }, { scaleY }],
          },
        ]}
        pointerEvents="box-none"
        onLayout={e => this.onLayout(e)}
      >
        {content || children}
      </Animated.View>
    );
  }
}
