import color from 'color';
import { pinkA400 } from './colors';
import configureFonts from './fonts';

const text = '#191919';

const black = '#000';
const white = '#fff';
const gray1 = '#f7f8fa';
const gray2 = '#f2f3f5';
const gray3 = '#ebedf0';
const gray4 = '#dcdee0';
const gray5 = '#c8c9cc';
const gray6 = '#969799';
const gray7 = '#646566';
const gray8 = '#323233';
const red = '#ee0a24';
const blue = '#1989fa';
const orange = '#ff976a';
const orangeDark = '#ed6a0c';
const orangeLight = '#fffbe8';
const green = '#07c160';

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

    black,
    white,
    gray1,
    gray2,
    gray3,
    gray4,
    gray5,
    gray6,
    gray7,
    gray8,
    red,
    blue,
    orange,
    orangeDark,
    orangeLight,
    green,

    primaryColor: blue,
    successColor: green,
    dangerColor: red,
    warningColor: orange,
    textColor: gray8,
    textColor2: gray6,
    textColor3: gray5,
    activeColor: gray2,
    activeOpacity: 0.7,
    disabledOpacity: 0.5,
    backgroundColor: gray1,
    backgroundColorLight: white,
    textLinkColor: '#576b95',
  },
  fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
  border: {
    color: gray3,
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
