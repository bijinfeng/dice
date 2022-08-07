import React, { memo } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import Subscribe from './Subscribe';
import Type from './Type';
import Rules from './Rules';
import Base from './Base';
import List from './List';

const FormExample = memo(() => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Base />
        <Rules />
        <Type />
        <Subscribe />
        <List />
      </ScrollView>
    </SafeAreaView>
  );
});

export default FormExample;
