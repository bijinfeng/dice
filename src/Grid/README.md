---
title: Grid 宫格
desc: 宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。
demo: /grid

nav:
  path: /

group:
  title: 导航组件
---

## 代码演示

### 基础用法

通过 `icon` 属性设置格子内的图标，`text` 属性设置文字内容。

```html
<Grid>
  <Grid.Item icon="{<PhotoO" />} text="文字" /> <Grid.Item icon="{<PhotoO" />} text="文字" />
  <Grid.Item icon="{<PhotoO" />} text="文字" /> <Grid.Item icon="{<PhotoO" />} text="文字" />
</Grid>
```

### 自定义列数

默认一行展示四个格子，可以通过 `columnNum` 自定义列数。

```jsx
<Grid columnNum={3}>
  {Array.from({ length: 6 }, (_, i) => (
    <Grid.Item key={i} icon={<PhotoO />} text="文字" />
  ))}
</Grid>
```

### 自定义内容

通过插槽可以自定义格子展示的内容。

```html
<Grid border="{false}" columnNum="{3}">
  <Grid.Item> <Image source={{ uri: 'https://img.yzcdn.cn/vant/apple-1.jpg' }} /> </Grid.Item>
  <Grid.Item> <Image source={{ uri: 'https://img.yzcdn.cn/vant/apple-2.jpg' }} /> </Grid.Item>
  <Grid.Item> <Image source={{ uri: 'https://img.yzcdn.cn/vant/apple-3.jpg' }} /> </Grid.Item>
</Grid>
```

### 正方形格子

设置 `square` 属性后，格子的高度会和宽度保持一致。

```jsx
<Grid square>
  {Array.from({ length: 8 }, (_, i) => (
    <Grid.Item key={i} icon={<PhotoO />} text="文字" />
  ))}
</Grid>
```

### 格子间距

通过 `gutter` 属性设置格子之间的距离。

```jsx
<Grid gutter={10}>
  {Array.from({ length: 8 }, (_, i) => (
    <Grid.Item key={i} icon={<PhotoO />} text="文字" />
  ))}
</Grid>
```

### 内容横排

将 `direction` 属性设置为 `horizontal`，可以让宫格的内容呈横向排列。

```html
<Grid direction="horizontal" columnNum="{3}">
  <Grid.Item icon="{<PhotoO" />} text="文字" /> <Grid.Item icon="{<PhotoO" />} text="文字" />
  <Grid.Item icon="{<PhotoO" />} text="文字" />
</Grid>
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点。设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```html
<Grid columnNum="{2}">
  <Grid.Item icon="{<HomeO" />} text="文字" badge={{ dot: true }} /> <Grid.Item icon="{<Search" />}
  text="文字" badge={{ content: '99+' }} />
</Grid>
```

## API

### Grid Props

| 参数      | 说明                                      | 类型        | 默认值  |
| --------- | ----------------------------------------- | ----------- | ------- |
| columnNum | 列数                                      | _number_    | `4`     |
| iconSize  | 图标大小                                  | _number_    | `28px`  |
| gutter    | 格子之间的间距                            | _number_    | `0`     |
| border    | 是否显示边框                              | _boolean_   | `true`  |
| center    | 是否将格子内容居中显示                    | _boolean_   | `true`  |
| square    | 是否将格子固定为正方形                    | _boolean_   | `false` |
| direction | 格子内容排列的方向，可选值为 `horizontal` | `vertical`  |
| reverse   | 是否调换图标和文本的位置                  | _boolean_   | `false` |
| style     | style                                     | _ViewStyle_ | -       |

### GridItem Props

| 参数         | 说明                                                              | 类型              | 默认值 |
| ------------ | ----------------------------------------------------------------- | ----------------- | ------ |
| text         | 文字                                                              | _string_          | -      |
| icon         | 图标                                                              | _React.ReactNode_ | -      |
| iconColor    | 图标颜色，等同于 Icon 组件的 [color 属性](/components/icon#props) | _string_          | -      |
| badge        | 图标右上角徽标的内容                                              | _BadgeProps_      | -      |
| style        | style                                                             | _ViewStyle_       | -      |
| contentStyle | 内容 style                                                        | _ViewStyle_       | -      |
