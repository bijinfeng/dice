import React, { memo, useRef } from 'react';
import { ScrollView, View } from 'react-native';
import {
  SwipeCell,
  Button,
  Cell,
  Toast,
  Image,
  Typography,
  SwipeCellInstance,
} from '@pingtou/rn-vant';
import { Arrow, ArrowLeft, Cross } from '@pingtou/rn-vant-icons';
import { DemoBlock } from '../../components';

const SwipeCellExample = memo(() => {
  const ref = useRef<SwipeCellInstance>(null);

  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <SwipeCell
          leftAction={
            <Button square type="primary">
              选择
            </Button>
          }
          rightAction={
            <>
              <Button square type="danger">
                删除
              </Button>
              <Button square type="primary">
                收藏
              </Button>
            </>
          }
        >
          <Cell title="单元格" value="内容" />
        </SwipeCell>
      </DemoBlock>
      <DemoBlock title="事件监听">
        <SwipeCell
          onOpen={() => Toast.info('打开')}
          onClose={() => Toast.info('关闭')}
          rightAction={
            <Button style={{ height: '100%' }} square type="danger">
              删除
            </Button>
          }
        >
          <Cell title="单元格" value="内容" />
        </SwipeCell>
      </DemoBlock>
      <DemoBlock title="自定义内容">
        <SwipeCell
          rightAction={
            <Button style={{ height: '100%' }} square type="danger">
              删除
            </Button>
          }
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'stretch',
              paddingHorizontal: 16,
              paddingVertical: 10,
              backgroundColor: 'white',
            }}
          >
            <Image
              wrapperStyle={{ width: 88, height: 99, marginRight: 10 }}
              source={{ uri: 'https://img.yzcdn.cn/vant/ipad.jpeg' }}
            />
            <View style={{ justifyContent: 'space-between', flex: 1 }}>
              <View>
                <Typography.Title level={5}>商品标题</Typography.Title>
                <Typography.Text type="secondary">这里是商品描述</Typography.Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography.Text strong size="lg">
                  ¥2.00
                </Typography.Text>
                <Typography.Text size="sm" type="secondary">
                  x2
                </Typography.Text>
              </View>
            </View>
          </View>
        </SwipeCell>
      </DemoBlock>
      <DemoBlock title="外部调用">
        <SwipeCell
          ref={ref}
          leftAction={
            <Button square type="primary">
              选择
            </Button>
          }
          rightAction={
            <Button square type="danger">
              删除
            </Button>
          }
        >
          <Cell title="单元格" value="内容" />
        </SwipeCell>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button icon={<ArrowLeft />} onPress={() => ref.current?.open('left')}>
            左滑打开
          </Button>
          <Button icon={<Arrow />} onPress={() => ref.current?.open('right')}>
            右滑打开
          </Button>
          <Button icon={<Cross />} onPress={() => ref.current?.close()}>
            关闭
          </Button>
        </View>
      </DemoBlock>
    </ScrollView>
  );
});

export default SwipeCellExample;
