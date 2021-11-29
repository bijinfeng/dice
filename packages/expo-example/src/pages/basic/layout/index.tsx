import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout, List, Theme } from 'dice-ui';

type Props = { isEven?: boolean };

const TextContainer: FC<Props> = ({ children, isEven }) => (
  <View style={[styles.colContent, { backgroundColor: isEven ? '#66c6f2' : '#39a9ed' }]}>
    <Theme.Text>{children}</Theme.Text>
  </View>
);

const LayoutExample: FC = () => {
  return (
    <View>
      <List.Section>
        <List.Subheader>基础用法</List.Subheader>
        <Layout.Row style={styles.item}>
          <Layout.Col span={8}>
            <TextContainer>span: 8</TextContainer>
          </Layout.Col>
          <Layout.Col span={8}>
            <TextContainer isEven>span: 8</TextContainer>
          </Layout.Col>
          <Layout.Col span={8}>
            <TextContainer>span: 8</TextContainer>
          </Layout.Col>
        </Layout.Row>
      </List.Section>
      <List.Section>
        <List.Subheader>在列元素之间增加间距</List.Subheader>
        <Layout.Row gutter={20} style={styles.item}>
          <Layout.Col span={8}>
            <TextContainer>span: 8</TextContainer>
          </Layout.Col>
          <Layout.Col span={8}>
            <TextContainer isEven>span: 8</TextContainer>
          </Layout.Col>
          <Layout.Col span={8}>
            <TextContainer>span: 8</TextContainer>
          </Layout.Col>
        </Layout.Row>
      </List.Section>
      <List.Section>
        <List.Subheader>对齐方式</List.Subheader>
        <Layout.Row justify="center" style={styles.item}>
          <Layout.Col span={6}>
            <TextContainer>span: 6</TextContainer>
          </Layout.Col>
          <Layout.Col span={6}>
            <TextContainer isEven>span: 6</TextContainer>
          </Layout.Col>
          <Layout.Col span={6}>
            <TextContainer>span: 6</TextContainer>
          </Layout.Col>
        </Layout.Row>

        <Layout.Row justify="end" style={styles.item}>
          <Layout.Col span={6}>
            <TextContainer>span: 6</TextContainer>
          </Layout.Col>
          <Layout.Col span={6}>
            <TextContainer isEven>span: 6</TextContainer>
          </Layout.Col>
          <Layout.Col span={6}>
            <TextContainer>span: 6</TextContainer>
          </Layout.Col>
        </Layout.Row>

        <Layout.Row justify="space-between" style={styles.item}>
          <Layout.Col span={6}>
            <TextContainer>span: 6</TextContainer>
          </Layout.Col>
          <Layout.Col span={6}>
            <TextContainer isEven>span: 6</TextContainer>
          </Layout.Col>
          <Layout.Col span={6}>
            <TextContainer>span: 6</TextContainer>
          </Layout.Col>
        </Layout.Row>

        <Layout.Row justify="space-around" style={styles.item}>
          <Layout.Col span={6}>
            <TextContainer>span: 6</TextContainer>
          </Layout.Col>
          <Layout.Col span={6}>
            <TextContainer isEven>span: 6</TextContainer>
          </Layout.Col>
          <Layout.Col span={6}>
            <TextContainer>span: 6</TextContainer>
          </Layout.Col>
        </Layout.Row>
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  colContent: {
    alignItems: 'center',
    display: 'flex',
    height: 30,
    justifyContent: 'center',
    width: '100%',
  },
  item: {
    marginTop: 10,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default LayoutExample;
