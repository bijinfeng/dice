import type {
  GestureResponderEvent,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TextInputFocusEventData,
  ViewProps,
} from 'react-native';

export type StepperTheme = 'default' | 'round';

export interface StepperProps extends ViewProps {
  theme?: StepperTheme;
  /** 是否只允许输入整数	 */
  integer?: boolean;
  /** 是否禁用步进器	 */
  disabled?: boolean;
  /** 是否允许输入的值为空	 */
  allowEmpty?: boolean;
  /** 当前输入的值	 */
  value?: number;
  /** 输入框宽度，默认单位为 px	 */
  inputWidth?: number;
  /** 按钮大小以及输入框高度，默认单位为 px	 */
  buttonSize?: number;
  /** 输入框占位提示文字	 */
  placeholder?: string;
  /** 是否禁用增加按钮	 */
  disablePlus?: boolean;
  /** 是否禁用减少按钮	 */
  disableMinus?: boolean;
  /** 是否禁用输入框	 */
  disableInput?: boolean;
  /** 输入值变化前的回调函数，返回 false 可阻止输入，支持返回 Promise */
  beforeChange?: (value?: number) => boolean | Promise<boolean>;
  /** 固定显示的小数位数	 */
  decimalLength?: number;
  /** 最小值	 */
  min?: number;
  /** 最大值	 */
  max?: number;
  /** 步长，每次点击时改变的值	 */
  step?: number;
  /** 默认值 */
  defaultValue?: number;
  /** 是否显示增加按钮	 */
  showPlus?: boolean;
  /** 是否显示减少按钮	 */
  showMinus?: boolean;
  /** 是否显示输入框	 */
  showInput?: boolean;
  /** 是否开启长按手势	 */
  longPress?: boolean;
  /** 输入框点击事件 */
  onClick?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  /** 当绑定值变化时触发的事件	 */
  onChange?: (val?: number) => void;
  /** 点击增加按钮时触发	 */
  onPlus?: (event: GestureResponderEvent, val: number) => void;
  /** 点击减少按钮时触发	 */
  onMinus?: (event: GestureResponderEvent, val: number) => void;
  /** 输入框聚焦时触发	 */
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  /** 输入框失焦时触发	 */
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}
