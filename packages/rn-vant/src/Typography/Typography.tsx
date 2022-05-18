import React, { forwardRef } from 'react';
import { Text } from 'react-native';
import isNumber from 'lodash-es/isNumber';
import { useTheme } from '../Theme';
import type { TypographyBaseProps } from './type';
import { getTypeStyle, getSizeStyle, getLevelStyle } from './style';

const Typography = forwardRef<Text, TypographyBaseProps & { renderType: string }>((props, ref) => {
  const {
    children,
    style,
    type,
    size = 'md',
    level = 4,
    renderType,
    center,
    strong,
    underline,
    disabled,
    delete: del,
    ellipsis,
    ...rest
  } = props;
  const theme = useTheme();
  const isTitle = renderType === 'title';

  const getNumberOfLines = () => {
    if (ellipsis === true) return 1;
    if (isNumber(ellipsis)) return ellipsis;
    return undefined;
  };

  return (
    <Text
      ref={ref}
      numberOfLines={getNumberOfLines()}
      style={[
        { color: theme.typography_color },
        style,
        getTypeStyle(theme, type),
        getSizeStyle(theme, size, isTitle, level),
        getLevelStyle(theme, level),
        center && { textAlign: 'center' },
        strong && { fontWeight: 'bold' },
        underline && { textDecorationLine: 'underline' },
        disabled && { color: theme.typography_disabled_color },
        del && { textDecorationLine: 'line-through' },
        renderType === 'link' && { color: theme.typography_link_color },
        renderType === 'title' && { fontWeight: 'bold' },
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
});

export default Typography;
