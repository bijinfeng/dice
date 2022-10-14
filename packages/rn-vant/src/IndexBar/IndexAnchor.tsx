import React, { useCallback } from 'react';
import { View, Text, LayoutChangeEvent } from 'react-native';
import type { IndexAnchorProps } from './types';
import { COMPONENT_TYPE_KEY } from '../utils/constants';
import { useThemeFactory } from '../Theme';
import { createAnchoreStyle } from './style';

export const INDEX_ANCHORE_KEY = Symbol('index-anchor');

const IndexAnchor: React.FC<IndexAnchorProps> = props => {
  const { children, index } = props;
  const { styles } = useThemeFactory(createAnchoreStyle);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    console.log(index, e.nativeEvent.layout);
  }, []);

  return (
    <View style={styles.anchore} onLayout={onLayout}>
      <Text style={styles.anchoreText}>{children || index}</Text>
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
IndexAnchor[COMPONENT_TYPE_KEY] = INDEX_ANCHORE_KEY;

export default IndexAnchor;
