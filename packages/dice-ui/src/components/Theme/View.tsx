import React, { memo, FC } from 'react';
import { View } from 'react-native';
import { useTheme } from './index';

type Props = React.ComponentProps<typeof View>;

const ThemeView: FC<Props> = memo(({ children, style, ...rest }) => {
  const theme = useTheme();

  return (
    <View
      {...rest}
      style={[
        {
          backgroundColor: theme.colors.background,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
});

export default ThemeView;
