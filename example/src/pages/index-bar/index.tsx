import React from 'react';
import { IndexBar, Tabs, Cell } from 'rn-vant';

const indexList: string[] = [];
const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const charCodeOfA = 'A'.charCodeAt(0);

for (let i = 0; i < 26; i += 1) {
  indexList.push(String.fromCharCode(charCodeOfA + i));
}

const IndexBarExample = () => {
  return (
    <Tabs>
      <Tabs.TabPane title="基础用法" style={{ height: 700 }}>
        <IndexBar>
          {indexList.map(item => (
            <React.Fragment key={item}>
              <IndexBar.Anchor index={item} />
              <Cell.Group border={false}>
                <Cell title="文本" />
                <Cell title="文本" />
                <Cell title="文本" />
              </Cell.Group>
            </React.Fragment>
          ))}
        </IndexBar>
      </Tabs.TabPane>
      <Tabs.TabPane title="自定义索引列表" style={{ height: 700 }}>
        <IndexBar indexList={customIndexList}>
          {customIndexList.map(item => (
            <React.Fragment key={item}>
              <IndexBar.Anchor index={item}>标题 {item}</IndexBar.Anchor>
              <Cell.Group border={false}>
                <Cell title="文本" />
                <Cell title="文本" />
                <Cell title="文本" />
              </Cell.Group>
            </React.Fragment>
          ))}
        </IndexBar>
      </Tabs.TabPane>
    </Tabs>
  );
};

export default IndexBarExample;
