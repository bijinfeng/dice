import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { Dialog, Cell, Toast } from '@pingtou/rn-vant';
import { DemoBlock } from '../../components';

const DialogExample = memo(() => {
  const showDialog = () => {
    Dialog.alert({
      title: '标题',
      message: '代码是写出来给人看的，附带能在机器上运行。',
    }).then(() => {
      // on close
    });
  };

  const showNoTitleDialog = () => {
    Dialog.alert({
      message: '生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。',
    }).then(() => {
      // on close
    });
  };

  const showConfirm = () => {
    Dialog.confirm({
      title: '标题',
      message: '如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。',
    })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
  };

  const showAsyncConfirm = () => {
    Dialog.show({
      title: '标题',
      message: '弹窗内容',
      showCancelButton: true,
      onCancel: () => {
        return new Promise(res => {
          setTimeout(() => {
            res(true);
            Toast.success({ message: '取消按钮异步' });
          }, 3000);
        });
      },
      onConfirm: () => {
        return new Promise(res => {
          setTimeout(() => {
            res(true);
            Toast.success({ message: '确认按钮异步' });
          }, 3000);
        });
      },
    });
  };

  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Cell.Group inset>
          <Cell title="提示弹窗" isLink onPress={showDialog} />
          <Cell title="提示弹窗（无标题）" isLink onPress={showNoTitleDialog} />
          <Cell title="确认弹窗" isLink onPress={showConfirm} />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="圆角按钮样式">
        <Cell.Group inset>
          <Cell
            title="提示弹窗"
            isLink
            onPress={() => {
              Dialog.alert({
                title: '标题',
                message: '代码是写出来给人看的，附带能在机器上运行。',
                theme: 'round-button',
              });
            }}
          />
          <Cell
            title="提示弹窗（无标题）"
            isLink
            onPress={() => {
              Dialog.alert({
                message: '生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。',
                theme: 'round-button',
              });
            }}
          />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="异步关闭">
        <Cell.Group inset>
          <Cell title="异步关闭" isLink onPress={showAsyncConfirm} />
        </Cell.Group>
      </DemoBlock>
    </ScrollView>
  );
});

export default DialogExample;
