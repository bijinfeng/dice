import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';
import { useThemeFactory } from '../Theme';
import Icon, { IconNames } from '../Icon';
import TouchableOpacity from '../TouchableOpacity';
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
  const isLarge = size === 'large';
  const { styles, theme } = useThemeFactory(createStyle);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeBackgroundColor={theme.cell_active_color}
      style={[
        styles.wrapper,
        isLarge ? styles.wrapperLarge : undefined,
        center ? { alignItems: 'center' } : { alignItems: 'flex-start' },
      ]}
    >
      {border && <View style={styles.wrapperBorder} />}

      {icon && (
        <View style={[styles.icon, { marginRight: 4 }]}>
          <Icon name={icon} size={theme.cell_icon_size} color={theme.cell_text_color} />
        </View>
      )}
      {title && (
        <View style={styles.left}>
          <Text style={[styles.title, isLarge ? styles.titleLarge : undefined]}>{title}</Text>
          {label && (
            <Text style={[styles.label, isLarge ? styles.larbelLarge : undefined]}>{label}</Text>
          )}
        </View>
      )}
      <View style={styles.right}>
        {value && <Text style={styles.value}>{value}</Text>}
        {isLink && (
          <View style={[styles.icon, { marginLeft: 4 }]}>
            <Icon
              name={directionIcons[arrowDirection]}
              size={theme.cell_icon_size}
              color={theme.cell_right_icon_color}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
});

Cell.displayName = 'Cell';

export default Cell;
