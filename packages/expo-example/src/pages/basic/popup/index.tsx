import React, { FC } from 'react';
import { Cell, Popup, PopupProps } from 'dice-ui';
import { View } from 'react-native';
import { DemoBlock } from '../../../components';

type Side = 'top' | 'bottom' | 'left' | 'right';

const onPress1 = (side: Side = 'bottom', options?: Partial<PopupProps>) => {
  Popup.open(
    <View style={{ height: 300, width: 300 }}>
      <View />
    </View>,
    {
      ...options,
      side,
    }
  );
};

const PopupDemo: FC = () => {
  return (
    <View>
      <DemoBlock title="基础用法">
        <Cell.Group inset>
          <Cell title="展示弹出层" isLink onPress={onPress1} />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="弹出位置">
        <Cell.Group inset>
          <Cell title="顶部弹出" isLink onPress={() => onPress1('top')} />
          <Cell title="底部弹出" isLink onPress={() => onPress1('bottom')} />
          <Cell title="左侧弹出" isLink onPress={() => onPress1('left')} />
          <Cell title="右侧弹出" isLink onPress={() => onPress1('right')} />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="关闭图标">
        <Cell.Group inset>
          <Cell
            title="关闭图标"
            isLink
            onPress={() => onPress1('bottom', { closeable: true, modal: true })}
          />
          <Cell
            title="自定义图标"
            isLink
            onPress={() =>
              onPress1('bottom', { closeable: true, modal: true, closeIcon: 'close', round: true })
            }
          />
          <Cell
            title="图标位置"
            isLink
            onPress={() =>
              onPress1('bottom', {
                closeable: true,
                closeIcon: 'close',
                closeIconPosition: 'top-left',
              })
            }
          />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="圆角弹窗">
        <Cell.Group inset>
          <Cell title="圆角弹窗" isLink onPress={() => onPress1('bottom', { round: true })} />
        </Cell.Group>
      </DemoBlock>
    </View>
  );
};

export default PopupDemo;
