import React from "react";
import styled from "styled-components";
import { Home } from "./components/pages/Home";

const AppWrapper = styled.div`
  display: block;
  max-width: 144rem;
  margin: 0 auto;
  position: relative;
`;

function App() {
  return (
    <AppWrapper>
      <Home />
    </AppWrapper>
  );
}

export default App;
