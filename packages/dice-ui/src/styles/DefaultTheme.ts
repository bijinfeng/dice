import color from 'color';
import { black, white, pinkA400 } from './colors';
import configureFonts from './fonts';

const text = '#191919';

const DefaultTheme: DiceUI.Theme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: '#e5343e', // 主题色
    accent: '#03dac4', // 辅助颜色
    background: '#ffffff', // 背景颜色，例如列表
    surface: white, // 包含内容的元素的背景颜色，例如卡片。
    error: '#B00020',
    text: text, // 内容的文本颜色。
    gray1: color(black).alpha(0.12).rgb().string(), // gray-1
    textSecondary: '#878787', // 文本的次要颜色
    content: text, // 正文的文本颜色
    contentBackground: '#f6f6f6', // 正文的背景颜色
    onSurface: '#000000', // snackbars的背景颜色
    disabled: color(black).alpha(0.26).rgb().string(), // 禁用元素的背景颜色
    placeholder: color(black).alpha(0.54).rgb().string(),
    backdrop: color(black).alpha(0.5).rgb().string(), // modal 组件的背景颜色
    popupBackground: '#fff', // popup 组件的背景颜色
    popupText: text, // popup 组件内文本和按钮的颜色
    notification: pinkA400,

    black: '#000',
    white: '#fff',
    gray2: '#f2f3f5',
    gray3: '#ebedf0',
    gray4: '#dcdee0',
    gray5: '#c8c9cc',
    gray6: '#969799',
    gray7: '#646566',
    gray8: '#323233',
    red: '#ee0a24',
    blue: '#1989fa',
    orange: '#ff976a',
    orangeDark: '#ed6a0c',
    orangeLight: '#fffbe8',
    green: '#07c160',

    primaryColor: '#1989fa',
    successColor: '#07c160',
    dangerColor: '#ee0a24',
    warningColor: '#ff976a',
    textColor: '#323233',
    activeColor: '#f2f3f5',
    activeOpacity: 0.7,
    disabledOpacity: 0.5,
    backgroundColor: '#f7f8fa',
    backgroundColorLight: '#fafafa',
    textLinkColor: '#576b95',
  },
  fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
  border: {
    color: '#ebedf0',
    widthBase: 1,
    radiusSm: 2,
    radiusMd: 4,
    radiusLg: 8,
    radiusMax: 999,
  },
  padding: {
    base: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
  },
  font: {
    fontSizeXs: 10,
    fontSizeSm: 12,
    fontSizeMd: 14,
    fontSizeLg: 16,
    fontWeightBold: '500',
    lineHeightXs: 14,
    lineHeightSm: 18,
    lineHeightMd: 20,
    lineHeightLg: 22,
  },
};

export default DefaultTheme;
