import React, { useCallback, useImperativeHandle, useRef, useContext, useMemo } from 'react';
import { View, Text, UIManager, findNodeHandle, ViewStyle } from 'react-native';
import type { IndexAnchorProps, IndexAnchorInstance, LayoutRectangle } from './types';
import { COMPONENT_TYPE_KEY } from '../utils/constants';
import { useThemeFactory } from '../Theme';
import { useSetState } from '../hooks';
import { Portal } from '../Portal';
import IndexBarContext from './IndexBarContext';
import { createAnchoreStyle } from './style';

export const INDEX_ANCHORE_KEY = Symbol('index-anchor');

const IndexAnchor = React.forwardRef<IndexAnchorInstance, IndexAnchorProps>((props, ref) => {
  const { children, index, ...rest } = props;
  const { styles } = useThemeFactory(createAnchoreStyle);
  const context = useContext(IndexBarContext);
  const viewRef = useRef<View>(null);
  const [state, updateState] = useSetState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    active: false,
  });

  const isSticky = useCallback(
    () => state.active && context.sticky,
    [state.active, context.sticky]
  );

  // 获取 Anchor 的宽高和绝对位置
  const getRect = useCallback(() => {
    return new Promise<LayoutRectangle>(resolve => {
      UIManager.measure(findNodeHandle(viewRef.current)!, (x, y, width, height, pageX, pageY) => {
        resolve({ x, y, width, height, pageX, pageY });
      });
    });
  }, []);

  useImperativeHandle(ref, () => ({
    state,
    updateState,
    getRect,
  }));

  const sticky = isSticky();

  const anchorStyle = useMemo<ViewStyle>(() => {
    if (!sticky) return {};

    return {
      position: 'absolute',
      left: state.left,
      top: state.top,
      width: state.width,
      height: state.height,
    };
  }, [state, sticky]);

  const renderContent = () => (
    <View style={[styles.anchore, anchorStyle, sticky && styles.sticky]}>
      <Text style={[styles.anchoreText, sticky && styles.stickyText]}>{children || index}</Text>
    </View>
  );

  return (
    <View {...rest} ref={viewRef} style={[rest.style, sticky && { height: state.height }]}>
      {sticky ? <Portal>{renderContent()}</Portal> : renderContent()}
    </View>
  );
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
IndexAnchor[COMPONENT_TYPE_KEY] = INDEX_ANCHORE_KEY;

export default IndexAnchor;
