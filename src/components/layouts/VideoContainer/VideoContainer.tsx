import * as React from "react";
import styled from "styled-components";
import { fontTypes } from "../../../styles/constants";
import { VideoPlayer } from "./VideoPlayer";

import {
  laptopLargeHeadline,
  laptopLargeText,
  mobileMediumHeadline,
  mobileMediumText,
} from "../../../animations/videoContainer";
import { device } from "../../../styles/responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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

  @media ${device.tabletLarge} {
    height: 43.7rem;
  }

  @media ${device.tablet} {
    height: 50rem;
  }

  @media ${device.mobileLarge} {
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

  @media ${device.tabletLarge} {
    font-size: 6rem;
    text-align: center;
    margin: 0 8rem 3.7rem 8rem;
  }

  @media ${device.mobileLarge} {
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

  @media ${device.laptopLarge} {
    font-size: 2rem;
    text-align: center;
    margin: 0 15rem 4rem 15rem;
    margin-bottom: 7.5rem;
  }

  @media ${device.mobileLarge} {
    text-align: left;
    margin: 0;
    margin-bottom: 7.5rem;
  }
`;

export const VideoContainer = () => {
  const { useRef, useEffect } = React;

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textSectionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1440px)": function () {
        laptopLargeHeadline(headlineRef);
        laptopLargeText(textSectionRef);
      },

      "(min-width: 500px)": function () {
        laptopLargeHeadline(headlineRef);
        laptopLargeText(textSectionRef);
      },

      "(max-width: 499px)": function () {
        mobileMediumHeadline(headlineRef);
        mobileMediumText(textSectionRef);
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
