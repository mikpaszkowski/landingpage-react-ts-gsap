import React from "react";
import styled from "styled-components";
import { LandingPage } from "./components/LandingPage";
import { Recommendation } from "./components/Recommendation";
import { VideoContainer } from "./components/VideoContainer";
import { BenefitsContainer } from "./components/BenefitContainer";
import { Footer } from "./components/Footer";

const AppWrapper = styled.div`
  display: block;
  max-width: 144rem;
  margin: 0 auto;
  position: relative;
`;

function App() {
  return (
    <AppWrapper>
      <LandingPage />
      <Recommendation />
      <VideoContainer />
      <BenefitsContainer />
      <Footer />
    </AppWrapper>
  );
}

export default App;
