import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { ActionBar, Icon } from 'dice-ui';
import { DemoBlock } from '../../components';

const ActionBarExample = memo(() => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <ActionBar>
          <ActionBar.Icon
            icon={<Icon name="chat-o" />}
            text="客服"
            onPress={() => console.log('chat click')}
          />
          <ActionBar.Icon
            icon={<Icon name="chat" />}
            text="购物车"
            onPress={() => console.log('cart click')}
          />
          <ActionBar.Icon
            icon={<Icon name="shop-o" />}
            text="店铺"
            onPress={() => console.log('shop click')}
          />
          <ActionBar.Button
            type="danger"
            text="立即购买"
            onPress={() => console.log('button click')}
          />
        </ActionBar>
      </DemoBlock>
      <DemoBlock title="徽标提示">
        <ActionBar>
          <ActionBar.Icon icon={<Icon name="chat-o" />} badge={{ dot: true }} text="客服" />
          <ActionBar.Icon icon={<Icon name="cart-o" />} badge={{ content: 5 }} text="购物车" />
          <ActionBar.Icon icon={<Icon name="shop-o" />} badge={{ content: 12 }} text="店铺" />
          <ActionBar.Button type="warning" text="加入购物车" />
          <ActionBar.Button type="danger" text="立即购买" />
        </ActionBar>
      </DemoBlock>
      <DemoBlock title="自定义图标颜色">
        <ActionBar>
          <ActionBar.Icon icon={<Icon name="chat-o" color="red" />} text="客服" />
          <ActionBar.Icon icon={<Icon name="cart-o" color="red" />} text="购物车" />
          <ActionBar.Icon icon={<Icon name="shop-o" color="red" />} text="店铺" />
          <ActionBar.Button type="warning" text="加入购物车" />
          <ActionBar.Button type="danger" text="立即购买" />
        </ActionBar>
      </DemoBlock>
      <DemoBlock title="自定义按钮颜色">
        <ActionBar>
          <ActionBar.Icon icon={<Icon name="chat-o" />} text="客服" />
          <ActionBar.Icon icon={<Icon name="cart-o" />} text="购物车" />
          <ActionBar.Button color="#be99ff" type="warning" text="加入购物车" />
          <ActionBar.Button color="#7232dd" type="danger" text="立即购买" />
        </ActionBar>
      </DemoBlock>
    </ScrollView>
  );
});

export default ActionBarExample;
