import React, { memo } from 'react';
import Overlay from '../Overlay';
import View from '../View';
import DismissibleView from './DismissibleView';
import { useMemoizedFn } from '../hooks';
import { PanningProvider, PanListenerView, PanningDirections } from '../PanningViews';
import type { DialogProps, Position } from './type';
import { getOverlayStyle } from './style';

const DirecationMap: Record<Exclude<Position, 'center'>, PanningDirections> = {
  bottom: PanningProvider.Directions.DOWN,
  left: PanningProvider.Directions.LEFT,
  right: PanningProvider.Directions.RIGHT,
  top: PanningProvider.Directions.UP,
};

const Dialog = (props: DialogProps): JSX.Element => {
  const {
    visible,
    position = 'bottom',
    overlay = true,
    duration = 300,
    renderPannableHeader,
  } = props;

  const handleClose = useMemoizedFn(() => {
    props.onClose?.();
  });

  const handleClosed = useMemoizedFn(() => {
    !visible && props.onClosed?.();
  });

  const Container = renderPannableHeader ? View : PanListenerView;

  const renderPanning = () => {
    if (position === 'center') {
      return props.children;
    }

    const direction = DirecationMap[position];

    return (
      <PanningProvider>
        <DismissibleView
          visible={visible}
          direction={direction}
          duration={duration}
          onDismiss={() => {
            handleClose();
            handleClosed();
          }}
        >
          <Container directions={[direction]}>
            {renderPannableHeader && (
              <PanListenerView directions={[direction]}>{renderPannableHeader()}</PanListenerView>
            )}
            {props.children}
          </Container>
        </DismissibleView>
      </PanningProvider>
    );
  };

  return (
    <Overlay
      visible={visible}
      onBackdropPress={handleClose}
      overlayStyle={getOverlayStyle(position)}
      onFadeDone={handleClosed}
      duration={duration}
      transparent={!overlay}
    >
      {renderPanning()}
    </Overlay>
  );
};

Dialog.displayName = 'Dialog';

export default memo(Dialog);
