import React, { memo } from 'react';
import {
  PanListenerView,
  PanningProvider,
  PanDismissibleView,
  useThemeFactory,
  PanResponderView,
} from 'dice-ui';
import { View, Text, StyleSheet } from 'react-native';
import { DemoBlock } from '../../components';

const PanningViewExample = memo(() => {
  const { styles } = useThemeFactory(styleFactory);
  return (
    <View>
      <DemoBlock title="Pan Dismissible" inset>
        <PanningProvider>
          <PanDismissibleView style={styles.panDismissible}>
            <PanListenerView style={styles.panListener}>
              <Text style={styles.largeText}>Drag\Swipe here</Text>
            </PanListenerView>
          </PanDismissibleView>
        </PanningProvider>
      </DemoBlock>
      <DemoBlock title="Pan Responder" inset>
        <PanningProvider>
          <PanResponderView style={styles.panDismissible}>
            <PanListenerView style={styles.panListener}>
              <Text style={styles.largeText}>Drag\Swipe here</Text>
            </PanListenerView>
          </PanResponderView>
        </PanningProvider>
      </DemoBlock>
    </View>
  );
});

const styleFactory = (theme: DiceUI.Theme) =>
  StyleSheet.create({
    largeText: {
      color: theme.white,
      margin: 20,
    },
    panDismissible: {
      backgroundColor: theme.primary,
      height: 250,
      width: 250,
    },
    panListener: {
      backgroundColor: theme.danger,
      justifyContent: 'center',
      width: '100%',
    },
  });

export default PanningViewExample;
