import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Cell, ImagePreview } from 'rn-vant';
import { DemoBlock } from '../../components';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

const ImagePreviewExample = () => {
  const [visible1, setVisible1] = useState(false);

  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Cell
          title="预览图片"
          isLink
          onPress={() => {
            ImagePreview.open({
              images,
              onChange: index => console.log(`当前展示第${index + 1}张`),
            });
          }}
        />
      </DemoBlock>
      <DemoBlock title="组件调用">
        <Cell title="组件调用" isLink onPress={() => setVisible1(true)} />
        <ImagePreview
          visible={visible1}
          onClose={() => setVisible1(false)}
          images={images}
          showIndicators
        />
      </DemoBlock>
    </ScrollView>
  );
};

export default ImagePreviewExample;
