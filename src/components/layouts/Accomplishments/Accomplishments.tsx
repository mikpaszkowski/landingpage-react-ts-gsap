import * as React from "react";

import styled from "styled-components";
import { RecommendationItem } from "./AccomplishmentItem";
import { device } from "../../../styles/responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RecommendationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 11.1rem;
  margin: 22rem 21.9rem;
  will-change: transform;

  @media ${device.mobileMedium} {
    display: block;
    margin: 6.4rem 0;
    padding: 0 2.4rem;
  }
`;

export const Recommendation = () => {
  const { useRef, useEffect } = React;

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1440px)": function () {
        gsap.fromTo(
          sectionRef.current,
          {
            opacity: 0,
            y: "+=100",
          },
          {
            duration: 0.7,
            delay: 0.3,
            opacity: 1,
            y: 0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: `${sectionRef.current?.className}`,
              start: "top 20%",
              markers: true,
            },
          }
        );
      },

      "(max-width: 375px)": function () {
        gsap.fromTo(
          sectionRef.current,
          {
            opacity: 0,
            y: "-=60",
          },
          {
            duration: 0.5,
            delay: 0.3,
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: `${sectionRef.current?.className}`,
              start: "top+=500 20%",
              markers: true,
            },
          }
        );
      },
    });
  });

  return (
    <RecommendationWrapper ref={sectionRef}>
      <RecommendationItem
        headline="230+"
        description="Scientifically based tests"
      />
      <RecommendationItem
        headline="10,000+"
        description="Medical recommendations"
      />
      <RecommendationItem headline="25M+" description="Students learning" />
    </RecommendationWrapper>
  );
};
