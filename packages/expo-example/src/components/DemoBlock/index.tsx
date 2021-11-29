import React, { FC } from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';

interface Props extends ViewProps {
  title?: string;
  card?: boolean;
  contentStyle?: ViewProps['style'];
}

const DemoBlock: FC<Props> = ({ title, card, children, contentStyle, ...rest }) => {
  return (
    <View {...rest}>
      {title && (
        <View style={styles.title}>
          <Text style={{ color: '#455a6499' }}>{title}</Text>
        </View>
      )}
      <View style={contentStyle}>
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
