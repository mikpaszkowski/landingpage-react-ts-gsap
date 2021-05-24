import React from "react";
import { useTheme } from "./hooks/useTheme";
import styled from "styled-components";
import { Home } from "./pages/Home";
import { ToggleThemeButton } from "./components/ToggleThemeButton";
import { ThemeProvider } from "styled-components";
import StyleGlobal from "./styles/styleGlobal";

const AppWrapper = styled.div`
  display: block;
  max-width: 144rem;
  height: auto;
  margin: 0 auto;
  position: relative;
`;

export const App = () => {
  const { theme, toggleTheme } = useTheme();

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
