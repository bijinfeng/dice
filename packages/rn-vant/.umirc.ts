import { defineConfig, IConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production' && process.env.PREVIEW_PR !== 'true';

export default defineConfig({
  exportStatic: isProd ? {} : false,
  title: 'React Native Vant',
  mode: 'site',
  algolia: {
    appId: 'TM4VZTMTDL',
    apiKey: 'c0a3916beb89f5500d092ab4e19143b6',
    indexName: 'docsearch',
  },
  favicon: 'https://img01.yzcdn.cn/vant/logo.png',
  logo: 'https://img01.yzcdn.cn/vant/logo.png',
  themeConfig: {
    demoUrl: isDev ? 'http://localhost:19006' : 'https://bijinfeng.github.io/rn-vant/example',
  },
  navs: [
    null,
    {
      logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
      path: 'https://github.com/bijinfeng/rn-vant',
    },
  ],
  resolve: {
    passivePreview: true,
  },
  hash: isProd,
  base: isProd ? '/rn-vant/' : '/',
  publicPath: isProd ? 'https://cdn.jsdelivr.net/gh/bijinfeng/rn-vant@gh-pages/' : '/',
  sitemap: {
    hostname: 'https://bijinfeng.github.io/rn-vant/',
  }
  // more config: https://d.umijs.org/config
} as IConfig);
