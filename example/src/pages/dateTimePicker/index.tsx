import React, { FC, useState } from 'react';
import { DatetimePicker, Field, Popup } from '@pingtou/rn-vant';
import { ScrollView, ViewStyle } from 'react-native';
import { DemoBlock } from '../../components';

const cardStyle: ViewStyle = {
  borderRadius: 8,
  marginHorizontal: 12,
};

const PickerDemo: FC = () => {
  const [fieldValue, setFieldValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  return (
    <ScrollView>
      <DemoBlock title="选择年月日">
        <DatetimePicker
          title="选择年月日"
          type="date"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
          style={cardStyle}
        />
      </DemoBlock>
      <DemoBlock title="选择年月">
        <DatetimePicker
          type="year-month"
          title="选择年月"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
          style={cardStyle}
          formatter={(type: string, val: string) => {
            if (type === 'year') {
              return `${val}年`;
            }
            if (type === 'month') {
              return `${val}月`;
            }
            return val;
          }}
        />
      </DemoBlock>
      <DemoBlock title="选择月日">
        <DatetimePicker
          type="month-day"
          title="选择月日"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
          style={cardStyle}
          formatter={(type: string, val: string) => {
            if (type === 'month') {
              return `${val}月`;
            }
            if (type === 'day') {
              return `${val}日`;
            }
            return val;
          }}
        />
      </DemoBlock>
      <DemoBlock title="选择时间">
        <DatetimePicker title="选择时间" type="time" minHour="10" maxHour="20" style={cardStyle} />
      </DemoBlock>
      <DemoBlock title="选择完整时间">
        <DatetimePicker
          type="datetime"
          title="选择完整时间"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
          style={cardStyle}
        />
      </DemoBlock>
      <DemoBlock title="选择年月日小时">
        <DatetimePicker
          type="datehour"
          title="选择年月日小时"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
          style={cardStyle}
        />
      </DemoBlock>
      <DemoBlock title="选项过滤器">
        <DatetimePicker
          title="选项过滤器"
          type="time"
          minHour="10"
          maxHour="20"
          value="12:00"
          filter={(type, options) => {
            if (type === 'minute') {
              return options.filter(option => +option % 5 === 0);
            }
            return options;
          }}
        />
      </DemoBlock>
      <DemoBlock title="自定义列排序">
        <DatetimePicker
          title="自定义列排序"
          type="date"
          columnsOrder={['month', 'day', 'year']}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={new Date()}
        />
      </DemoBlock>
      <DemoBlock title="搭配弹出层使用">
        <Field
          readonly
          label="日期"
          value={fieldValue}
          placeholder="选择选择日期"
          onPress={() => setShowPicker(true)}
        />
        <Popup round visible={showPicker} position="bottom" onClose={() => setShowPicker(false)}>
          <DatetimePicker
            type="datetime"
            onConfirm={(value: string) => {
              setFieldValue(value);
              setShowPicker(false);
            }}
            filter={(type: string, options) => {
              if (type === 'minute') {
                return options.filter(option => +option % 5 === 0);
              }
              return options;
            }}
            minDate={new Date(2021, 0, 1)}
            maxDate={new Date(2021, 2, 1)}
            value={fieldValue}
          />
        </Popup>
      </DemoBlock>
    </ScrollView>
  );
};

export default PickerDemo;
