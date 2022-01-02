import React, { FC, useState } from 'react';
import { Progress, Button } from 'dice-ui';
import { View, ScrollView, Text } from 'react-native';
import { DemoBlock } from '../../components';

const format = (rate: number) => Math.min(Math.max(rate, 0), 100);

const progressStyle = { marginVertical: 16 };

const ProgressDemo: FC = () => {
  const [percentage, setPercentage] = useState(50);

  const add = () => {
    setPercentage(value => format(value + 20));
  };

  const reduce = () => {
    setPercentage(value => format(value - 20));
  };

  return (
    <ScrollView>
      <DemoBlock title="基础用法" inset>
        <Progress percentage="50" style={progressStyle} />
      </DemoBlock>
      <DemoBlock title="线条粗细" inset>
        <Progress strokeWidth={8} percentage="50" style={progressStyle} />
      </DemoBlock>
      <DemoBlock title="置灰" inset>
        <Progress inactive percentage="50" style={progressStyle} />
      </DemoBlock>
      <DemoBlock title="样式定制" inset>
        <Progress color="#f2826a" percentage="25" pivotText="橙色" style={progressStyle} />
        <Progress color="#ee0a24" percentage="50" pivotText="红色" style={progressStyle} />
        <Progress
          color="#7232dd"
          percentage="75"
          pivotText={<Text>紫色</Text>}
          style={progressStyle}
        />
      </DemoBlock>
      <DemoBlock title="过渡效果" inset>
        <Progress percentage={percentage} style={progressStyle} />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button style={{ marginRight: 10 }} type="primary" size="small" onPress={add}>
            增加
          </Button>
          <Button type="danger" size="small" onPress={reduce}>
            减少
          </Button>
        </View>
      </DemoBlock>
    </ScrollView>
  );
};

export default ProgressDemo;
