import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { Cell, Stepper, Toast } from '@pingtou/rn-vant';

let timer: ReturnType<typeof setTimeout>;

const StepperExample = memo(() => {
  return (
    <ScrollView>
      <Cell.Group inset style={{ paddingVertical: 15 }}>
        <Cell title="基础用法" center>
          <Stepper min={0} defaultValue={1} />
        </Cell>
        <Cell title="设置最小值" center>
          <Stepper min={0} defaultValue={0} />
        </Cell>
        <Cell title="步长设置" center>
          <Stepper step={2} defaultValue={1} />
        </Cell>
        <Cell title="设置输入范围" center>
          <Stepper step={2} min={5} max={8} defaultValue={1} />
        </Cell>
        <Cell title="禁用状态" center>
          <Stepper value={1} disabled />
        </Cell>
        <Cell title="禁用输入框" center>
          <Stepper defaultValue={1} disableInput />
        </Cell>
        <Cell title="固定小数位数" center>
          <Stepper defaultValue={1} step={0.2} decimalLength={1} />
        </Cell>
        <Cell title="自定义大小" center>
          <Stepper defaultValue={1} inputWidth={40} buttonSize={32} />
        </Cell>
        <Cell title="异步变更" center>
          <Stepper
            beforeChange={() => {
              Toast.loading({ forbidClick: true });
              clearTimeout(timer);

              return new Promise(resolve => {
                timer = setTimeout(() => {
                  Toast.clear();
                  resolve(true);
                }, 500);
              });
            }}
          />
        </Cell>
        <Cell title="圆角风格" center>
          <Stepper defaultValue={1} theme="round" buttonSize={22} disableInput />
        </Cell>
      </Cell.Group>
    </ScrollView>
  );
});

export default StepperExample;
