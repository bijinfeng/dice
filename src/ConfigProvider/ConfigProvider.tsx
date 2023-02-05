import React, { memo, MutableRefObject } from "react";
import { Appearance, ColorSchemeName } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PortalProvider, usePortal } from "../Portal";
import { darkTheme, defaultTheme } from "../styles";
import { ThemeProvider } from "../Theme";
import ConfigProviderContext, { INITIAL_STATE } from "./ConfigProviderContext";
import type { ConfigProviderProps } from "./type";

export type PortalService = ReturnType<typeof usePortal>;
export const PortalRef =
  React.createRef<PortalService>() as MutableRefObject<PortalService>;

const ConfigProvider = (props: ConfigProviderProps): JSX.Element => {
  const { children, theme: providedTheme, ...rest } = props;
  const scheme = (!providedTheme && Appearance?.getColorScheme()) || "light";

  const [colorScheme, setColorScheme] = React.useState<ColorSchemeName>(scheme);

  const getTheme = (): DiceUI.Theme => {
    if (providedTheme) {
      return providedTheme;
    }
    return colorScheme === "dark" ? darkTheme : defaultTheme;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAppearanceChange = (
    preferences: Appearance.AppearancePreferences
  ) => {
    setColorScheme(preferences.colorScheme);
  };

  React.useEffect(() => {
    let linstener: ReturnType<typeof Appearance.addChangeListener>;

    if (!providedTheme) {
      linstener = Appearance.addChangeListener(handleAppearanceChange);
    }

    return () => linstener?.remove();
  }, [providedTheme]);

  return (
    <ConfigProviderContext.Provider value={{ ...INITIAL_STATE, ...rest }}>
      <SafeAreaProvider>
        <ThemeProvider theme={getTheme()}>
          <PortalProvider>
            <InitializePortalRef />
            {children}
          </PortalProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </ConfigProviderContext.Provider>
  );
};

const InitializePortalRef = () => {
  const portal = usePortal();
  PortalRef.current = portal;
  return null;
};

ConfigProvider.displayName = "ConfigProvider";

export default memo(ConfigProvider);
