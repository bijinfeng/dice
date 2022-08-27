import React, { useContext } from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Icon } from 'rn-vant';
import { getRouteGroup, RouteItem } from '../navigation/routes';
import { postMessage } from '../utils';
import { GlobalContext } from '../GlobalContext';
import { DemoBlock } from '../components';

const routeGroup = getRouteGroup();

const Home = () => {
  const { themeVars, isInIframe } = useContext(GlobalContext);
  const linkTo = useNavigate();

  const onLinkPress = (item: RouteItem) => {
    console.log('navigate', item.href);
    !isInIframe && linkTo(item.href);
    postMessage('navigate', item.href);
  };

  return (
    <View style={{ paddingTop: 46, paddingBottom: 20, paddingHorizontal: 20 }}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://img01.yzcdn.cn/vant/logo.png' }} style={styles.logo} />
        <Text style={[styles.title, { color: themeVars.text_color_2 }]}>RN Vant</Text>
      </View>
      {routeGroup.map(it => (
        <DemoBlock title={it.name} key={it.name}>
          {it.list.map(item => (
            <Pressable
              style={[styles.item, { backgroundColor: themeVars.background_3 }]}
              key={item.href}
              onPress={() => onLinkPress(item)}
            >
              <Text style={[styles.text, { color: themeVars.text_color_3 }]}>{item.name}</Text>
              <Icon name="arrow" size={16} color="#B6C3D2" />
            </Pressable>
          ))}
        </DemoBlock>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 16,
  },
  item: {
    alignItems: 'center',
    borderRadius: 99,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: 40,
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingLeft: 20,
    paddingRight: 16,
    width: '100%',
  },
  logo: {
    height: 32,
    width: 32,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 40,
  },
  title: {
    fontSize: 32,
    marginLeft: 16,
  },
});

export default Home;
