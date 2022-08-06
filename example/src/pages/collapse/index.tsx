import React, { FC } from 'react';
import { Collapse } from 'rn-vant';
import { ScrollView, Text } from 'react-native';
import { QuestionO } from '@rn-vant/icons';
import { DemoBlock } from '../../components';

const CollapseDemo: FC = () => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Collapse initExpanded={['1']}>
          <Collapse.Item title="标题1" name="1">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
          <Collapse.Item title="标题2" name="2">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
          <Collapse.Item title="标题3" name="3">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
        </Collapse>
      </DemoBlock>
      <DemoBlock title="手风琴">
        <Collapse initExpanded="1" accordion>
          <Collapse.Item icon={<QuestionO />} title={<Text>自定义标题</Text>} name="1">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
          <Collapse.Item title="标题2" name="2">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
          <Collapse.Item title="标题3" name="3">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
        </Collapse>
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Collapse>
          <Collapse.Item title="标题1" name="1">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
          <Collapse.Item title="标题2" name="2" disabled>
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
          <Collapse.Item title="标题3" name="3" disabled>
            代码是写出来给人看的，附带能在机器上运行
          </Collapse.Item>
        </Collapse>
      </DemoBlock>
    </ScrollView>
  );
};

export default CollapseDemo;
