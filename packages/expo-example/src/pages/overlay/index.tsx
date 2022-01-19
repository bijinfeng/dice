import React, { memo, useState } from 'react';
import { Button, Overlay } from 'dice-ui';
import { View } from 'react-native';
import { DemoBlock } from '../../components';

const OverlayExample = memo(() => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  return (
    <View>
      <DemoBlock title="基础用法" contentStyle={{ flexDirection: 'row', marginLeft: 16 }}>
        <Button type="primary" onPress={() => setVisible1(true)}>
          显示遮罩层
        </Button>
        <Overlay visible={visible1} onBackdropPress={() => setVisible1(false)} />
      </DemoBlock>
      <DemoBlock title="嵌入内容" contentStyle={{ flexDirection: 'row', marginLeft: 16 }}>
        <Button type="primary" onPress={() => setVisible(true)}>
          嵌入内容
        </Button>
        <Overlay visible={visible} onBackdropPress={() => setVisible(false)}>
          <View style={{ width: 120, height: 120, backgroundColor: '#fff', borderRadius: 4 }} />
        </Overlay>
      </DemoBlock>
    </View>
  );
});

export default OverlayExample;
