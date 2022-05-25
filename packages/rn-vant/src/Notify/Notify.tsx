import React from 'react';
import { Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PopupDialog from '../Popup/Dialog';
import { useThemeFactory } from '../Theme';
import { createStyle } from './style';
import type { NotifyProps, NotifyPrivateProps } from './type';

export const Notify = (props: NotifyProps & NotifyPrivateProps): JSX.Element => {
  const { type = 'danger', visible, color, background } = props;
  const insets = useSafeAreaInsets();
  const { styles } = useThemeFactory(createStyle);

  return (
    <PopupDialog
      visible={visible}
      position="top"
      overlay={false}
      onClose={props.onClose}
      onClosed={props.onClosed}
      onOpened={props.onOpened}
    >
      <Pressable
        onPress={props.onPress}
        style={[
          { paddingTop: insets.top },
          styles.notify,
          type === 'danger' && styles.danger,
          type === 'primary' && styles.primary,
          type === 'success' && styles.success,
          type === 'warning' && styles.warning,
          !!background && { backgroundColor: background },
        ]}
      >
        <Text style={[styles.text, !!color && { color }]}>{props.children || props.message}</Text>
      </Pressable>
    </PopupDialog>
  );
};
