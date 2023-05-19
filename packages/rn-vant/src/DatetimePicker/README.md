---
title: DatePicker 日期选择
desc: 日期选择器，用于选择年、月、日，通常与弹出层组件配合使用。
demo: /datetime-picker

nav:
  path: /

group:
  title: 表单组件
---

## 代码演示

### 选择年月日

DatetimePicker 通过 type 属性来定义需要选择的时间类型，type 为 `date` 表示选择年月日。通过 minDate 和 maxDate 属性可以确定可选的时间范围。

```jsx
<DatetimePicker
  title="选择年月日"
  type="date"
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
  style={cardStyle}
/>
```

### 选择年月

将 type 设置为 `year-month` 即可选择年份和月份。通过传入 `formatter` 函数，可以对选项文字进行格式化处理。

```jsx
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
```

### 选择月日

将 type 设置为 `month-day` 即可选择月份和日期。

```jsx
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
```

### 选择时间

将 type 设置为 `time` 即可选择时间（小时和分钟）。

```jsx
<DatetimePicker title="选择时间" type="time" minHour="10" maxHour="20" style={cardStyle} />
```

### 选择完整时间

将 type 设置为 `datetime` 即可选择完整时间，包括年月日和小时、分钟。

```jsx
<DatetimePicker
  type="datetime"
  title="选择完整时间"
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
  style={cardStyle}
/>
```

### 选择年月日小时

将 type 设置为 `datehour` 即可选择日期和小时，包括年月日和小时。

```jsx
<DatetimePicker
  type="datehour"
  title="选择年月日小时"
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
  style={cardStyle}
/>
```

### 选项过滤器

通过传入 `filter` 函数，可以对选项数组进行过滤，实现自定义时间间隔。

```jsx
<DatetimePicker
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
```

### 自定义列排序

```jsx
<DatetimePicker
  type="date"
  columnsOrder={['month', 'day', 'year']}
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
/>
```

### 搭配弹出层使用

```tsx
import React, { useState } from 'react';
import { DatetimePicker, Field, Popup } from '@pingtou/rn-vant';

export default () => {
  const [fieldValue, setFieldValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  return (
    <>
      <Field
        readonly
        clickable
        label="日期"
        value={fieldValue}
        placeholder="选择选择日期"
        onPress={() => setShowPicker(true)}
      />
      <Popup
        round
        title="请选择日期"
        closeable
        visible={showPicker}
        position="bottom"
        onClose={() => setShowPicker(false)}
      >
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
    </>
  );
};
```

## API

### Props

| 参数              | 说明                                                                        | 类型                                           | 默认值     |
| ----------------- | --------------------------------------------------------------------------- | ---------------------------------------------- | ---------- |
| type              | 时间类型，可选值为 `date` `time` <br> `year-month` `month-day` `datehour`   | _string_                                       | `datetime` |
| title             | 顶部栏标题                                                                  | _ReactNode_                                    | `''`       |
| confirmButtonText | 确认按钮文字                                                                | _ReactNode_                                    | `确认`     |
| cancelButtonText  | 取消按钮文字                                                                | _string_                                       | `取消`     |
| showToolbar       | 是否显示顶部栏                                                              | _boolean_                                      | `true`     |
| loading           | 是否显示加载状态                                                            | _boolean_                                      | `false`    |
| readonly          | 是否为只读状态，只读状态下无法切换选项                                      | _boolean_                                      | `false`    |
| filter            | 选项过滤函数                                                                | _(type: string, values: string[]) => string[]_ | -          |
| formatter         | 选项格式化函数                                                              | _(type: string, value: string) => string_      | -          |
| columnsOrder      | 自定义列排序数组, 子项可选值为<br> `year`、`month`、`day`、`hour`、`minute` | _string[]_                                     | -          |
| itemHeight        | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px`                         | _number \| string_                             | `44`       |
| visibleItemCount  | 可见的选项个数                                                              | _number \| string_                             | `6`        |
| swipeDuration     | 快速滑动时惯性滚动的时长，单位`ms`                                          | _number \| string_                             | `1000`     |
| columnsTop        | 自定义选项上方内容                                                          | _ReactNode_                                    | -          |
| columnsBottom     | 自定义选项下方内容                                                          | _ReactNode_                                    | -          |
| optionRender      | 自定义选项内容                                                              | _(option: string \| object) => ReactNode_      | -          |

### DatePicker Props

当时间选择器类型为 date 或 datetime 时，支持以下 props:

| 参数    | 说明                       | 类型   | 默认值 |
| ------- | -------------------------- | ------ | ------ |
| minDate | 可选的最小时间，精确到分钟 | _Date_ | 十年前 |
| maxDate | 可选的最大时间，精确到分钟 | _Date_ | 十年后 |

### TimePicker Props

当时间选择器类型为 time 时，支持以下 props:

| 参数      | 说明           | 类型               | 默认值 |
| --------- | -------------- | ------------------ | ------ |
| minHour   | 可选的最小小时 | _number \| string_ | `0`    |
| maxHour   | 可选的最大小时 | _number \| string_ | `23`   |
| minMinute | 可选的最小分钟 | _number \| string_ | `0`    |
| maxMinute | 可选的最大分钟 | _number \| string_ | `59`   |

### Events

| 事件名    | 说明                     | 回调参数              |
| --------- | ------------------------ | --------------------- |
| onChange  | 当值变化时触发的事件     | value: 当前选中的时间 |
| onConfirm | 点击完成按钮时触发的事件 | value: 当前选中的时间 |
| onCancel  | 点击取消按钮时触发的事件 | -                     |
|           |
