import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';
import { useThemeFactory } from '../Theme';
import { createStyle } from './cellGroup.style';

interface CellGroupProps {
  /**
   * 分组标题
   */
  title?: string;
  /**
   * 圆角卡片风格
   */
  inset?: boolean;
  /**
   * 是否显示外边框
   * @default true
   */
  border?: boolean;
}

const CellGroup: FC<CellGroupProps> = memo(props => {
  const { children, title, border = true, inset } = props;
  const styles = useThemeFactory(createStyle);
  const hasBorder = border && !inset;
  const renderChildren = () => {
    return React.Children.map(children, (child, i) => {
      const isFirst = i === 0;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (React.isValidElement(child) && child.type.displayName === 'Cell') {
        return React.cloneElement(child, { border: !isFirst });
      }
      return null;
    });
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
