import React, { useContext, useMemo } from 'react';
import isNumber from 'lodash-es/isNumber';
import Button from '../Button';
import ActionBarContext from './ActionBarContext';
import type { ActionBarButtonProps } from './type';
import { useThemeFactory } from '../Theme';
import { createButtonStyles } from './style';

const ActionBarButton: React.FC<ActionBarButtonProps> = props => {
  const { type, icon, text, color, loading, disabled, index, textStyle } = props;
  const { parent } = useContext(ActionBarContext);
  const { styles } = useThemeFactory(createButtonStyles);

  const isFirst = useMemo(() => {
    if (parent && isNumber(index)) {
      const prev = parent.children[index - 1];
      return !(prev && 'isButton' in prev.type);
    }
    return false;
  }, [index, parent]);

  const isLast = useMemo(() => {
    if (parent && isNumber(index)) {
      const next = parent.children[index + 1];
      return !(next && 'isButton' in next.type);
    }
    return false;
  }, [index, parent]);

  return (
    <Button
      style={[
        props.style,
        styles.button,
        isFirst && styles.first,
        isLast && styles.last,
        type === 'danger' && styles.danger,
        type === 'warning' && styles.warning,
      ]}
      size="large"
      type={type}
      icon={icon}
      color={color}
      loading={loading}
      disabled={disabled}
      onPress={props.onPress}
      textStyle={[styles.text, textStyle]}
    >
      {props.children ? props.children : text}
    </Button>
  );
};

const ActionBarButtonNameSpace = Object.assign(ActionBarButton, { isButton: true });

export default ActionBarButtonNameSpace;
