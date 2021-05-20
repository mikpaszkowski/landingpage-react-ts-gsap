//Here is the container with the grid contains all of the benefits from the service
import * as React from "react";
import styled from "styled-components";
import { colors, fontTypes } from "../styles/styleConstants";
import { Benefits } from "./Benefits";

const HeadLine = styled.h1`
  font-family: ${fontTypes.primaryFont};
  font-size: 8rem;
  padding-top: 6.4rem;
  margin-bottom: 1.6rem;
  font-style: normal;
  font-weight: normal;
  line-height: 117%;
  text-align: left;
  font-feature-settings: "haln" on;
`;

const Text = styled.p`
  font-family: ${fontTypes.secondaryFont};
  font-style: normal;
  font-weight: normal;
  font-size: 2.4rem;
  line-height: 3.6rem;
  text-align: left;
  margin-bottom: 7.2rem;
  width: 59.6rem;
`;

const BenefitsWrapper = styled.div`
  margin: 0 16.5rem 11.4rem 16.5rem;
`;

export const BenefitsContainer = () => {
  return (
    <BenefitsWrapper>
      <HeadLine>What you’re getting?</HeadLine>
      <Text>
        We bring you personalized development programs that are backed by
        research and crafted from the years of experience
      </Text>
      <Benefits />
    </BenefitsWrapper>
  );
};
