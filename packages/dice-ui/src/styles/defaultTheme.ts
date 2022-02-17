/* eslint-disable camelcase */
import { Dimensions } from 'react-native';
import type { TextStyle } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const dark = false;

export const black = '#000';
export const white = '#fff';
export const gray_1 = '#f7f8fa';
export const gray_2 = '#f2f3f5';
export const gray_3 = '#ebedf0';
export const gray_4 = '#dcdee0';
export const gray_5 = '#c8c9cc';
export const gray_6 = '#969799';
export const gray_7 = '#646566';
export const gray_8 = '#323233';
export const red = '#ee0a24';
export const blue = '#1989fa';
export const orange = '#ff976a';
export const orange_dark = '#ed6a0c';
export const orange_light = '#fffbe8';
export const green = '#07c160';
export const primary = blue;
export const success = green;
export const danger = red;
export const warning = orange;

// Component Colors
export const text_color = gray_8;
export const text_color_2 = gray_6;
export const text_color_3 = gray_5;
export const active_color = gray_2;
export const active_opacity = 0.7;
export const disabled_opacity = 0.5;
export const background_color = gray_1;
export const background_color_light = white;
export const text_link_color = '#576b95';

// Padding
export const padding_base = 4;
export const padding_xs = padding_base * 2;
export const padding_sm = padding_base * 3;
export const padding_md = padding_base * 4;
export const padding_lg = padding_base * 6;
export const padding_xl = padding_base * 8;

// Font
export const font_size_xs = 10;
export const font_size_sm = 12;
export const font_size_md = 14;
export const font_size_lg = 16;
export const font_weight_bold: TextStyle['fontWeight'] = 'bold';
export const line_height_xs = 14;
export const line_height_sm = 18;
export const line_height_md = 20;
export const line_height_lg = 22;
export const base_font_family = `-apple-system, BlinkMacSystemFont, 'Helvetica Neue',
Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB',
'Microsoft Yahei', sans-serif`;
export const price_integer_font_family = `Avenir-Heavy, PingFang SC, Helvetica Neue, Arial,
sans-serif`;

// Animation
export const animation_duration_base = 300;
export const animation_duration_fast = 200;

// Border
export const border_color = gray_3;
export const border_width_base = 1;
export const border_radius_sm = 2;
export const border_radius_md = 4;
export const border_radius_lg = 8;
export const border_radius_max = 999;

// Button
export const button_mini_height = 24;
export const button_mini_padding_horizontal = padding_base;
export const button_mini_font_size = font_size_xs;
export const button_small_height = 32;
export const button_small_padding_horizontal = padding_xs;
export const button_small_font_size = font_size_sm;
export const button_normal_padding_horizontal = 15;
export const button_normal_font_size = font_size_md;
export const button_large_height = 50;
export const button_default_height = 44;
export const button_default_font_size = font_size_lg;
export const button_default_color = text_color;
export const button_default_background_color = white;
export const button_default_border_color = border_color;
export const button_primary_color = white;
export const button_primary_background_color = primary;
export const button_primary_border_color = primary;
export const button_success_color = white;
export const button_success_background_color = green;
export const button_success_border_color = green;
export const button_danger_color = white;
export const button_danger_background_color = red;
export const button_danger_border_color = red;
export const button_warning_color = white;
export const button_warning_background_color = orange;
export const button_warning_border_color = orange;
export const button_border_width = border_width_base;
export const button_border_radius = border_radius_sm;
export const button_round_border_radius = border_radius_max;
export const button_plain_background_color = white;
export const button_disabled_opacity = disabled_opacity;

// Cell
export const cell_font_size = font_size_md;
export const cell_line_height = 24;
export const cell_padding_vertical = 10;
export const cell_padding_horizontal = padding_md;
export const cell_text_color = text_color;
export const cell_background_color = white;
export const cell_border_color = border_color;
export const cell_active_color = active_color;
export const cell_required_color = red;
export const cell_label_color = gray_6;
export const cell_label_font_size = font_size_sm;
export const cell_label_line_height = line_height_sm;
export const cell_label_margin_top = padding_base;
export const cell_value_color = gray_6;
export const cell_icon_size = 16;
export const cell_right_icon_color = gray_6;
export const cell_large_padding_vertical = padding_sm;
export const cell_large_title_font_size = font_size_lg;
export const cell_large_label_font_size = font_size_md;

// CellGroup
export const cell_group_background_color = white;
export const cell_group_title_color = gray_6;
export const cell_group_title_padding_horizontal = padding_md;
export const cell_group_title_padding_top = padding_md;
export const cell_group_title_padding_bottom = padding_xs;
export const cell_group_title_font_size = font_size_md;
export const cell_group_title_line_height = 16;

// Checkbox
export const checkbox_icon_border_color = gray_5;
export const checkbox_icon_size = 20;
export const checkbox_disabled_background_color = border_color;
export const checkbox_checked_icon_color = primary;
export const checkbox_label_color = text_color;
export const checkbox_label_margin = padding_xs;
export const checkbox_disabled_label_color = text_color_3;
export const checkbox_disabled_icon_color = gray_5;

// Radio
export const radio_icon_border_color = gray_5;
export const radio_icon_size = 20;
export const radio_disabled_background_color = border_color;
export const radio_checked_icon_color = primary;
export const radio_label_color = text_color;
export const radio_label_margin = padding_xs;
export const radio_disabled_label_color = text_color_3;
export const radio_disabled_icon_color = gray_5;

// Image
export const image_default_size = 100; // 图片默认尺寸
export const image_placeholder_text_color = gray_6;
export const image_placeholder_font_size = font_size_md;
export const image_placeholder_background_color = background_color;
export const image_loading_icon_size = 32;
export const image_loading_icon_color = gray_4;
export const image_error_icon_size = 32;
export const image_error_icon_color = gray_4;

// Switch
export const switch_size = 30;
export const switch_width_ratio = 2; // 原变量中使用了 em，这里改成对应的比例
export const switch_height_ratio = 1; // 原变量中使用了 em，这里改成对应的比例
export const switch_node_size_ratio = 1; // 原变量中使用了 em，这里改成对应的比例
export const switch_node_background_color = white;
export const switch_background_color = background_color_light;
export const switch_on_background_color = primary;
export const switch_transition_duration = animation_duration_base;
export const switch_disabled_opacity = disabled_opacity;
export const switch_border_width = border_width_base;
export const switch_border_color = 'rgba(0, 0, 0, 0.1)';

// Tag
export const tag_padding_horizontal = padding_base;
export const tag_text_color = white;
export const tag_font_size = font_size_sm;
export const tag_border_radius = 2;
export const tag_line_height = 16;
export const tag_medium_padding_vertical = 2;
export const tag_medium_padding_horizontal = 6;
export const tag_large_padding_vertical = padding_base;
export const tag_large_padding_horizontal = padding_xs;
export const tag_large_border_radius = border_radius_md;
export const tag_large_font_size = font_size_md;
export const tag_round_border_radius = border_radius_max;
export const tag_danger_color = red;
export const tag_primary_color = blue;
export const tag_success_color = green;
export const tag_warning_color = orange;
export const tag_default_color = gray_6;
export const tag_plain_background_color = white;

// Divider
export const divider_margin_vertical = padding_md;
export const divider_margin_horizontal = padding_md;
export const divider_text_color = text_color_2;
export const divider_font_size = font_size_md;
export const divider_line_height = 24;
export const divider_border_color = border_color;
export const divider_content_padding = padding_md;
export const divider_content_left_width = '10%';
export const divider_content_right_width = '10%';

// NavBar
export const nav_bar_height = 46;
export const nav_bar_background_color = white;
export const nav_bar_arrow_size = 16;
export const nav_bar_icon_color = primary;
export const nav_bar_text_color = primary;
export const nav_bar_title_font_size = font_size_lg;
export const nav_bar_title_text_color = text_color;
export const nav_bar_z_index = 1;

// NoticeBar
export const notice_bar_height = 40;
export const notice_bar_padding_horizontal = padding_md;
export const notice_bar_padding_vertical = 0;
export const notice_bar_wrapable_padding_horizontal = padding_md;
export const notice_bar_wrapable_padding_vertical = padding_xs;
export const notice_bar_text_color = orange_dark;
export const notice_bar_font_size = font_size_md;
export const notice_bar_line_height = 24;
export const notice_bar_background_color = orange_light;
export const notice_bar_icon_size = 16;
export const notice_bar_icon_min_width = 24;

// Rate
export const rate_icon_size = 20;
export const rate_icon_gutter = padding_base;
export const rate_icon_void_color = gray_5;
export const rate_icon_full_color = danger;
export const rate_icon_disabled_color = gray_5;

// Progress
export const progress_height = 4;
export const progress_color = primary;
export const progress_inactive_color = gray_5;
export const progress_background_color = gray_3;
export const progress_pivot_padding_horizontal = 5;
export const progress_pivot_padding_vertical = 0;
export const progress_pivot_text_color = white;
export const progress_pivot_font_size = font_size_xs;
export const progress_pivot_line_height = 1.6 * progress_pivot_font_size;

// Badge
export const badge_size = 16;
export const badge_color = white;
export const badge_padding_horizontal = 3;
export const badge_padding_vertical = 0;
export const badge_font_size = font_size_sm;
export const badge_font_weight = font_weight_bold;
export const badge_border_width = border_width_base;
export const badge_background_color = danger;
export const badge_dot_color = danger;
export const badge_dot_size = 8;

// Circle
export const circle_size = 100;
export const circle_color = primary;
export const circle_layer_color = white;
export const circle_text_color = text_color;
export const circle_text_font_weight = font_weight_bold;
export const circle_text_font_size = font_size_md;
export const circle_text_line_height = line_height_md;

// Slider
export const slider_active_background_color = primary;
export const slider_inactive_background_color = gray_3;
export const slider_disabled_opacity = disabled_opacity;
export const slider_bar_height = 2;
export const slider_button_width = 24;
export const slider_button_height = 24;
export const slider_button_background_color = white;

// Swiper
export const swiper_indicator_size = 6;
export const swiper_indicator_margin = padding_sm;
export const swiper_indicator_active_opacity = 1;
export const swiper_indicator_inactive_opacity = 0.3;
export const swiper_indicator_active_background_color = primary;
export const swiper_indicator_inactive_background_color = border_color;

// Overlay
export const overlay_background_color = 'rgba(0, 0, 0, 0.7)';

// Toast
export const toast_max_width = 0.7 * windowWidth;
export const toast_font_size = font_size_md;
export const toast_text_color = white;
export const toast_loading_icon_color = white;
export const toast_line_height = line_height_md;
export const toast_border_radius = border_radius_lg;
export const toast_background_color = 'rgba(0, 0, 0, 0.7)';
export const toast_icon_size = 36;
export const toast_text_min_width = 96;
export const toast_text_padding_vertical = padding_xs;
export const toast_text_padding_horizontal = padding_sm;
export const toast_default_padding = padding_md;
export const toast_default_width = 88;
export const toast_default_min_height = 88;
export const toast_position_top_distance = 0.2 * windowHeight;
export const toast_position_bottom_distance = 0.2 * windowHeight;

// Popup
export const popup_background_color = white;
export const popup_round_border_radius = 16;
export const popup_close_icon_size = 22;
export const popup_close_icon_color = gray_5;
export const popup_close_icon_active_color = gray_6;
export const popup_close_icon_margin = 16;
export const popup_title_font_size = font_size_lg;
export const popup_descrition_font_size = font_size_md;
export const popup_descrition_color = gray_6;

// Typography
export const typography_color = text_color;
export const typography_link_color = primary;
export const typography_font_size = font_size_md;
export const typography_line_height = line_height_md;
export const typography_primary_color = primary;
export const typography_danger_color = danger;
export const typography_success_color = success;
export const typography_warning_color = warning;
export const typography_secondary_color = gray_6;
export const typography_disabled_color = gray_5;
export const typography_light_color = white;
