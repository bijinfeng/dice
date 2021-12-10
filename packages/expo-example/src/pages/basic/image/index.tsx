import React, { memo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Image } from 'dice-ui';
import { DemoBlock } from '../../../components';

const ImageExample = memo(() => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法" inset>
        <Image
          source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
          onPress={() => {
            console.log('??');
          }}
        />
      </DemoBlock>
    </ScrollView>
  );
});

export default ImageExample;
