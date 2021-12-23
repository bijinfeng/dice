import { defineConfig, IConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production' && process.env.PREVIEW_PR !== 'true';

export default defineConfig({
  exportStatic: isProd ? {} : false,
  title: 'Dice UI',
  mode: 'site',
  locales: [
    ['zh', '中文'],
    ['en', 'English'],
  ],
  favicon: 'https://img01.yzcdn.cn/vant/logo.png',
  logo: 'https://img01.yzcdn.cn/vant/logo.png',
  themeConfig: {
    repository: {
      url: 'https://github.com/bijinfeng/dice',
      branch: 'master',
      platform: 'github',
    },
    qrcode: 'tuyaSmart--addVirtualDev?productId=mvhcrizelobov3dw&token=release_common_component',
    apiData: 'https://cdn.jsdelivr.net/npm/tuya-panel-kit-props-data/props.json',
    demoUrl: isDev ? 'http://localhost:19006' : 'https://bijinfeng.github.io/dice/example',
    demoInfoUrl:
      'https://github.com/tuya/tuya-panel-kit/blob/master/example/tuya-panel-kit/src/pages{demo}/index.tsx',
    typeAssetsUrl:
      'https://cdn.jsdelivr.net/gh/tuya/tuya-panel-kit-docs@gh-pages/types-assets.json',
  },
  navs: [
    null,
    {
      logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
      path: 'https://github.com/bijinfeng/dice',
    },
  ],
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: true,
  },
  hash: isProd,
  base: isProd ? '/dice/' : '/',
  publicPath: isProd ? 'https://cdn.jsdelivr.net/gh/bijinfeng/dice@gh-pages/' : '/',
  // more config: https://d.umijs.org/config
} as IConfig);
