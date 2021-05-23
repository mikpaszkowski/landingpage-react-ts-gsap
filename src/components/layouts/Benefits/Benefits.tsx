import * as React from "react";
import { BenefitInfoCard } from "./BenefitInfoCard";
import styled from "styled-components";
import { ReactComponent as FirstBenefitImage } from "./benefit-1.svg";
import { ReactComponent as SecondBenefitImage } from "./benefit-2.svg";
import { ReactComponent as ThirdBenefitImage } from "./benefit-3.svg";
import { device } from "../../../styles/responsive";

import { laptopLarge, mobileMedium } from "../../../animations/benefitCards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const BenefitsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  opacity: 1;

  @media ${device.mobileMedium} {
    display: block;
    padding: 0 2.4rem;
    margin-top: 3.6rem;
  }
`;

const benefitCardsContent = [
  {
    id: 1,
    headline: "1 FREE chat session",
    description: "Start with a free text based chat session online",
    image: FirstBenefitImage,
  },
  {
    id: 2,
    headline: "Personal Coach",
    description: "A dedicated coach to help you through your journey",
    image: SecondBenefitImage,
  },
  {
    id: 3,
    headline: "Text chat session",
    description: "An excellent way of preaparing a projects wireframe",
    image: ThirdBenefitImage,
  },
];

export const Benefits = () => {
  const { useRef, useEffect } = React;

  const benefitsRef = useRef<HTMLDivElement>(null);
  const benefitsCardsRef = useRef<Array<HTMLDivElement>>([]);
  benefitsCardsRef.current = [];

  const addToRefs = (el: any) => {
    if (el && !benefitsCardsRef.current.includes(el)) {
      benefitsCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1440px)": function () {
        benefitsCardsRef.current.forEach((card) => laptopLarge(card));
      },
      "(max-width: 375px)": function () {
        benefitsCardsRef.current.forEach((card) => mobileMedium(card));
      },
    });
  }, []);

  return (
    <BenefitsWrapper ref={benefitsRef}>
      {benefitCardsContent.map(({ id, ...props }) => (
        <BenefitInfoCard
          id={`benefit-card${id}`}
          key={id}
          {...props}
          ref={addToRefs}
        />
      ))}
    </BenefitsWrapper>
  );
};
