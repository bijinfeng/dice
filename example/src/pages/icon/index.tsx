import React, { FC, useContext } from 'react';
import Icon from '@rn-vant/icons';
import { Tabs, Layout } from 'rn-vant';
import { View, ScrollView, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { basicArray, list, list1 } from './icons';
import { DemoBlock } from '../../components';
import { GlobalContext } from '../../GlobalContext';

const IconExample: FC = () => {
  const { themeVars } = useContext(GlobalContext);

  const containerStyle: StyleProp<ViewStyle> = [
    styles.container,
    { backgroundColor: themeVars.background_2 },
  ];

  return (
    <ScrollView>
      <Tabs>
        <Tabs.TabPane title="用法示例">
          <View style={containerStyle}>
            <DemoBlock title="基础用法" style={{ width: '100%' }}>
              <Layout.Row>
                <Layout.Col span={6} style={styles.col}>
                  <Icon name="chat-o" size={32} />
                </Layout.Col>
              </Layout.Row>
            </DemoBlock>
            <DemoBlock title="图标颜色" style={{ width: '100%' }}>
              <Layout.Row>
                <Layout.Col span={6} style={styles.col}>
                  <Icon name="cart-o" color="#1989fa" size={32} />
                </Layout.Col>
                <Layout.Col span={6} style={styles.col}>
                  <Icon name="fire-o" color="#ee0a24" size={32} />
                </Layout.Col>
              </Layout.Row>
            </DemoBlock>
            <DemoBlock title="图标大小" style={{ width: '100%' }}>
              <Layout.Row>
                <Layout.Col span={6} style={styles.col}>
                  <Icon name="chat-o" size={40} />
                </Layout.Col>
                <Layout.Col span={6} style={styles.col}>
                  <Icon name="chat-o" size={48} />
                </Layout.Col>
              </Layout.Row>
            </DemoBlock>
          </View>
        </Tabs.TabPane>
        <Tabs.TabPane title="基础图标">
          <View style={containerStyle}>
            {basicArray.map(it => (
              <View style={styles.iconItem} key={it}>
                <Icon name={it} size={32} style={styles.icon} />
                <Text style={styles.text}>{it}</Text>
              </View>
            ))}
          </View>
        </Tabs.TabPane>
        <Tabs.TabPane title="线框风格">
          <View style={containerStyle}>
            {list1.map(it => (
              <View style={styles.iconItem} key={it}>
                <Icon name={it} size={32} style={styles.icon} />
                <Text style={styles.text}>{it}</Text>
              </View>
            ))}
          </View>
        </Tabs.TabPane>
        <Tabs.TabPane title="实底风格">
          <View style={containerStyle}>
            {list.map(it => (
              <View style={styles.iconItem} key={it}>
                <Icon name={it} size={32} style={styles.icon} />
                <Text style={styles.text}>{it}</Text>
              </View>
            ))}
          </View>
        </Tabs.TabPane>
      </Tabs>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  col: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  container: {
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 20,
  },
  icon: {
    marginVertical: 16,
  },
  iconItem: {
    alignItems: 'center',
    width: '25%',
  },
  text: {
    fontSize: 12,
    height: 36,
    paddingHorizontal: 5,
    textAlign: 'center',
  },
});

export default IconExample;
