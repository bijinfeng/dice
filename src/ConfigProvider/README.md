---
title: ConfigProvider 全局配置
desc: 用于全局配置组件，提供深色模式、主题定制等能力。
demo: /config-provider

nav:
  path: /

group:
  title: 基础组件
---

## 引入

ConfigProvider 使用 React 的 context 特性，只需在应用外围包裹一次即可全局生效。

```jsx
import { ConfigProvider } from 'react-vant';

export default () => (
  <ConfigProvider>
    <App />
  </ConfigProvider>
);
```
