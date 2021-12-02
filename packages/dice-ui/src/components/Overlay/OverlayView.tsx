import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Animated,
  View,
  PanResponder,
  Platform,
  ViewProps,
  BackHandler,
} from 'react-native';
import KeyboardSpace from '../KeyboardSpace';

const defaultOverlayOpacity = 0.4;

export interface OverlayViewProps {
  /**
   * 浮层样式
   */
  style?: ViewProps['style'];
  /**
   * 是否为模态浮层, 非模态浮层在点击内容之外的半透明区域或按返回键(Android only)可关闭浮层, 模态浮层则需要代码手动关闭。
   */
  modal?: boolean;
  /**
   * 是否支持动画效果。
   */
  animated?: boolean;
  /**
   * 浮层非内容区域透明度, 值从 0 到 1, 透明度从全透明到不透明。
   */
  overlayOpacity?: number;
  /**
   * 与 View.pointerEvents 一致。
   * @default auto
   */
  overlayPointerEvents?: ViewProps['pointerEvents'];
  /**
   * 在弹出键盘时是否自动缩减键盘高度空间。
   */
  autoKeyboardInsets?: boolean;
  closeOnHardwareBackPress?: boolean;
  /**
   * 在浮层显示完毕时调用。
   */
  onAppearCompleted?: () => void;
  /**
   * 在浮层隐藏完毕后调用。
   */
  onDisappearCompleted?: () => void;
  /**
   * 在点击内容之外的半透明区域或按返回键(Android only)时调用, 如设置此值 modal 将无效。
   */
  onCloseRequest?: <P extends OverlayViewProps, S extends OverlayViewState>(
    is: OverlayView<P, S>
  ) => void;
}

export interface OverlayViewState {
  overlayOpacity: Animated.Value;
}

export default class OverlayView<
  P extends OverlayViewProps,
  S extends OverlayViewState
> extends PureComponent<P, S> {
  static defaultProps = {
    modal: false,
    animated: false,
    overlayPointerEvents: 'auto',
    autoKeyboardInsets: false,
    closeOnHardwareBackPress: true,
  };

  private panResponder: ReturnType<typeof PanResponder.create>;
  private backListener: ReturnType<typeof BackHandler.addEventListener> | null = null;

  private touchStateID?: number;
  private closed = false;

  constructor(props: P) {
    super(props);
    this.panResponder = PanResponder.create({
      // 要求成为响应者
      onStartShouldSetPanResponder: () => true,
      // 开始手势操作
      onPanResponderGrant: (_e, gestureState) => {
        this.touchStateID = gestureState.stateID;
      },
      // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
      // 一般来说这意味着一个手势操作已经成功完成。
      onPanResponderRelease: (_, gestureState) =>
        this.touchStateID === gestureState.stateID ? this.closeRequest() : null,
    });
    this.state = {
      overlayOpacity: new Animated.Value(0),
    } as Readonly<S>;
  }

  componentDidMount(): void {
    this.appearAfterMount && this.appear();
    if (Platform.OS === 'android') {
      this.backListener = BackHandler.addEventListener('hardwareBackPress', () => {
        if (this.props.closeOnHardwareBackPress) {
          this.closeRequest();
          return true;
        }
        return false;
      });
    }
  }

  componentWillUnmount(): void {
    this.removeBackListener();
  }

  get overlayOpacity(): number {
    const { overlayOpacity } = this.props;
    return overlayOpacity || overlayOpacity === 0 ? overlayOpacity : defaultOverlayOpacity;
  }

  get appearAnimates(): Animated.CompositeAnimation[] {
    const duration = 200;
    const animates = [
      Animated.timing(this.state.overlayOpacity, {
        toValue: this.overlayOpacity,
        duration,
        useNativeDriver: false,
      }),
    ];
    return animates;
  }

  get disappearAnimates(): Animated.CompositeAnimation[] {
    const duration = 200;
    const animates = [
      Animated.timing(this.state.overlayOpacity, {
        toValue: 0,
        duration,
        useNativeDriver: false,
      }),
    ];
    return animates;
  }

  get appearAfterMount(): boolean {
    return true;
  }

  get overlayPointerEvents(): OverlayViewProps['overlayPointerEvents'] {
    // override in Toast
    return this.props.overlayPointerEvents;
  }

  removeBackListener(): void {
    if (this.backListener) {
      this.backListener.remove();
      this.backListener = null;
    }
  }

  appear(animated = this.props.animated, additionAnimates = []): void {
    if (animated) {
      this.state.overlayOpacity.setValue(0);
      Animated.parallel(this.appearAnimates.concat(additionAnimates)).start(() =>
        this.appearCompleted()
      );
    } else {
      this.state.overlayOpacity.setValue(this.overlayOpacity);
      this.appearCompleted();
    }
  }

  disappear(animated = this.props.animated, additionAnimates = []): void {
    if (animated) {
      Animated.parallel(this.disappearAnimates.concat(additionAnimates)).start(() =>
        this.disappearCompleted()
      );
      this.state.overlayOpacity.addListener(e => {
        if (e.value < 0.01) {
          this.state.overlayOpacity.stopAnimation();
          this.state.overlayOpacity.removeAllListeners();
        }
      });
    } else {
      this.disappearCompleted();
    }
  }

  appearCompleted(): void {
    this.props.onAppearCompleted?.();
  }

  disappearCompleted(): void {
    this.props.onDisappearCompleted?.();
  }

  close(animated = this.props.animated): boolean {
    if (this.closed) return true;
    this.closed = true;
    this.removeBackListener();
    this.disappear(animated);
    return true;
  }

  closeRequest(): void {
    const { modal, onCloseRequest } = this.props;
    if (onCloseRequest) onCloseRequest(this);
    else if (!modal) this.close();
  }

  buildStyle(): any[] {
    const { style } = this.props;
    return [{ backgroundColor: 'rgba(0, 0, 0, 0)', flex: 1 }, style];
  }

  renderContent(): React.ReactNode {
    return this.props.children;
  }

  render(): React.ReactElement {
    const { autoKeyboardInsets } = this.props;

    return (
      <View style={styles.screen} pointerEvents={this.overlayPointerEvents}>
        <Animated.View
          style={[styles.screen, { backgroundColor: '#000', opacity: this.state.overlayOpacity }]}
          {...this.panResponder.panHandlers}
        />
        <View style={this.buildStyle()} pointerEvents="box-none">
          {this.renderContent()}
        </View>
        {autoKeyboardInsets ? <KeyboardSpace /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
