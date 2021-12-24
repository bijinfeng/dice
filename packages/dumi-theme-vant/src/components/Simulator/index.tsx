import React, { FC, useState, useEffect, useMemo, useRef } from 'react';
import clsx from 'clsx';

import './index.less';

export interface SimulatorProps {
  src: string;
  path: string;
}

const Simulator: FC<SimulatorProps> = ({ src, path }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>();

  const simulatorStyle = useMemo(() => {
    const height = Math.min(640, window.innerHeight - 90);
    return {
      height: `${height}px`,
    };
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
    const win = iframeRef?.current?.contentWindow;
    if (win) {
      win.postMessage(
        {
          method: 'navigate',
          data: path,
        },
        '*'
      );
    }
  }, [path]);

  return (
    <div className={clsx('van-doc-simulator', { 'van-doc-simulator-fixed': scrollTop > 60 })}>
      <iframe
        ref={iframeRef}
        title="vant-ui-iframe"
        src={src}
        style={simulatorStyle}
        frameBorder="0"
      />
    </div>
  );
};

export default Simulator;
