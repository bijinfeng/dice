import type React from "react";
import type { StyleProp, ViewStyle } from "react-native";
import type { PopupProps } from "../Popup/type";

export interface TextNodeProps {
  children: string | React.ReactElement;
  style?: StyleProp<ViewStyle>;
}

export interface ActionSheetAction {
  // 标题
  name: string;
  // 二级标题
  subname?: string;
  // 选项文字颜色
  color?: string;
  // 为对应列添加额外的 style
  style?: StyleProp<ViewStyle>;
  // 是否为加载状态
  loading?: boolean;
  // 是否为禁用状态
  disabled?: boolean;
  // 点击时触发的回调函数
  callback?: (action: ActionSheetAction) => void;
}

export interface ActionSheetProps extends PopupProps {
  // 面板选项列表
  actions?: ActionSheetAction[];
  // 顶部标题
  title?: string | React.ReactElement;
  // 取消按钮文字
  cancelText?: string | React.ReactElement;
  // 选项上方的描述信息
  description?: string | React.ReactElement;
  // 点击选项时触发，禁用或加载状态下不会触发
  onSelect?: (action: ActionSheetAction, index: number) => void;
  // 点击取消按钮时触发
  onCancel?: () => void;
}
