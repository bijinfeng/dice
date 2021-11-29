import React, { FC, useContext } from 'react';
import { View, ViewStyle } from 'react-native';
import RowContext from './RowContext';

interface Props {
  /**
   * 列元素宽度
   */
  span?: number;
  /**
   * 列元素偏移距离
   */
  offset?: number;
  /**
   * 组件样式
   */
  style?: ViewStyle;
}

const getPercent = (count: number) => `${(count / 24) * 100}%`;

const LayoutCol: FC<Props> = ({ span, offset, style, children }) => {
  const { gutter } = useContext(RowContext);

  const mergedStyle: ViewStyle = gutter
    ? {
        paddingLeft: gutter / 2,
        paddingRight: gutter / 2,
      }
    : {};

  return (
    <View style={[{ width: getPercent(span), marginLeft: getPercent(offset) }, mergedStyle, style]}>
      {children}
    </View>
  );
};

LayoutCol.displayName = 'Layout.Col';

export default LayoutCol;
