import React, { FC, useContext } from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';
import { GlobalContext } from '../../GlobalContext';

interface Props extends ViewProps {
  title?: string;
  card?: boolean;
  contentStyle?: ViewProps['style'];
  inset?: boolean;
}

const DemoBlock: FC<Props> = ({ title, card, children, contentStyle, inset, ...rest }) => {
  const { themeVars } = useContext(GlobalContext);

  return (
    <View {...rest}>
      {title && (
        <View style={styles.title}>
          <Text style={{ color: themeVars.text_color_4 }}>{title}</Text>
        </View>
      )}
      <View style={[inset && styles.contentInset, contentStyle]}>
        {card ? (
          <View style={[styles.card, title ? styles.titleCard : null]}>{children}</View>
        ) : (
          children
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 12,
    marginTop: 12,
  },
  contentInset: {
    paddingHorizontal: 16,
  },
  title: {
    margin: 0,
    paddingBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  titleCard: {
    marginTop: 0,
  },
});

export default DemoBlock;
