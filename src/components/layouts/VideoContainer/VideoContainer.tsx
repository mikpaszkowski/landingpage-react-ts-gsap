import * as React from "react";
import styled from "styled-components";
import { fontTypes } from "../../../styles/styleConstants";
import { VideoPlayer } from "./VideoPlayer";
import { device } from "../../../styles/responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const VideoContainerWrapper = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 81.1rem;
  background-color: ${({ theme }) => theme.palette.common.theme};
  position: relative;
  overflow: visible;
  margin-bottom: 36.3rem;

  @media ${device.mobileMedium} {
    padding: 0 2.4rem;
    margin-bottom: 13.7rem;
    height: 49.7rem;
  }
`;

const HeadLine = styled.h1`
  font-family: ${fontTypes.primaryFont};
  font-size: 8rem;
  padding-top: 6.4rem;
  margin: 0 30rem 4rem 30rem;
  font-style: normal;
  font-weight: normal;
  line-height: 117%;
  text-align: center;
  font-feature-settings: "haln" on;

  @media ${device.mobileMedium} {
    font-size: 5rem;
    text-align: left;
    margin: 0;
    margin-bottom: 3.7rem;
  }
`;

const Text = styled.p`
  font-family: ${fontTypes.secondaryFont};
  font-style: normal;
  font-weight: normal;
  font-size: 2.4rem;
  line-height: 3.6rem;
  text-align: center;
  margin: 4rem 53.5rem 5.6rem 53.5rem;

  @media ${device.mobileMedium} {
    font-size: 2rem;
    text-align: left;
    margin: 0;
    margin-bottom: 7.2rem;
  }
`;

export const VideoContainer = () => {
  const { useRef, useEffect } = React;

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textSectionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1440px)": function () {
        gsap.fromTo(
          headlineRef.current,
          {
            opacity: 0,
            x: "-=80",
          },
          {
            duration: 1,
            delay: 0.2,
            opacity: 1,
            x: 0,
            ease: "easeInOut",
            scrollTrigger: {
              trigger: `${headlineRef.current?.className}`,
              start: "center-=1000 40%",
              markers: true,
            },
          }
        );

        gsap.fromTo(
          textSectionRef.current,
          {
            opacity: 0,
            x: "+=80",
          },
          {
            duration: 1,
            delay: 0.6,
            opacity: 1,
            x: 0,
            ease: "expo.out",
            scrollTrigger: {
              trigger: `${textSectionRef.current?.className}`,
              start: "center-=1000 20%",
              markers: true,
            },
          }
        );
      },

      "(max-width: 375px)": function () {
        gsap.fromTo(
          headlineRef.current,
          {
            opacity: 0,
            y: "-=30",
          },
          {
            duration: 1,
            delay: 0.5,
            opacity: 1,
            y: 0,
            ease: "expo.out",
            scrollTrigger: {
              trigger: `${headlineRef.current?.className}`,
              start: "center+=150 center+=100",
              markers: true,
            },
          }
        );

        gsap.fromTo(
          textSectionRef.current,
          {
            opacity: 0,
            y: "+=30",
          },
          {
            duration: 1,
            delay: 0.6,
            opacity: 1,
            y: 0,
            ease: "expo.out",
            scrollTrigger: {
              trigger: `${textSectionRef.current?.className}`,
              start: "center-=1000 20%",
              markers: true,
            },
          }
        );
      },
    });
  }, []);

  return (
    <VideoContainerWrapper>
      <HeadLine ref={headlineRef}>What our community is saying?</HeadLine>
      <Text ref={textSectionRef}>
        A mission-driven company that invest in and builds healthier living
      </Text>
      <VideoPlayer />
    </VideoContainerWrapper>
  );
};
