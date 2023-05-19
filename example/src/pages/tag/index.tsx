/* eslint-disable prettier/prettier */
import React, { memo, useState } from 'react';
import { ScrollView } from 'react-native';
import { Tag, Cell } from '@pingtou/rn-vant';
import { DemoBlock } from '../../components';

const TagExample = memo(() => {
  const [show, setShow] = useState(true);

  return (
    <ScrollView>
      <DemoBlock title="基础用法" inset>
        <Cell.Group>
          <Cell center title="primary 类型" value={<Tag type="primary">标签</Tag>} />
          <Cell center title="success 类型" value={<Tag type="success">标签</Tag>} />
          <Cell center title="danger 类型" value={<Tag type="danger">标签</Tag>} />
          <Cell center title="warning 类型" value={<Tag type="warning">标签</Tag>} />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="样式风格" inset>
        <Cell.Group>
          <Cell center title="空心样式" value={<Tag plain type="primary">标签</Tag>} />
          <Cell center title="圆角样式" value={<Tag round type="primary">标签</Tag>} />
          <Cell center title="标记样式" value={<Tag mark type="primary">标签</Tag>} />
          <Cell center title="可关闭标签" value={<Tag closeable show={show} onClose={() => setShow(false)} type="primary">标签</Tag>} />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="标签大小" inset>
        <Cell.Group>
          <Cell center title="小号标签" value={<Tag type="primary">标签</Tag>} />
          <Cell center title="中号标签" value={<Tag size="medium" type="primary">标签</Tag>} />
          <Cell center title="大号标签" value={<Tag size="large" type="primary">标签</Tag>} />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="自定义颜色" inset>
        <Cell.Group>
          <Cell center title="背景颜色" value={<Tag color="#7232dd">标签</Tag>} />
          <Cell center title="文字颜色" value={<Tag color="#ffe1e1" textColor="#ad0000">标签</Tag>} />
          <Cell center title="空心颜色" value={<Tag color="#7232dd" plain>标签</Tag>} />
        </Cell.Group>
      </DemoBlock>
    </ScrollView>
  );
});

export default TagExample;
