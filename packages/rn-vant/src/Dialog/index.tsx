import React, { useState } from 'react';
import { Cross } from '@pingtou/rn-vant-icons';
import noop from 'lodash-es/noop';
import BaseDialog from './Dialog';
import { PortalRef } from '../ConfigProvider';
import type { DialogProps, AlertDialogProps } from './type';

let currentKey = 0;

const show = (props: DialogProps) => {
  const defaultOptions = {
    overlay: true,
    closeable: false,
    closeIcon: <Cross />,
    showConfirmButton: true,
    showCancelButton: false,
    closeOnClickOverlay: false,
  };

  const { onClosed, onCancel, onConfirm, onClose, cancelProps, confirmProps, ...restProps } = props;

  let destroy = noop;
  const key = `dialog_${++currentKey}`;

  const TempDialog = () => {
    const [visible, setVisible] = useState(true);
    const [cancelLoading, setCancelLoading] = useState(false);
    const [okLoading, setOkLoading] = useState(false);

    destroy = () => {
      setVisible(false);
      onClose?.();
    };

    const _afterClose = () => {
      onClosed?.();
      PortalRef.current?.removePortal(key);
    };

    const _onConfirm = async () => {
      const i = setTimeout(() => setOkLoading(true));

      if ((await onConfirm?.()) !== false) {
        clearTimeout(i);
        destroy();
      } else {
        clearTimeout(i);
        setOkLoading(false);
      }
    };

    const _onCancel = async () => {
      const i = setTimeout(() => setCancelLoading(true));
      if ((await onCancel?.()) !== false) {
        clearTimeout(i);
        destroy();
      } else {
        clearTimeout(i);
        setCancelLoading(false);
      }
    };

    return (
      <BaseDialog
        {...defaultOptions}
        {...restProps}
        visible={visible}
        cancelProps={{ loading: cancelLoading, ...cancelProps }}
        confirmProps={{ loading: okLoading, ...confirmProps }}
        onClose={destroy}
        onCancel={_onCancel}
        onConfirm={_onConfirm}
        onClosed={_afterClose}
      />
    );
  };

  PortalRef.current?.addPortal(key, <TempDialog key={key} />);

  return destroy;
};

// 可使用 async/await 的方式
const alert = (props: AlertDialogProps) => {
  const { onConfirm = noop } = props;

  return new Promise<void>(resolve => {
    show({
      ...props,
      onConfirm: () => {
        onConfirm();
        resolve();
      },
    });
  });
};

const confirm = (props: DialogProps): Promise<boolean> => {
  const { onCancel = noop, onConfirm = noop } = props;

  return new Promise((resolve, reject) => {
    show({
      // 强制显示 OK Btn
      showCancelButton: true,
      ...props,
      onCancel: () => {
        onCancel();
        reject();
      },
      onConfirm: () => {
        onConfirm();
        resolve(true);
      },
    });
  });
};

const Dialog = Object.assign(BaseDialog, { show, alert, confirm });

export default Dialog;
export { Dialog };
export type { DialogProps } from './type';
