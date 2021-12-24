import React, { FC } from 'react';
import clsx from 'clsx';

import './index.less';

export interface ContainerProps {
  hasSimulator?: boolean;
}

const Container: FC<ContainerProps> = ({ hasSimulator, children }) => (
  <div
    className={clsx('van-doc-container van-doc-row', {
      'van-doc-container--with-simulator': hasSimulator,
    })}
  >
    <div className="van-doc-content">{children}</div>
  </div>
);

export default Container;
