import React, { useContext } from 'react';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from '@react-navigation/native';
import { Icon } from 'rn-vant';
import { routes, RouteItem } from '../navigation/routes';
import { postMessage } from '../utils';
import { GlobalContext } from '../GlobalContext';

const Home = () => {
  const { themeVars } = useContext(GlobalContext);

  const onLinkPress = (item: RouteItem) => {
    postMessage('navigate', item.href);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.header}>
          <Image source={{ uri: 'https://img01.yzcdn.cn/vant/logo.png' }} style={styles.logo} />
          <Text style={[styles.title, { color: themeVars.text_color_2 }]}>React Native Vant</Text>
        </View>
        <View>
          {routes.map(item => (
            <Link
              style={styles.link}
              key={item.href}
              to={{ screen: item.href, params: {} }}
              onPress={() => onLinkPress(item)}
            >
              <View style={[styles.item, { backgroundColor: themeVars.background_3 }]}>
                <Text style={[styles.text, { color: themeVars.text_color_3 }]}>{item.name}</Text>
                <Icon name="arrow" size={16} color="#B6C3D2" />
              </View>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 40,
  },
  item: {
    alignItems: 'center',
    borderRadius: 99,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 16,
    width: '100%',
  },
  link: {
    height: 40,
    marginBottom: 12,
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
    lineHeight: 32,
    marginLeft: 16,
  },
  wrapper: {
    flex: 1,
  },
});

export default Home;
