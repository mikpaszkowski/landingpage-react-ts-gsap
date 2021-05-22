import * as React from "react";
import styled from "styled-components";
import { LandingHeroContainer } from "./LandingHeroContainer";
import { device } from "../../../styles/responsive";

const LandingPageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 16.7rem;

  @media ${device.mobileMedium} {
    padding: 0 2.4rem;
  }
`;

export const LandingContainer = () => {
  return (
    <LandingPageWrapper>
      <LandingHeroContainer />
    </LandingPageWrapper>
  );
};
