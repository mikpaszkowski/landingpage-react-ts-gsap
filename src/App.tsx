import React from "react";
import styled from "styled-components";
import { LandingPage } from "./components/LandingPage";
import { Recommendation } from "./components/Recommendation";
import { VideoContainer } from "./components/VideoContainer";
import { BenefitsContainer } from "./components/BenefitContainer";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const AppWrapper = styled.div`
  display: block;
  max-width: 144rem;
  margin: 0 auto;
  position: relative;
`;

const { useRef, useEffect } = React;

function App() {
  const benefitRef = React.useRef();

  useEffect(() => {
    console.log(benefitRef);
  }, [benefitRef]);

  return (
    <AppWrapper>
      <Header />
      <LandingPage />
      <Recommendation />
      <VideoContainer />
      <BenefitsContainer />
      <Footer />
    </AppWrapper>
  );
}

export default App;
