import React, { memo, useContext } from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import isFunction from 'lodash-es/isFunction';
import isEmpty from 'lodash-es/isEmpty';
import { TabsContext } from '../TabsContext';
import { useThemeFactory } from '../../Theme';
import Badge from '../../Badge';
import createStyle from './style';
import type { TabPaneProps, TabsProps } from '../type';

interface TabBarProps extends Pick<TabsProps, 'type'> {
  navs: TabPaneProps[];
}

const TabBar = (props: TabBarProps): JSX.Element => {
  const { navs, type = 'line' } = props;
  const { styles } = useThemeFactory(createStyle);
  const { selectedIndex, setCurrentIndex } = useContext(TabsContext);
  const isActive = false;

  console.log(selectedIndex);

  const renderText = (item: TabPaneProps) => {
    const text = (
      <Text style={styles.text}>{isFunction(item.title) ? item.title(isActive) : item.title}</Text>
    );

    if (item.dot || !isEmpty(item.badge)) {
      return (
        <Badge content={item.badge} dot={item.dot}>
          {text}
        </Badge>
      );
    }

    return text;
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.nav, type === 'line' ? styles.navLine : styles.navCard]}
    >
      {navs.map((item, idx) => (
        <Pressable key={item.key} style={styles.tab} onPress={() => setCurrentIndex(idx)}>
          {renderText(item)}
        </Pressable>
      ))}
      {type === 'line' && <View style={styles.line} />}
    </ScrollView>
  );
};

export default memo(TabBar);
