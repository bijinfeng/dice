import React, { FC } from 'react';
import { useThemeConfig } from '../../hooks';
import type { Location } from '../../interface';

export interface RendererProps {
  location: Location;
  title?: string;
  desc?: string;
}

export const Renderer: FC<RendererProps> = ({ children, title, desc }) => {
  const { base } = useThemeConfig();
  const isHome = location?.pathname === base;

  return (
    <article className="van-doc-markdown-body">
      {title && !isHome && <h1>{title}</h1>}
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
