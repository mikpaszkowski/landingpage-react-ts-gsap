interface Fonts {
  primaryFont: string;
  secondaryFont: string;
}

interface BreakPoints {
  mobileSmall: string;
  mobileMedium: string;
  mobileLarge: string;
  tablet: string;
  tabletLarge: string;
  laptopSmall: string;
  laptopLarge: string;
}

export const fontTypes: Fonts = {
  primaryFont: "'Rozha One', serif",
  secondaryFont: "'Reem Kufi', sans-serif",
};

export const breakPoints: BreakPoints = {
  mobileSmall: "320px",
  mobileMedium: "375px",
  mobileLarge: "525px",
  tablet: "768px",
  tabletLarge: "1110px",
  laptopSmall: "1280px",
  laptopLarge: "1440px",
};

export {};
