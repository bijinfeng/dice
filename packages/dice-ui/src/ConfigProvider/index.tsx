import React, { memo, MutableRefObject } from 'react';
import { AccessibilityInfo, Appearance, ColorSchemeName } from 'react-native';

import { ThemeProvider } from '../Theme';
import { PortalProvider, usePortal } from '../Portal';
import { defaultTheme, darkTheme } from '../styles';

export type PortalService = ReturnType<typeof usePortal>;
export const PortalRef = React.createRef<PortalService>() as MutableRefObject<PortalService>;

interface Props {
  children: React.ReactNode;
  theme?: DiceUI.Theme;
}

const ConfigProvider = ({ children, theme: providedTheme }: Props): JSX.Element => {
  const scheme = (!providedTheme && Appearance?.getColorScheme()) || 'light';

  const [reduceMotionEnabled, setReduceMotionEnabled] = React.useState<boolean>(false);

  const [colorScheme, setColorScheme] = React.useState<ColorSchemeName>(scheme);

  const getTheme = (): DiceUI.Theme => {
    if (providedTheme) {
      return providedTheme;
    }
    const theme = colorScheme === 'dark' ? darkTheme : defaultTheme;

    return {
      ...theme,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dark: colorScheme === 'dark',
      animation: {
        scale: reduceMotionEnabled ? 0 : 1,
      },
    };
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAppearanceChange = (preferences: Appearance.AppearancePreferences) => {
    setColorScheme(preferences.colorScheme);
  };

  React.useEffect(() => {
    if (!providedTheme) {
      AccessibilityInfo.addEventListener('reduceMotionChanged', setReduceMotionEnabled);
    }
    return () => {
      if (!providedTheme) {
        AccessibilityInfo.removeEventListener('reduceMotionChanged', setReduceMotionEnabled);
      }
    };
  }, [providedTheme]);

  React.useEffect(() => {
    if (!providedTheme) Appearance?.addChangeListener(handleAppearanceChange);
    return () => {
      if (!providedTheme) Appearance?.removeChangeListener(handleAppearanceChange);
    };
  }, [providedTheme]);

  return (
    <ThemeProvider theme={getTheme()}>
      <PortalProvider>
        <InitializePortalRef />
        {children}
      </PortalProvider>
    </ThemeProvider>
  );
};

const InitializePortalRef = () => {
  const portal = usePortal();
  PortalRef.current = portal;
  return null;
};

ConfigProvider.displayName = 'ConfigProvider';

export default memo(ConfigProvider);
