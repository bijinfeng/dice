/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext } from 'react';
import { context, Link, NavLink } from 'dumi/theme';
import type { Location } from '../../interface';
import SearchInput from '../SearchInput';
import { useColor } from '../../hooks';
import './index.less';

export interface HeaderProps {
  location: Location;
}

const sunIcon = 'https://b.yzcdn.cn/vant/light-theme.svg';
const moonIcon = 'https://b.yzcdn.cn/vant/dark-theme.svg';

const Header: FC<HeaderProps> = ({ location }) => {
  const [color, setColor] = useColor();
  const { base, config, nav: navItems, locale } = useContext(context);
  const firstDiffLocale = config?.locales.find(({ name }) => name !== locale);

  // 切换语言
  const getLocaleTogglePath = (target: string) => {
    const baseWithoutLocale = base.replace(`/${locale}`, '');
    const pathnameWithoutLocale =
      location.pathname.replace(new RegExp(`^${base}(/|$)`), `${baseWithoutLocale}$1`) || '/';

    // append locale prefix to path if it is not the default locale
    if (target !== config.locales[0].name) {
      // compatiable with integrate route prefix /~docs
      const routePrefix = `${baseWithoutLocale}/${target}`.replace(/\/\//, '/');
      const pathnameWithoutBase = location.pathname.replace(
        // to avoid stripped the first /
        base.replace(/^\/$/, '//'),
        ''
      );

      return `${routePrefix}${pathnameWithoutBase}`.replace(/\/$/, '');
    }

    return pathnameWithoutLocale;
  };

  return (
    <div className="van-doc-header">
      <div className="van-doc-row">
        <div className="van-doc-header__top">
          <Link className="van-doc-header__logo" to={base}>
            {typeof config.logo === 'string' && <img alt="vant" src={config.logo} />}
            <span>{config.title}</span>
          </Link>
          <ul className="van-doc-header__top-nav">
            {/* nav */}
            {navItems.map((nav, index) => (
              <li key={index.toString()} className="van-doc-header__top-nav-item">
                <span className="van-doc-header__link">
                  <NavLink to={nav.path}>
                    {nav?.logo ? <img src={nav.logo} alt="logo" /> : <span>{nav.title}</span>}
                  </NavLink>
                </span>
              </li>
            ))}
            {/* dark switch */}
            <li className="van-doc-header__top-nav-item">
              <a
                className="van-doc-header__link"
                target="_blank"
                onClick={() => setColor(color === 'dark' ? 'light' : 'dark')}
                aria-hidden="true"
              >
                <img src={color === 'dark' ? sunIcon : moonIcon} alt={color} />
              </a>
            </li>
            {/* versions */}
            {/* local select */}
            {firstDiffLocale && (
              <li className="van-doc-header__top-nav-item">
                <Link
                  className="van-doc-header__cube"
                  to={getLocaleTogglePath(firstDiffLocale.name)}
                >
                  {firstDiffLocale.label}
                </Link>
              </li>
            )}
            {config.algolia && <SearchInput searchConfig={config.algolia} />}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
