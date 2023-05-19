import React, { memo, useState } from 'react';
import Icon from '@pingtou/rn-vant-icons';
import { Notify, Cell } from '@pingtou/rn-vant';
import { ScrollView, Text } from 'react-native';
import { DemoBlock } from '../../components';

const NotifyExample = memo(() => {
  const [show, setShow] = useState(false);

  const showNotify = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Cell.Group inset>
          <Cell title="基础用法" isLink onPress={() => Notify.show('通知内容')} />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="通知类型">
        <Cell.Group inset>
          <Cell
            title="主要通知"
            isLink
            onPress={() => Notify.show({ type: 'primary', message: '通知内容' })}
          />
          <Cell
            title="成功通知"
            isLink
            onPress={() => Notify.show({ type: 'success', message: '通知内容' })}
          />
          <Cell
            title="危险通知"
            isLink
            onPress={() => Notify.show({ type: 'danger', message: '通知内容' })}
          />
          <Cell
            title="警告通知"
            isLink
            onPress={() => Notify.show({ type: 'warning', message: '通知内容' })}
          />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="自定义通知">
        <Cell.Group inset>
          <Cell
            title="自定义颜色"
            isLink
            onPress={() =>
              Notify.show({ color: '#ad0000', background: '#ffe1e1', message: '自定义颜色' })
            }
          />
          <Cell
            title="自定义时长"
            isLink
            onPress={() => Notify.show({ message: '自定义时长', duration: 1000 })}
          />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="组件调用">
        <Cell.Group inset>
          <Cell title="组件调用" isLink onPress={showNotify}>
            <Notify type="success" visible={show}>
              <Icon name="bell" style={{ marginRight: 4 }} color="white" size={14} />
              <Text>通知内容</Text>
            </Notify>
          </Cell>
        </Cell.Group>
      </DemoBlock>
    </ScrollView>
  );
});

export default NotifyExample;
