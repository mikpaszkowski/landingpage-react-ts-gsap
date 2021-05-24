import * as React from "react";
import { BenefitInfoCard } from "./BenefitInfoCard";
import styled from "styled-components";
import { device } from "../../../styles/responsive";

import { laptopLarge, mobileMedium } from "../../../animations/benefitCards";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const BenefitsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  opacity: 1;

  @media ${device.laptopSmall} {
    display: block;
    margin-top: 3.6rem;
  }
`;

interface IBenefitCardsContent {
  id: number;
  headline: string;
  description: string;
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface BenefitsProps {
  benefitCardsContent: Array<IBenefitCardsContent>;
}

export const Benefits = ({ benefitCardsContent }: BenefitsProps) => {
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
      "(min-width: 500px)": function () {
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
