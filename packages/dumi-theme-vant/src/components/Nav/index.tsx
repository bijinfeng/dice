import React, { useContext, useState, useEffect } from 'react';
import { context, NavLink } from 'dumi/theme';

import './index.less';

const SideMenu = () => {
  const { menu, meta } = useContext(context);
  const [top, setTop] = useState(60);
  const [bottom] = useState(0);

  const isHiddenMenus = meta.sidemenu === false || !menu.length;

  const onScroll = () => {
    const { pageYOffset: offset } = window;
    setTop(Math.max(0, 64 - offset));
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    onScroll();
  }, []);

  if (isHiddenMenus) {
    return null;
  }

  return (
    <div
      className="van-doc-nav"
      style={{
        top: `${top}px`,
        bottom: `${bottom}px`,
      }}
    >
      {menu.map(item => {
        const hasChildren = item.children && Boolean(item.children.length);

        return (
          <div className="van-doc-nav__group" key={item.path || item.title}>
            <div className="van-doc-nav__title">{item.title}</div>
            {hasChildren &&
              item.children.map(child => (
                <div className="van-doc-nav__item" key={child.path}>
                  <NavLink to={child.path}>{child.title}</NavLink>
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default SideMenu;
