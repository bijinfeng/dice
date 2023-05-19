import React, { memo } from 'react';
import { ScrollView, StyleSheet, View, Text, ImageResizeMode } from 'react-native';
import { Image, useTheme, Loading } from '@pingtou/rn-vant';
import { DemoBlock } from '../../components';

const resizeMode: ImageResizeMode[] = ['center', 'contain', 'cover', 'repeat', 'stretch'];

const imageSource = { uri: 'https://img.yzcdn.cn/vant/cat.jpeg' };
const errorImageSource = { uri: 'https://img.yzcdn.cn/vant/cat1.jpeg' };

const ImageExample = memo(() => {
  const theme = useTheme();

  return (
    <ScrollView>
      <DemoBlock title="基础用法" inset>
        <Image
          source={imageSource}
          onPress={() => {
            console.log('??');
          }}
        />
      </DemoBlock>
      <DemoBlock title="填充模式" inset>
        <View style={styles.container}>
          {resizeMode.map(it => (
            <View style={styles.block} key={it}>
              <Image source={imageSource} resizeMode={it} />
              <Text style={[styles.text, { color: theme.gray_7 }]}>{it}</Text>
            </View>
          ))}
        </View>
      </DemoBlock>
      <DemoBlock title="圆形图片" inset>
        <View style={styles.container}>
          {resizeMode.map(it => (
            <View style={styles.block} key={it}>
              <Image source={imageSource} resizeMode={it} round />
              <Text style={[styles.text, { color: theme.gray_7 }]}>{it}</Text>
            </View>
          ))}
        </View>
      </DemoBlock>
      <DemoBlock title="加载中提示" inset>
        <View style={styles.container}>
          <View style={styles.block}>
            <Image source={imageSource} />
            <Text style={[styles.text, { color: theme.gray_7 }]}>默认提示</Text>
          </View>
          <View style={styles.block}>
            <Image source={imageSource} loading={<Loading size={20} type="spinner" />} />
            <Text style={[styles.text, { color: theme.gray_7 }]}>自定义提示</Text>
          </View>
        </View>
      </DemoBlock>
      <DemoBlock title="加载失败提示" inset>
        <View style={styles.container}>
          <View style={styles.block}>
            <Image source={errorImageSource} />
            <Text style={[styles.text, { color: theme.gray_7 }]}>默认提示</Text>
          </View>
          <View style={styles.block}>
            <Image source={errorImageSource} alt="加载失败" />
            <Text style={[styles.text, { color: theme.gray_7 }]}>自定义提示</Text>
          </View>
        </View>
      </DemoBlock>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    marginTop: 5,
  },
});

export default ImageExample;
