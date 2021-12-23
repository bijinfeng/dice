import React, { FC } from 'react';

export interface RendererProps {
  title?: string;
  desc?: string;
}

export const Renderer: FC<RendererProps> = ({ children, title, desc }) => {
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
