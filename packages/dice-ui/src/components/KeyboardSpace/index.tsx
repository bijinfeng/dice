// KeyboardSpace.js
// from https://github.com/Andr3wHur5t/react-native-keyboard-spacer

import React, { PureComponent } from 'react';
import { StyleSheet, Platform, View, Keyboard, KeyboardEvent, LayoutAnimation } from 'react-native';

type Props = {
  topInsets?: number;
};

type State = {
  keyboardHeight: number;
};

export default class KeyboardSpace extends PureComponent<Props, State> {
  static defaultProps = {
    topInsets: 0,
  };

  private showListener: ReturnType<typeof Keyboard.addListener> | null;
  private hideListener: ReturnType<typeof Keyboard.addListener> | null;

  constructor(props: Props) {
    super(props);
    this.showListener = null;
    this.hideListener = null;
    this.state = {
      keyboardHeight: 0,
    };
  }

  componentDidMount(): void {
    if (!this.showListener) {
      const name = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
      this.showListener = Keyboard.addListener(name, e => this.onKeyboardShow(e));
    }
    if (!this.hideListener) {
      const name = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
      this.hideListener = Keyboard.addListener(name, () => this.onKeyboardHide());
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (prevState.keyboardHeight !== this.state.keyboardHeight) {
      LayoutAnimation.configureNext({
        duration: 500,
        create: {
          duration: 300,
          type: LayoutAnimation.Types.easeInEaseOut,
          property: LayoutAnimation.Properties.opacity,
        },
        update: {
          type: LayoutAnimation.Types.spring,
          springDamping: 200,
        },
      });
    }
  }

  componentWillUnmount(): void {
    if (this.showListener) {
      this.showListener.remove();
      this.showListener = null;
    }
    if (this.hideListener) {
      this.hideListener.remove();
      this.hideListener = null;
    }
  }

  onKeyboardShow(e: KeyboardEvent): void {
    if (!e || !e.endCoordinates || !e.endCoordinates.height) return;
    const height = e.endCoordinates.height + (this.props.topInsets ? this.props.topInsets : 0);
    this.setState({ keyboardHeight: height });
  }

  onKeyboardHide(): void {
    this.setState({ keyboardHeight: 0 });
  }

  render(): React.ReactElement {
    return <View style={[styles.keyboardSpace, { height: this.state.keyboardHeight }]} />;
  }
}

const styles = StyleSheet.create({
  keyboardSpace: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
