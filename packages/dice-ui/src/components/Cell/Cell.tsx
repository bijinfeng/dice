import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';
import { useThemeFactory } from '../Theme';
import Icon, { IconNames } from '../Icon';
import TouchableRipple from '../TouchableRipple';
import Divider from '../Divider';
import { isString } from '../../utils/typeof';
import { createStyle } from './cell.style';

type Direction = 'left' | 'right' | 'up' | 'down';

interface CellProps {
  /**
   * 左侧标题
   */
  title?: React.ReactNode;
  /**
   * 右侧内容
   */
  value?: React.ReactNode;
  /**
   * 标题下方的描述信息
   */
  label?: string;
  /**
   * 单元格大小，可选值为 large
   */
  size?: 'default' | 'large';
  /**
   * 左侧图标名称或图标自定义图标组件
   */
  icon?: IconNames;
  /**
   * 是否显示内边框
   * @default true
   */
  border?: boolean;
  /**
   * 是否展示右侧箭头
   */
  isLink?: boolean;
  /**
   * 箭头方向
   * @default right;
   */
  arrowDirection?: Direction;
  /**
   * 是否使内容垂直居中
   */
  center?: boolean;
  /**
   * 点击事件
   */
  onPress?: () => void;
}

const directionIcons: Record<Direction, IconNames> = {
  left: 'arrow-left',
  right: 'arrow',
  up: 'arrow-up',
  down: 'arrow-down',
};

const Cell: FC<CellProps> = memo(props => {
  const {
    title,
    value,
    label,
    size = 'default',
    icon,
    border,
    isLink,
    arrowDirection = 'right',
    center,
    onPress,
  } = props;
  const hasTitle = !!title;
  const isLarge = size === 'large';
  const { styles } = useThemeFactory(createStyle);

  // value 是文本的话，需要用 Text 包裹一下
  const getValue = () => {
    if (isString(value)) {
      return <Text style={[styles.value, hasTitle ? undefined : styles.valueAlone]}>{value}</Text>;
    }
    return value;
  };

  return (
    <>
      {border && <Divider style={styles.wrapperBorder} />}
      <TouchableRipple onPress={onPress}>
        <View
          style={[
            styles.wrapper,
            isLarge ? styles.wrapperLarge : undefined,
            center ? { alignItems: 'center' } : { alignItems: 'flex-start' },
          ]}
        >
          {icon && (
            <View style={[styles.icon, { marginRight: 4 }]}>
              <Icon name={icon} />
            </View>
          )}
          {title && (
            <View style={styles.left}>
              <Text style={[styles.title, isLarge ? styles.titleLarge : undefined]}>{title}</Text>
              {label && (
                <Text style={[styles.label, isLarge ? styles.larbelLarge : undefined]}>
                  {label}
                </Text>
              )}
            </View>
          )}
          <View style={styles.right}>
            {value && getValue()}
            {isLink && (
              <View style={[styles.icon, { marginLeft: 4 }]}>
                <Icon name={directionIcons[arrowDirection]} />
              </View>
            )}
          </View>
        </View>
      </TouchableRipple>
    </>
  );
});

Cell.displayName = 'Cell';

export default Cell;
