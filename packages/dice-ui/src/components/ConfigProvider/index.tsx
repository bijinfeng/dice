import React, { FC } from 'react';
import { AccessibilityInfo, Appearance, ColorSchemeName } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '../Theme';
import PortalHost from '../Portal/PortalHost';
import TopView from '../Overlay/TopView';
import { DefaultTheme, DarkTheme } from '../../styles';
import { LayoutProvider } from '../../context';

interface Props {
  children: React.ReactNode;
  theme?: DiceUI.Theme;
}

const ConfigProvider: FC<Props> = ({ children, theme: providedTheme }) => {
  const scheme = (!providedTheme && Appearance?.getColorScheme()) || 'light';

  const [reduceMotionEnabled, setReduceMotionEnabled] = React.useState<boolean>(false);

  const [colorScheme, setColorScheme] = React.useState<ColorSchemeName>(scheme);

  const getTheme = () => {
    if (providedTheme) {
      return providedTheme;
    }
    const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

    return {
      ...theme,
      animation: {
        ...theme.animation,
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
    <SafeAreaProvider>
      <LayoutProvider>
        <PortalHost>
          <TopView>
            <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>
          </TopView>
        </PortalHost>
      </LayoutProvider>
    </SafeAreaProvider>
  );
};

export default ConfigProvider;
