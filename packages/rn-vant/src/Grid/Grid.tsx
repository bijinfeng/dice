import React from 'react';
import { View } from 'react-native';
import { useThemeFactory } from '../Theme';
import type { GridProps } from './type';
import { createStyle } from './style';

const Grid = (props: GridProps): JSX.Element => {
  const { style, children, border, gutter } = props;
  const { styles } = useThemeFactory(createStyle);

  return (
    <View style={[styles.grid, border && !gutter && styles.borderTop, style]}>
      {React.Children.toArray(children)
        .filter(React.isValidElement)
        .map((child: React.ReactElement, index: number) =>
          React.cloneElement(child, {
            index,
            parent: props,
          })
        )}
    </View>
  );
};

Grid.defaultProps = {
  center: true,
  border: true,
  columnNum: 4,
};

export default Grid;
