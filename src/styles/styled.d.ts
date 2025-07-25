import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      cardBackground: string;
      text: string;
      textLight: string;
      border: string;
      error: string;
      success: string;
      warning: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    spacing: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
    };
    radii: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
    shadows: {
      card: string;
      hover: string;
    };
    fonts: {
      base: string;
    };
  }
}
