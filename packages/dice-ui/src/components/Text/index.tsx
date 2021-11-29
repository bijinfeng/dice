import React from 'react';
import { Text as NativeText, TextStyle, StyleProp, StyleSheet } from 'react-native';
import { useTheme } from '../Theme';

type Props = React.ComponentProps<typeof NativeText> & {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
};

const Text = React.forwardRef<any, Props>(({ style, ...rest }, ref) => {
  const theme = useTheme();
  const root = React.useRef<NativeText | null>(null);

  React.useImperativeHandle(ref, () => ({
    setNativeProps: (args: any) => root.current?.setNativeProps(args),
  }));

  return (
    <NativeText
      {...rest}
      ref={root}
      style={[
        {
          ...theme.fonts.regular,
          color: theme.colors.text,
        },
        styles.text,
        style,
      ]}
    />
  );
});

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});

export default Text;
