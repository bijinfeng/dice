import React, { forwardRef, useImperativeHandle } from 'react';
import { View, Text } from 'react-native';

import Icon, { IconNames } from '../Icon';
import { useSetState } from '../hooks';
import { useThemeFactory } from '../Theme';
import { isString } from '../utils/typeof';
import { createStyle } from './style';
import type { NoticeBarInstance, NoticeBarProps } from './interface';

const NoticeBar = forwardRef<NoticeBarInstance, NoticeBarProps>((props, ref) => {
  const { text, style, wrapable, scrollable, speed = 60, delay = 1000 } = props;
  const [state, setState] = useSetState({
    show: true,
    offset: 0,
    duration: 0,
  });

  const { styles } = useThemeFactory(createStyle);

  const renderLeftIcon = () => {
    if (typeof props.leftIcon !== 'string' && React.isValidElement(props.leftIcon)) {
      return props.leftIcon;
    }
    if (props.leftIcon) {
      return <Icon style={styles.leftIcon} name={props.leftIcon as IconNames} />;
    }
    return null;
  };

  const getRightIconName = (): IconNames | undefined => {
    if (props.mode === 'closeable') {
      return 'cross';
    }
    if (props.mode === 'link') {
      return 'arrow';
    }

    return undefined;
  };

  const onPressRightIcon = () => {
    if (props.mode === 'closeable') {
      setState({ show: false });
      if (props.onClose) {
        props.onClose();
      }
    }
  };

  //  右侧图标
  const renderRightIcon = () => {
    if (props.rightIcon) {
      return props.rightIcon;
    }
    const name = getRightIconName();
    if (name) {
      return <Icon name={name} style={styles.rightIcon} onPress={onPressRightIcon} />;
    }
    return null;
  };

  //  文字部分
  const renderMarquee = () => {
    const ellipsis = scrollable === false && !props.wrapable;
    const children = props.children || text;

    return (
      <View style={styles.wrap}>
        <View style={styles.content}>
          {isString(children) ? <Text>{children}</Text> : children}
        </View>
      </View>
    );
  };

  const reset = () => {};

  useImperativeHandle(ref, () => ({
    reset,
  }));

  if (!state.show) {
    return null;
  }

  return (
    <View style={[styles.wrapper, wrapable ? styles.wrapable : styles.noWrapable, style]}>
      {renderLeftIcon()}
      {renderMarquee()}
      {renderRightIcon()}
    </View>
  );
});

export default NoticeBar;
