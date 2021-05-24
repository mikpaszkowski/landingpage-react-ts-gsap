//Here is the container with the grid contains all of the benefits from the service
import * as React from "react";
import styled from "styled-components";
import { fontTypes } from "../../../styles/constants";
import { Benefits } from "./Benefits";
import { device } from "../../../styles/responsive";
import { benefitCardsContent } from "../../staticContents/benefits/beneifts";
import {
  laptopLarge,
  mobileMedium,
} from "../../../animations/benefitContainer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

  @media ${device.mobileLarge} {
    font-size: 5rem;
    margin-bottom: 3.6rem;
  }
`;

const Text = styled.span`
  font-family: ${fontTypes.secondaryFont};
  font-style: normal;
  font-weight: normal;
  font-size: 2.4rem;
  line-height: 3.6rem;
  text-align: left;
  margin-bottom: 7.2rem;
  width: 59.6rem;

  @media ${device.mobileMedium} {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const BenefitsWrapper = styled.div`
  margin: 0 16.5rem 11.4rem 16.5rem;
  will-change: transform;

  @media ${device.laptopSmall} {
    margin: 0 6rem;
  }

  @media ${device.mobileLarge} {
    margin: 0 2.4rem 6.4rem 2.4rem;
  }
`;

export const BenefitContainer = () => {
  const { useRef, useEffect } = React;

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1440px)": () => laptopLarge(sectionRef),
      "(min-width: 500px)": () => laptopLarge(sectionRef),
      "(max-width: 499px)": () => mobileMedium(sectionRef),
    });
  });

  return (
    <BenefitsWrapper ref={sectionRef}>
      <HeadLine>What you’re getting?</HeadLine>
      <Text>
        We bring you personalized development programs that are backed by
        research and crafted from the years of experience
      </Text>
      <Benefits benefitCardsContent={benefitCardsContent} />
    </BenefitsWrapper>
  );
};
