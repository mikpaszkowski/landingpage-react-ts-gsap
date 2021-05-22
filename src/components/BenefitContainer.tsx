//Here is the container with the grid contains all of the benefits from the service
import * as React from "react";
import styled from "styled-components";
import { colors, fontTypes } from "../styles/styleConstants";
import { Benefits } from "./Benefits";
import { device } from "../styles/responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

  @media ${device.mobileMedium} {
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

  @media ${device.mobileMedium} {
    margin: 0 2.4rem 6.4rem 2.4rem;
  }
`;

export const BenefitsContainer = () => {
  const { useRef, useEffect } = React;

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(window.innerWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1440px)": function () {
        gsap.fromTo(
          sectionRef.current,
          {
            opacity: 0,
            y: "-=100",
          },
          {
            duration: 1,
            delay: 0.3,
            opacity: 1,
            y: 0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: `${sectionRef.current?.className}`,
              start: "center+=150 center+=100",
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
            y: "-=30",
          },
          {
            duration: 0.5,
            delay: 0.3,
            opacity: 1,
            y: 0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: `${sectionRef.current?.className}`,
              start: "top+=1700 20%",
              markers: true,
            },
          }
        );
      },
    });
  });

  return (
    <BenefitsWrapper ref={sectionRef}>
      <HeadLine>What you’re getting?</HeadLine>
      <Text>
        We bring you personalized development programs that are backed by
        research and crafted from the years of experience
      </Text>
      <Benefits />
    </BenefitsWrapper>
  );
};
