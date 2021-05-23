import React from "react";
import { useDarkMode } from "./customHooks/useDarkMode";
import styled from "styled-components";
import { Home } from "./components/pages/Home";
import { ToggleThemeButton } from "./components/ToggleThemeButton";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import StyleGlobal from "./styles/styleGlobal";

const AppWrapper = styled.div`
  display: block;
  max-width: 144rem;
  height: auto;
  margin: 0 auto;
  position: relative;
`;

export const App = () => {
  const [theme, setTheme] = React.useState(lightTheme);

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  //const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme}>
      <>
        <StyleGlobal />
        <AppWrapper>
          <ToggleThemeButton onClick={toggleTheme} theme={theme} />
          <Home />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
