import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  palette: {
    common: {
      black: "#131E07",
      white: "#FFFFFF",
      theme: "#FABD20",
      background: "#FEF4E6",
    },
    primary: {
      footerBackground: "#131E07",
      font: "#131E07",
      fontLight: "#E5E5E5",
      playButton: "#131E07",
    },
    secondary: {
      footerBackground: "#131E07",
      font: "#40462F",
      fontLight: "#7C8176",
      playButton: "#131E07",
    },
  },
};

export const darkTheme: DefaultTheme = {
  palette: {
    common: {
      black: "#131E07",
      white: "#FFFFFF",
      theme: "#FABD20",
      background: "#131E07",
    },
    primary: {
      footerBackground: "#131E07",
      font: "#FFFFFF",
      fontLight: "#E5E5E5",
      playButton: "#131E07",
    },
    secondary: {
      footerBackground: "#131E07",
      font: "#E5E5E5",
      fontLight: "#7C8176",
      playButton: "#131E07",
    },
  },
};
