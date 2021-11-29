import React, { memo } from 'react';
import { Button, Overlay } from 'dice-ui';
import { View } from 'react-native';
import { DemoBlock } from '../../../components';

const OverlayExample = memo(() => {
  const onPress1 = () => {
    Overlay.show(<Overlay.View />);
  };

  const onPress2 = () => {
    Overlay.show(
      <Overlay.View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 120, height: 120, backgroundColor: '#fff', borderRadius: 4 }} />
      </Overlay.View>
    );
  };

  return (
    <View>
      <DemoBlock title="基础用法" contentStyle={{ flexDirection: 'row', marginLeft: 16 }}>
        <Button type="primary" onPress={onPress1}>
          显示遮罩层
        </Button>
      </DemoBlock>
      <DemoBlock title="嵌入内容" contentStyle={{ flexDirection: 'row', marginLeft: 16 }}>
        <Button type="primary" onPress={onPress2}>
          嵌入内容
        </Button>
      </DemoBlock>
    </View>
  );
});

export default OverlayExample;
