import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Link } from '@react-navigation/native';
import { Icon, Theme } from 'dice-ui';
import { routes } from '../navigation/routes';

const Home = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://img01.yzcdn.cn/vant/logo.png' }} style={styles.logo} />
        <Theme.Text style={styles.title}>Dice</Theme.Text>
      </View>
      <View>
        {routes.map(item => (
          <Link style={styles.item} key={item.href} to={{ screen: item.href, params: {} }}>
            <Text style={styles.text}>{item.name}</Text>
            <Icon name="arrow" size={16} />
          </Link>
        ))}
      </View>
    </View>
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
    backgroundColor: '#f7f8fa',
    borderRadius: 99,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingLeft: 20,
    paddingRight: 16,
  },
  logo: {
    height: 32,
    width: 32,
  },
  text: {
    color: '#323233',
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
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 46,
  },
});

export default Home;
