import React, { FC, memo } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '.';

type Props = React.ComponentProps<typeof Text> & {
  secondary?: boolean;
};

const ThemeText: FC<Props> = memo(({ style, children, secondary, ...rest }) => {
  const theme = useTheme();
  const textColor = secondary ? theme.colors.textSecondary : theme.colors.text;

  return (
    <Text
      {...rest}
      style={[
        {
          ...theme.fonts.regular,
          color: textColor,
        },
        styles.text,
        style,
      ]}
    >
      {children}
    </Text>
  );
});

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});

export default ThemeText;
