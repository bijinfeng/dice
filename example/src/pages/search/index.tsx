import React, { memo, useState } from 'react';
import { ScrollView } from 'react-native';
import { Search, Toast } from '@pingtou/rn-vant';
import { DemoBlock } from '../../components';

const SearchExample = memo(() => {
  const [value, setValue] = useState('');

  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Search placeholder="请输入搜索关键词" />
      </DemoBlock>
      <DemoBlock title="事件监听">
        <Search
          value={value}
          onChange={setValue}
          placeholder="请输入搜索关键词"
          showAction
          onSearch={val => {
            Toast(val);
            setValue(val);
          }}
          onCancel={() => {
            Toast('取消');
            setValue('');
          }}
          onClear={() => {
            Toast('清除');
            setValue('');
          }}
          onClickInput={() => {
            Toast('点击输入区域时触发	');
          }}
        />
      </DemoBlock>
      <DemoBlock title="搜索框内容对齐">
        <Search align="center" placeholder="请输入搜索关键词" />
      </DemoBlock>
      <DemoBlock title="禁用搜索框">
        <Search disabled placeholder="请输入搜索关键词" />
      </DemoBlock>
      <DemoBlock title="自定义背景色">
        <Search shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
      </DemoBlock>
      <DemoBlock title="自定义按钮">
        <Search
          showAction
          label="地址"
          actionText="搜索"
          value={value}
          onChange={setValue}
          placeholder="请输入搜索关键词"
        />
      </DemoBlock>
    </ScrollView>
  );
});

export default SearchExample;
