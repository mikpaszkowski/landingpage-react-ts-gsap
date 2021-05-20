import * as React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { LandingContainer } from "./LandingHeroContainer";

const LandingPageWrapper = styled.div`
  padding: 0 16.7rem;
`;

export const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <Header />
      <LandingContainer />
    </LandingPageWrapper>
  );
};
