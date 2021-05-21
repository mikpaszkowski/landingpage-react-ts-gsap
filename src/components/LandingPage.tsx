import * as React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { LandingContainer } from "./LandingHeroContainer";
import { device } from "../styles/responsive";

const LandingPageWrapper = styled.div`
  padding: 0 16.7rem;

  @media ${device.mobileMedium} {
    padding: 0 2.4rem;
  }
`;

export const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <Header />
      <LandingContainer />
    </LandingPageWrapper>
  );
};
