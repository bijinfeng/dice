/**
 * title: 按钮类型
 * description: |
 *  按钮支持 `default`、`primary`、`success`、`warning`、`danger` 五种类型，默认为 `default`。
 */
import React from "react";
import { Button } from "rn-vant";

const App: React.FC = () => {
  return (
    <>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </>
  );
};

export default App;
