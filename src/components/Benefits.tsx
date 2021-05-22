import * as React from "react";
import { BenefitInfoCard } from "./BenefitInfoCard";
import styled from "styled-components";
import { ReactComponent as FirstBenefitImage } from "../assets/images/svg-images/benefit-1.svg";
import { ReactComponent as SecondBenefitImage } from "../assets/images/svg-images/benefit-2.svg";
import { ReactComponent as ThirdBenefitImage } from "../assets/images/svg-images/benefit-3.svg";
import { device } from "../styles/responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const BenefitsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  opacity: 1;

  @media ${device.mobileMedium} {
    display: block;
    padding: 0 2.4rem;
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
  const { useRef, useEffect, useState } = React;

  const benefitsRef = useRef<HTMLDivElement>(null);
  const benefitsCardsRef = useRef<Array<HTMLDivElement>>([]);
  benefitsCardsRef.current = [];

  const addToRefs = (el: any) => {
    if (el && !benefitsCardsRef.current.includes(el)) {
      benefitsCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    console.log(benefitsCardsRef.current);
    ScrollTrigger.matchMedia({
      "(min-width: 1440px)": function () {
        benefitsCardsRef.current.forEach((card) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: "+=100",
            },
            {
              duration: 1,
              delay: 1,
              opacity: 1,
              y: 0,
              ease: "none",
              stagger: 1,
              scrollTrigger: {
                id: "benefitCard",
                trigger: `${card?.id}`,
                start: "center+=150 20%",
                markers: true,
              },
            }
          );
        });
      },
      "(max-width: 375px)": function () {
        benefitsCardsRef.current.forEach((card) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: "-=30",
            },
            {
              duration: 0.5,
              delay: 0.3,
              opacity: 1,
              y: 0,
              ease: "power4.out",
              scrollTrigger: {
                id: "benefitCard",
                trigger: `${card?.className}`,
                start: "top+=1700 10%",
                markers: true,
              },
            }
          );
        });
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
