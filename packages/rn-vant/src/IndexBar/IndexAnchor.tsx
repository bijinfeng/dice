import React from 'react';
import { View } from 'react-native';
import type { IndexAnchorProps } from './types';
import { COMPONENT_TYPE_KEY } from '../utils/constants';

export const INDEX_ANCHORE_KEY = Symbol('index-anchor');

const IndexAnchor: React.FC<IndexAnchorProps> = props => {
  const { children } = props;

  return <View>{children}</View>;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
IndexAnchor[COMPONENT_TYPE_KEY] = INDEX_ANCHORE_KEY;

export default IndexAnchor;
