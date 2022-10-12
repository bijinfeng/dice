import React, { useState } from 'react';
import { View } from 'react-native';
import { Cell, NumberKeyboard, Field, useSetState, Toast } from 'rn-vant';

const NumberKeyboardExample = () => {
  const [text, setText] = useState('');
  const [state, set] = useSetState({
    v1: true,
    v2: false,
    v3: false,
    v4: false,
    v5: false,
    v6: false,
    v7: false,
  });

  const onInput = (v: string) => Toast.info(`输入${v}`);
  const onDelete = () => Toast.info('删除');

  return (
    <View style={{ paddingTop: 12 }}>
      <Cell.Group inset>
        <Cell title="弹出默认键盘" isLink onPress={() => set({ v1: true })} />
        <Cell title="弹出带右侧栏的键盘" isLink onPress={() => set({ v2: true })} />
        <Cell title="弹出身份证号键盘" isLink onPress={() => set({ v3: true })} />
        <Cell title="弹出带标题的键盘" isLink onPress={() => set({ v4: true })} />
        <Cell title="弹出配置多个按键的键盘" isLink onPress={() => set({ v5: true })} />
        <Cell title="弹出配置随机数字的键盘" isLink onPress={() => set({ v6: true })} />
        <Field
          label="双向绑定"
          readOnly
          placeholder="请输入"
          value={text}
          onPress={() => set({ v7: true })}
        />
      </Cell.Group>
      {/* 弹出默认键盘 */}
      <NumberKeyboard
        visible={state.v1}
        onBlur={() => {
          set({ v1: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* 弹出带右侧栏的键盘 */}
      <NumberKeyboard
        theme="custom"
        extraKey="."
        closeButtonText="完成"
        visible={state.v2}
        onBlur={() => {
          set({ v2: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* 弹出身份证号键盘 */}
      <NumberKeyboard
        extraKey="X"
        closeButtonText="完成"
        visible={state.v3}
        onBlur={() => {
          set({ v3: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* 弹出带标题的键盘 */}
      <NumberKeyboard
        title="键盘标题"
        extraKey="."
        closeButtonText="完成"
        visible={state.v4}
        onBlur={() => {
          set({ v4: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* 弹出配置多个按键的键盘 */}
      <NumberKeyboard
        theme="custom"
        extraKey={['00', '.']}
        closeButtonText="完成"
        visible={state.v5}
        onBlur={() => {
          set({ v5: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* 弹出配置随机数字的键盘 */}
      <NumberKeyboard
        randomKeyOrder
        visible={state.v6}
        onBlur={() => {
          set({ v6: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      <NumberKeyboard
        value={text}
        visible={state.v7}
        maxlength={6}
        onChange={setText}
        onBlur={() => {
          set({ v7: false });
        }}
      />
    </View>
  );
};

export default NumberKeyboardExample;
