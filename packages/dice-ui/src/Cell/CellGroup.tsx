import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';
import { useThemeFactory } from '../Theme';
import { createCellGroupStyle } from './style';
import type { CellGroupProps } from './type';

const CellGroup: FC<CellGroupProps> = memo(props => {
  const { children, title, border = true, inset } = props;
  const { styles } = useThemeFactory(createCellGroupStyle);
  const hasBorder = border && !inset;

  const renderChildren = () => {
    return React.Children.map(children, (child, i) => (
      <View style={styles.item}>
        {i !== 0 && <View style={styles.divide} />}
        {child}
      </View>
    ));
  };

  return (
    <View>
      {title && <Text style={[styles.title, inset ? styles.titleInset : undefined]}>{title}</Text>}
      <View
        style={[
          styles.wrapper,
          hasBorder ? styles.wrapperBorder : undefined,
          inset ? styles.inset : undefined,
        ]}
      >
        {renderChildren()}
      </View>
    </View>
  );
});

CellGroup.displayName = 'Cell.Group';

export default CellGroup;
