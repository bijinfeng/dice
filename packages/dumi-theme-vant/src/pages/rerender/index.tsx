import React, { FC } from 'react';

import { useMeta } from '../../hooks/useMeta';

export const Renderer: FC = ({ children }) => {
  const { title, desc, demo } = useMeta();

  return (
    <article className="van-doc-markdown-body">
      {title && <h1>{title}</h1>}
      {desc && (
        <div className="van-doc-card">
          <h3>介绍</h3>
          <p>{desc}</p>
        </div>
      )}
      {children}
    </article>
  );
};
