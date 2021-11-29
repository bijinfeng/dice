import React, { FC, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface LayoutContext {
  screenWidth: number; // 屏幕的宽度
  screenHeight: number; // 屏幕的高度
  safeAreaWidth: number; // 安全区域的宽度
  safeAreaHeight: number; // 安全区域的高度
  statusBarHeight: number; // 状态栏的高度
  bottomStatusHeight: number;
}

export const LayoutContext = React.createContext<LayoutContext>({} as LayoutContext);

export const LayoutProvider: FC = ({ children }) => {
  const window = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const state = useMemo<LayoutContext>(() => {
    return {
      screenHeight: window.height,
      screenWidth: window.width,
      safeAreaWidth: window.width - insets.left - insets.right,
      safeAreaHeight: window.height - insets.top - insets.bottom,
      statusBarHeight: insets.top,
      bottomStatusHeight: insets.bottom,
    };
  }, [window, insets]);

  return <LayoutContext.Provider value={state}>{children}</LayoutContext.Provider>;
};
