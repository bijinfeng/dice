import React, { FC } from 'react';

import './index.less';

const Content: FC = ({ children }) => {
  return <div className="van-doc-content">{children}</div>;
};

export default Content;
