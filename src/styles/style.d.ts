import "styled-components";

interface IPalette {
  footerBackground: string;
  font: string;
  fontLight: string;
  playButton: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
        theme: string;
        background: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
