import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon, { IconNames, isIcon } from '../Icon';
import OverlayView, { OverlayViewProps, OverlayViewState } from '../Overlay/OverlayView';

export interface ToastViewProps extends OverlayViewProps {
  text?: string | number | React.ReactNode;
  icon?: IconNames | React.ReactNode;
  position?: 'top' | 'bottom' | 'center';
}

type State = OverlayViewState;

export default class ToastView extends OverlayView<ToastViewProps, State> {
  static defaultProps = {
    ...OverlayView.defaultProps,
    overlayOpacity: 0,
    overlayPointerEvents: 'none',
    closeOnHardwareBackPress: false,
    position: 'center',
  };

  buildStyle() {
    const { position } = this.props;

    return [
      {
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 100,
        paddingBottom: 80,
        justifyContent:
          position === 'top' ? 'flex-start' : position === 'bottom' ? 'flex-end' : 'center',
        alignItems: 'center',
      },
    ].concat(super.buildStyle());
  }

  renderIcon() {
    let { icon } = this.props;
    if (!icon) return null;

    if (!React.isValidElement(icon) && isIcon(icon)) {
      icon = <Icon name={icon} size={36} color="white" />;
    }

    return <View>{icon}</View>;
  }

  renderText() {
    const { text, icon } = this.props;
    if (typeof text === 'string' || typeof text === 'number') {
      return <Text style={[styles.text, icon ? { marginTop: 8 } : null]}>{text}</Text>;
    }
    return text;
  }

  renderContent() {
    const { icon } = this.props;

    return (
      <View style={[styles.wrapper, icon ? styles.wrapperHasIcon : styles.wrapperWithoutIcon]}>
        {this.renderIcon()}
        {this.renderText()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 8,
    justifyContent: 'center',
  },
  wrapperHasIcon: {
    minHeight: 120,
    padding: 16,
    width: 120,
  },
  wrapperWithoutIcon: {
    minWidth: 120,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
