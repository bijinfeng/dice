import React, { forwardRef, useImperativeHandle } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Popover as Pop, usePopover } from 'react-native-modal-popover';
import type { PopoverInstance, PopoverProps } from './type';

const Popover = forwardRef<PopoverInstance, PopoverProps>((props, ref) => {
  const { children, reference } = props;
  const { openPopover, closePopover, popoverVisible, touchableRef, popoverAnchorRect } =
    usePopover();

  useImperativeHandle(ref, () => ({
    show: () => openPopover(),
    hide: () => closePopover(),
  }));

  return (
    <View>
      <TouchableOpacity ref={touchableRef} onPress={openPopover}>
        {React.isValidElement(reference)
          ? React.cloneElement(reference, { onPress: openPopover })
          : reference}
      </TouchableOpacity>
      <Pop
        visible={popoverVisible}
        onClose={closePopover}
        fromRect={popoverAnchorRect}
        supportedOrientations={['portrait', 'landscape']}
      >
        {children}
      </Pop>
    </View>
  );
});

export default Popover;
