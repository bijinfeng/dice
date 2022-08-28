import React, { FC, useState, useEffect, useMemo, memo } from 'react';
import clsx from 'clsx';
import { useColor } from '../../hooks';
import { iframeMessageSwap } from '../../utils';
import './index.less';

export interface SimulatorProps {
  src: string;
  path?: string;
}

const Simulator: FC<SimulatorProps> = ({ src, path }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [theme] = useColor();

  const simulatorStyle = useMemo(() => {
    const height = Math.min(640, window.innerHeight - 90);

    return { height: `${height}px` };
  }, [windowHeight]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollTop(window.scrollY);
    });
    window.addEventListener('resize', () => {
      setWindowHeight(window.innerHeight);
    });
  }, []);

  useEffect(() => {
    // 切换 iframe 内部的路径
    iframeMessageSwap.postMessage('navigate', path);
  }, [path]);

  useEffect(() => {
    // 切换 iframe 内部的主题
    theme && iframeMessageSwap.postMessage('theme', theme);
  }, [theme]);

  return (
    <div className={clsx('van-doc-simulator', { 'van-doc-simulator-fixed': scrollTop > 60 })}>
      <iframe
        id="simulator"
        ref={iframeMessageSwap.setRef}
        title="vant-ui-iframe"
        src={src}
        style={simulatorStyle}
        frameBorder="0"
      />
    </div>
  );
};

export default memo(Simulator);
