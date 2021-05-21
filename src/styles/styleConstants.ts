
interface Fonts{
    primaryFont: string;
    secondaryFont: string;
}

interface Colors{
    background: string;
    footerBackground: string;
    primaryFont: string;
    secondaryFont: string;
    primaryLight: string;
    secondaryLight: string;
    primaryTheme: string;
    playButtonPolygon: string;
}

interface BreakPoints{
    mobileMedium: string;
    laptopSmall: string;
    laptopLarge: string;
}


export const fontTypes: Fonts = {
    primaryFont: "'Rozha One', serif",
    secondaryFont: "'Reem Kufi', sans-serif"
};

export const colors: Colors = {
    background: "#FEF4E6",
    footerBackground: "#131E07",
    primaryFont: "#131E07",
    secondaryFont: "#40462F",
    primaryLight: "#E5E5E5",
    secondaryLight: "#7C8176",
    primaryTheme: "#FABD20",
    playButtonPolygon: "#131E07"
}

export const breakPoints: BreakPoints = {
    mobileMedium: "375px",
    laptopSmall: "1200px",
    laptopLarge: "1440px"
}


export {}