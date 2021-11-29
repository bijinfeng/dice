import React from 'react';
import { Animated, LayoutChangeEvent, ViewProps, ViewStyle } from 'react-native';

import OverlayView, { OverlayViewProps, OverlayViewState } from './OverlayView';
import { transform, restore, Transform } from './context';

const defaultOverlayRootScale = 0.93;
const defaultColor = '#fff';
const borderRadius = 16;

interface Props extends OverlayViewProps {
  /**
   * 抽屉从屏幕哪条边弹出。
   */
  side?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * 抽屉容器样式。
   */
  containerStyle?: ViewProps['style'];
  /**
   * 浮层弹出时根组件转换动画, 可以是字符串或 View.style.transform 类似的数组。
   */
  rootTransform: Transform;
  /**
   * 是否显示圆角
   */
  round?: boolean;
}

interface State extends OverlayViewState {
  marginValue: Animated.Value;
  showed: boolean;
}

class OverlayPullView extends OverlayView<Props, State> {
  static defaultProps = {
    ...OverlayView.defaultProps,
    side: 'bottom',
    animated: true,
    round: false,
    rootTransform: 'none',
  };

  private viewLayout = { x: 0, y: 0, width: 0, height: 0 };

  constructor(props: Props) {
    super(props);
    this.viewLayout = { x: 0, y: 0, width: 0, height: 0 };
    Object.assign(this.state, {
      marginValue: new Animated.Value(0),
      showed: false,
    });
  }

  get appearAnimates(): Animated.CompositeAnimation[] {
    const animates = super.appearAnimates;
    animates.push(
      Animated.spring(this.state.marginValue, {
        toValue: 0,
        friction: 9,
        useNativeDriver: false,
      })
    );
    return animates;
  }

  get disappearAnimates(): Animated.CompositeAnimation[] {
    const animates = super.disappearAnimates;
    animates.push(
      Animated.spring(this.state.marginValue, {
        toValue: this.marginSize,
        friction: 9,
        useNativeDriver: false,
      })
    );
    return animates;
  }

  get appearAfterMount(): boolean {
    return false;
  }

  get marginSize(): number {
    const { side } = this.props;
    if (side === 'left' || side === 'right') return -this.viewLayout.width;
    return -this.viewLayout.height;
  }

  get rootTransformValue(): Transform {
    const { side, rootTransform } = this.props;
    if (!rootTransform || rootTransform === 'none') {
      return [];
    }
    switch (rootTransform) {
      case 'translate':
        switch (side) {
          case 'top':
            return [{ translateY: this.viewLayout.height }];
          case 'left':
            return [{ translateX: this.viewLayout.width }];
          case 'right':
            return [{ translateX: -this.viewLayout.width }];
          default:
            return [{ translateY: -this.viewLayout.height }];
        }
        break;
      case 'scale':
        return [{ scaleX: defaultOverlayRootScale }, { scaleY: defaultOverlayRootScale }];
      default:
        return rootTransform;
    }
  }

  appear(animated = this.props.animated): void {
    if (animated) {
      this.state.marginValue.setValue(this.marginSize);
    }
    super.appear(animated);

    const { rootTransform } = this.props;
    if (rootTransform && rootTransform !== 'none') {
      transform(this.rootTransformValue, animated);
    }
  }

  disappear(animated = this.props.animated): void {
    const { rootTransform } = this.props;
    if (rootTransform && rootTransform !== 'none') {
      restore(animated);
    }

    super.disappear(animated);
  }

  onLayout(e: LayoutChangeEvent): void {
    this.viewLayout = e.nativeEvent.layout;
    if (!this.state.showed) {
      this.setState({ showed: true });
      this.appear();
    }
  }

  buildStyle() {
    const { side } = this.props;
    let sideStyle;
    // Set flexDirection so that the content view will fill the side
    switch (side) {
      case 'top':
        sideStyle = {
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        };
        break;
      case 'left':
        sideStyle = {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        };
        break;
      case 'right':
        sideStyle = {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'stretch',
        };
        break;
      default:
        sideStyle = {
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'stretch',
        };
    }
    return super.buildStyle().concat(sideStyle);
  }

  buildRoundStyle() {
    const { round, side } = this.props;
    let roundstyle: ViewStyle;
    if (round) {
      switch (side) {
        case 'bottom':
          roundstyle = {
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
          };
          break;
        case 'left':
          roundstyle = {
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
          };
          break;
        case 'right':
          roundstyle = {
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
          };
          break;
        case 'top':
          roundstyle = {
            borderBottomLeftRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
          };
          break;
        default:
          break;
      }
    }

    return roundstyle;
  }

  renderContent(content = null): React.ReactElement {
    const { side, containerStyle, children } = this.props;
    const roundStyle = this.buildRoundStyle();

    let contentStyle;
    switch (side) {
      case 'top':
        contentStyle = { marginTop: this.state.marginValue };
        break;
      case 'left':
        contentStyle = { marginLeft: this.state.marginValue };
        break;
      case 'right':
        contentStyle = { marginRight: this.state.marginValue };
        break;
      default:
        contentStyle = { marginBottom: this.state.marginValue };
    }

    return (
      <Animated.View
        style={[
          {
            backgroundColor: defaultColor,
            opacity: this.state.showed ? 1 : 0,
          },
          roundStyle,
          containerStyle,
          contentStyle,
        ]}
        onLayout={e => this.onLayout(e)}
      >
        {content || children}
      </Animated.View>
    );
  }
}

export default OverlayPullView;
