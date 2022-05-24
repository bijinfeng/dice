import React, { FC, useState } from 'react';
import { Cell, Popup, IconNames } from 'rn-vant';
import type { IconPosition } from 'rn-vant/lib/typescript/Popup/type';
import { View, ScrollView, Dimensions } from 'react-native';
import { DemoBlock } from '../../components';

const screenHeight: number = Dimensions.get('screen').height;

type Position = 'top' | 'bottom' | 'left' | 'right' | 'center';
type Params = {
  side?: Position;
  close?: boolean;
  iconName?: IconNames;
  iconPosition?: IconPosition;
  isRound?: boolean;
};

const PopupDemo: FC = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<Position>();
  const [closeable, setCloseable] = useState<boolean>(false);
  const [closeIcon, setCloseIcon] = useState<IconNames>();
  const [closeIconPosition, setCloseIconPosition] = useState<IconPosition>();
  const [round, setRound] = useState<boolean>(false);

  const onPress = ({
    side = 'bottom',
    close = false,
    iconName,
    iconPosition,
    isRound = false,
  }: Params) => {
    setPosition(side);
    setCloseable(close);
    setCloseIcon(iconName);
    setCloseIconPosition(iconPosition);
    setRound(isRound);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    setCloseable(false);
    setCloseIcon(undefined);
    setCloseIconPosition(undefined);
  };

  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Cell.Group inset>
          <Cell title="展示弹出层" isLink onPress={() => onPress({ side: 'center' })} />
        </Cell.Group>
      </DemoBlock>

      <DemoBlock title="弹出位置">
        <Cell.Group inset>
          <Cell title="顶部弹出" isLink onPress={() => onPress({ side: 'top' })} />
          <Cell title="底部弹出" isLink onPress={() => onPress({ side: 'bottom' })} />
          <Cell title="左侧弹出" isLink onPress={() => onPress({ side: 'left' })} />
          <Cell title="右侧弹出" isLink onPress={() => onPress({ side: 'right' })} />
        </Cell.Group>
      </DemoBlock>

      <DemoBlock title="关闭图标">
        <Cell.Group inset>
          <Cell title="关闭图标" isLink onPress={() => onPress({ close: true })} />
          <Cell
            title="自定义图标"
            isLink
            onPress={() => onPress({ close: true, iconName: 'close' })}
          />
          <Cell
            title="图标位置"
            isLink
            onPress={() => onPress({ close: true, iconPosition: 'top-left' })}
          />
        </Cell.Group>
      </DemoBlock>

      <DemoBlock title="圆角弹窗">
        <Cell.Group inset>
          <Cell title="圆角弹窗" isLink onPress={() => onPress({ isRound: true })} />
        </Cell.Group>
      </DemoBlock>

      <Popup
        visible={visible}
        position={position}
        closeable={closeable}
        onClose={onClose}
        closeIcon={closeIcon}
        closeIconPosition={closeIconPosition}
        round={round}
      >
        <View style={{ height: 0.3 * screenHeight, width: 0.3 * screenHeight }} />
      </Popup>
    </ScrollView>
  );
};

export default PopupDemo;
