import React, { useState, useCallback, useMemo } from 'react';
import type { ViewStyle } from 'react-native';
import Overlay from '../../Overlay';
import View from '../../View';
import OverlayFadingBackground from './OverlayFadingBackground';
import DialogDismissibleView from './DialogDismissibleView';
import { PanningProvider, PanListenerView, PanningDirections } from '../../PanningViews';
import { useUpdateEffect } from '../../hooks';
import type { DialogProps, Position } from '../type';

const DirecationMap: Record<Position, PanningDirections> = {
  bottom: 'down',
  left: 'left',
  right: 'right',
  top: 'up',
  center: 'down',
};

const Dialog = (props: DialogProps): JSX.Element => {
  const {
    visible,
    children,
    useSafeArea,
    position = 'bottom',
    onClose,
    onClosed,
    renderPannableHeader,
  } = props;

  const [modalVisibility, setModalVisibility] = useState(visible);
  const [dialogVisibility, setDialogVisibility] = useState(visible);

  const onFadeDone = () => {
    if (!modalVisibility) {
      onClosed?.();
    }
  };

  const onDismiss = () => {
    setModalVisibility(false);
    onClose?.();
  };

  const hideDialogView = useCallback(() => {
    setDialogVisibility(false);
  }, []);

  useUpdateEffect(() => {
    if (visible) {
      setModalVisibility(true);
      setDialogVisibility(true);
    } else {
      hideDialogView();
    }
  }, [visible]);

  const overlayStyle = useMemo(() => {
    const alignments: ViewStyle = {};

    if (position === 'center') {
      alignments.justifyContent = 'center';
      alignments.alignItems = 'center';
    } else if (position === 'top') {
      alignments.justifyContent = 'flex-start';
    } else if (position === 'left') {
      alignments.alignItems = 'flex-start';
    } else if (position === 'bottom') {
      alignments.justifyContent = 'flex-end';
    } else if (position === 'right') {
      alignments.alignItems = 'flex-end';
    }

    return alignments;
  }, [position]);

  const direction = useMemo(() => {
    return position !== 'center' ? DirecationMap[position] : undefined;
  }, [position]);

  const Container = renderPannableHeader ? View : PanListenerView;

  return (
    <Overlay
      visible={modalVisibility}
      onBackdropPress={hideDialogView}
      overlayStyle={overlayStyle}
      useSafeArea={useSafeArea}
    >
      <OverlayFadingBackground
        modalVisibility={modalVisibility}
        dialogVisibility={dialogVisibility}
        onFadeDone={onFadeDone}
      />
      <View pointerEvents="box-none">
        <PanningProvider>
          <DialogDismissibleView
            direction={direction}
            visible={dialogVisibility}
            onDismiss={onDismiss}
          >
            <Container
              directions={direction ? [direction] : undefined}
              style={{ overflow: 'hidden' }}
            >
              {renderPannableHeader && (
                <PanListenerView directions={direction ? [direction] : undefined}>
                  {renderPannableHeader()}
                </PanListenerView>
              )}
              {children}
            </Container>
          </DialogDismissibleView>
        </PanningProvider>
      </View>
    </Overlay>
  );
};

Dialog.displayName = 'Dialog';

export default Dialog;
