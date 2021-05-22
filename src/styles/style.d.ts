import "styled-components";

interface IPalette {
    background: string;
    footerBackground: string;
    font: string;
    fontLight: string;
    playButton: string
}

declare module "styled-components" {
    export interface DefaultTheme{
        palette: {
            common: {
                black: string;
                white: string;
                theme: string
            }
            primary: IPalette
            secondary: IPalette
        }
    }
}