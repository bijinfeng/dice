import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { Cell } from '@pingtou/rn-vant';
import { DemoBlock } from '../../components';
import CalendarSingle from './CalendarSingle';

const CalendarExample = memo(() => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Cell.Group>
          <CalendarSingle />
        </Cell.Group>
      </DemoBlock>
    </ScrollView>
  );
});

export default CalendarExample;
