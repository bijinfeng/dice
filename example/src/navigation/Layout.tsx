import React, { FC, useContext, useMemo } from 'react';
import { View, Pressable, StyleSheet, Text, ScrollView } from 'react-native';
import { Outlet, useNavigate, useLocation } from 'react-router-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowLeft } from '@rn-vant/icons';
import { GlobalContext } from '../GlobalContext';
import { routes } from './routes';

const Layout: FC = () => {
  const insets = useSafeAreaInsets();
  const linkTo = useNavigate();
  const location = useLocation();
  const { themeVars, isDarkMode } = useContext(GlobalContext);

  const isHome = location.pathname === '/';
  const title = useMemo(
    () => routes.find(it => it.href === location.pathname)?.name,
    [location.pathname]
  );

  return (
    <ScrollView
      style={[
        styles.layout,
        isHome && { paddingTop: insets.top },
        {
          paddingBottom: insets.bottom,
          backgroundColor: isDarkMode ? themeVars.black : themeVars.gray_1,
        },
      ]}
    >
      {!isHome && (
        <View>
          {!isHome && (
            <View style={{ height: insets.top, backgroundColor: themeVars.background_3 }} />
          )}
          <View style={[styles.header, { backgroundColor: themeVars.background_3 }]}>
            <Pressable style={styles.back} onPress={() => linkTo('/')}>
              <ArrowLeft size={24} color="#969799" />
            </Pressable>
            <Text style={[styles.title, { color: themeVars.text_color_2 }]}>{title}</Text>
          </View>
        </View>
      )}
      <View style={styles.content}>
        <Outlet />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  back: {
    left: 16,
    position: 'absolute',
    top: 16,
  },
  content: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    height: 56,
    justifyContent: 'center',
    position: 'relative',
  },
  layout: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
});

export default Layout;
