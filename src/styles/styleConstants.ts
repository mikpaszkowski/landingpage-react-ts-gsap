interface Fonts {
  primaryFont: string;
  secondaryFont: string;
}

interface BreakPoints {
  mobileMedium: string;
  laptopSmall: string;
  laptopLarge: string;
}

export const fontTypes: Fonts = {
  primaryFont: "'Rozha One', serif",
  secondaryFont: "'Reem Kufi', sans-serif",
};

export const breakPoints: BreakPoints = {
  mobileMedium: "375px",
  laptopSmall: "1200px",
  laptopLarge: "1440px",
};

export {};
