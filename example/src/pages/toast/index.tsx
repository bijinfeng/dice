import React, { FC } from 'react';
import { Cell, Toast } from 'rn-vant';
import { ScrollView } from 'react-native';
import { DemoBlock } from '../../components';

const ToastDemo: FC = () => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Cell.Group inset>
          <Cell title="文字提示" isLink onPress={() => Toast('提示内容')} />
          <Cell title="加载提示" isLink onPress={() => Toast.loading('加载中...')} />
          <Cell title="成功提示" isLink onPress={() => Toast.success('成功文案')} />
          <Cell title="失败提示" isLink onPress={() => Toast.fail('失败文案')} />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="自定义图标">
        <Cell.Group inset>
          <Cell
            title="自定义图标"
            isLink
            onPress={() =>
              Toast({
                message: '自定义图标',
                icon: 'like-o',
              })
            }
          />
          <Cell
            title="自定义加载图标"
            isLink
            onPress={() =>
              Toast.loading({
                message: '加载中...',
                loadingType: 'spinner',
              })
            }
          />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="自定义位置">
        <Cell.Group inset>
          <Cell
            title="顶部展示"
            isLink
            onPress={() =>
              Toast({
                message: '提示内容',
                position: 'top',
              })
            }
          />
          <Cell
            title="底部展示"
            isLink
            onPress={() =>
              Toast({
                message: '提示内容',
                position: 'bottom',
              })
            }
          />
        </Cell.Group>
      </DemoBlock>
    </ScrollView>
  );
};

export default ToastDemo;
