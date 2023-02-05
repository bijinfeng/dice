---
title: Slider 滑块
desc: 滑动输入条，用于在给定的范围内选择一个值。
demo: /slider

nav:
  path: /

group:
  title: 表单组件
---

## 代码演示

### 基础用法

```jsx
export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(`当前值：${v}`);
  return <Slider value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};
```

### 双滑块

添加 `range` 属性就可以开启双滑块模式，确保 `value` 的值是一个数组。

```jsx
export default () => {
  const [value, setValue] = useState([10, 50]);
  const onChangeAfter = (v) => Toast.message(`当前值：${v}`);
  return <Slider range value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};
```

### 指定选择范围

```jsx
<Slider value={value} onChange={setValue} min={-50} max={50} />
```

### 禁用

```jsx
<Slider disabled value={value} />
```

### 指定步长

```jsx
<Slider value={value} step={10} />
```

### 自定义样式

```jsx
<Slider value={value} onChange={setValue} barHeight={4} activeColor="#ee0a24" />
```

### 自定义按钮

```jsx
<Slider
  value={value6}
  onChange={setValue6}
  activeColor="#ee0a24"
  button={
    <View style={styles.customButton}>
      <Text style={styles.customText}>{value6}</Text>
    </View>
  }
/>

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: '#ee0a24',
    borderRadius: 100,
    overflow: 'hidden',
  },
  customText: {
    color: '#fff',
    fontSize: 10,
    lineHeight: 18,
    textAlign: 'center',
    width: 26,
  },
});
```

### 垂直方向

设置 `vertical` 属性后，滑块会垂直展示，且高度为 100% 父元素高度。

```jsx
<Slider vertical value={value} onChange={setValue} />
```
