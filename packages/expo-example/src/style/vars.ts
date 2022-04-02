export const common = {
  // colors
  black: '#000',
  white: '#fff',
  gray_1: '#f7f8fa',
  gray_2: '#f2f3f5',
  gray_3: '#ebedf0',
  gray_4: '#dcdee0',
  gray_5: '#c8c9cc',
  gray_6: '#969799',
  gray_7: '#646566',
  gray_8: '#323233',
  blue: '#1989fa',
  green: '#07c160',

  // sizes
  padding: 24,
  row_max_width: 1680,
  nav_width: 220,
  border_radius: 20,
  simulator_width: 360,
  simulator_height: 620,
  header_top_height: 64,
};

export const lightTheme = {
  ...common,

  // text
  text_color_1: common.black,
  text_color_2: common.gray_8,
  text_color_3: '#34495e',
  text_color_4: common.gray_6,
  link_color: common.blue,

  // background
  background: '#eff2f5',
  background_2: common.white,
  background_3: common.white,
  header_background: '#011f3c',
  border_color: common.gray_2,

  // code
  code_color: '#58727e',
  code_comment_color: common.gray_6,
  code_background: common.gray_1,

  // blockquote
  blockquote_color: '#4994df',
  blockquote_background: '#ecf9ff',
};

export const darkTheme = {
  ...common,

  // text
  text_color_1: common.white,
  text_color_2: 'rgba(255, 255, 255, 0.9)',
  text_color_3: 'rgba(255, 255, 255, 0.75)',
  text_color_4: 'rgba(255, 255, 255, 0.6)',
  link_color: '#1bb5fe',

  // background
  background: '#202124',
  background_2: 'rgba(255, 255, 255, 0.06)',
  background_3: 'rgba(255, 255, 255, 0.1)',
  header_background: 'rgba(1, 31, 60, 0.3)',
  border_color: '#3a3a3c',

  // code
  code_color: 'rgba(200, 200, 200, 0.85)',
  code_comment_color: common.gray_7,
  code_background: 'rgba(0, 0, 0, 0.24)',

  // blockquote
  blockquote_color: '#bae6fd',
  blockquote_background: 'rgba(7, 89, 133, 0.25)',
};
