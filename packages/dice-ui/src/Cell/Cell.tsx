import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';
import isFunction from 'lodash-es/isFunction';
import { useMemoizedFn } from '../hooks';
import { useThemeFactory } from '../Theme';
import Icon from '../Icon';
import TouchableOpacity from '../TouchableOpacity';
import { createCellStyle } from './style';
import { CellProps, directionIcons } from './type';

const Cell: FC<CellProps> = memo(props => {
  const {
    title,
    value,
    label,
    size = 'default',
    icon,
    isLink,
    arrowDirection = 'right',
    center,
    style,
    onPress,
    children,
    valueStyle,
    labelStyle,
    titleStyle,
  } = props;
  const isLarge = size === 'large';
  const { styles, theme } = useThemeFactory(createCellStyle);

  const renderLeftIcon = () => {
    let iconComponent: React.ReactNode;

    if (React.isValidElement(icon)) {
      iconComponent = React.cloneElement(icon, {
        size: theme.cell_icon_size,
        color: theme.cell_text_color,
      });
    } else if (icon) {
      iconComponent = (
        <Icon name={icon} size={theme.cell_icon_size} color={theme.cell_text_color} />
      );
    }

    if (iconComponent) {
      return <View style={[styles.icon, { marginRight: 4 }]}>{iconComponent}</View>;
    }

    return null;
  };

  const renderTitle = () => {
    if (title) {
      const titleStyles = [styles.title, isLarge && styles.titleLarge, titleStyle];
      return (
        <View>
          {isFunction(title) ? title(titleStyles) : <Text style={titleStyles}>{title}</Text>}
          {label && (
            <Text style={[styles.label, isLarge && styles.larbelLarge, labelStyle]}>{label}</Text>
          )}
        </View>
      );
    }
    return null;
  };

  const renderValue = useMemoizedFn(() => {
    const hasValue = !!children || !!value;

    if (React.isValidElement(children)) {
      return children;
    }
    if (hasValue) {
      return <Text style={[styles.value, valueStyle]}>{children ?? value}</Text>;
    }
    return null;
  });

  const renderRightIcon = () => {
    if (isLink) {
      return (
        <View style={[styles.icon, { marginLeft: 4 }]}>
          <Icon
            name={directionIcons[arrowDirection]}
            size={theme.cell_icon_size}
            color={theme.cell_right_icon_color}
          />
        </View>
      );
    }
    return null;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeBackgroundColor={theme.cell_active_color}
      style={[
        styles.wrapper,
        isLarge && styles.wrapperLarge,
        style,
        center ? { alignItems: 'center' } : { alignItems: 'flex-start' },
      ]}
    >
      {renderLeftIcon()}
      {renderTitle()}
      {renderValue()}
      {renderRightIcon()}
    </TouchableOpacity>
  );
});

Cell.displayName = 'Cell';

export default Cell;
