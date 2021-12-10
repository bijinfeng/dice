type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type Font = {
  fontFamily: string;
  fontWeight?: FontWeight;
};

export type Fonts = {
  regular: Font;
  medium: Font;
  light: Font;
  thin: Font;
};

type Mode = 'adaptive' | 'exact';

export type $Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type $RemoveChildren<T extends React.ComponentType<any>> = $Omit<
  React.ComponentPropsWithoutRef<T>,
  'children'
>;

export type EllipsizeProp = 'head' | 'middle' | 'tail' | 'clip';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace DiceUI {
    interface Theme {
      dark: boolean;
      mode?: Mode;
      roundness: number;
      colors: {
        primary: string;
        background: string;
        surface: string;
        accent: string;
        error: string;
        text: string;
        gray1: string;
        textSecondary: string;
        onSurface: string;
        disabled: string;
        placeholder: string;
        backdrop: string;
        notification: string;
        content: string;
        contentBackground: string;
        popupBackground: string;
        popupText: string;

        black: string;
        white: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        red: string;
        blue: string;
        orange: string;
        orangeDark: string;
        orangeLight: string;
        green: string;

        primaryColor: string;
        successColor: string;
        dangerColor: string;
        warningColor: string;
        textColor: string;
        textColor2: string;
        textColor3: string;
        textLinkColor: string;
        activeColor: string;
        activeOpacity: number;
        disabledOpacity: number;
        backgroundColor: string;
        backgroundColorLight: string;
      };
      fonts: Fonts;
      animation: {
        scale: number;
      };
      border: {
        color: string;
        widthBase: number;
        radiusSm: number;
        radiusMd: number;
        radiusLg: number;
        radiusMax: number;
      };
      padding: {
        base: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
      font: {
        fontSizeXs: number;
        fontSizeSm: number;
        fontSizeMd: number;
        fontSizeLg: number;
        fontWeightBold: FontWeight;
        lineHeightXs: number;
        lineHeightSm: number;
        lineHeightMd: number;
        lineHeightLg: number;
      };
    }
  }
}
