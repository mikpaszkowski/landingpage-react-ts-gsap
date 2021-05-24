import * as React from "react";
import styled from "styled-components";
import { PlayButton } from "./PlayButton";
import { device } from "../../styles/responsive";
import { laptopLarge, mobileMedium } from "../../animations/videoPlayer";
import yogaImage from "../../assets/images/yoga-woman-image.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const VideoPlayerWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: 15rem;
  margin: 0 10rem;
  text-align: center;
  border-radius: 0.8rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.26) 0%,
    rgba(0, 0, 0, 0.06) 100%
  );

  @media ${device.tablet} {
    margin: 0 0 15rem 0;
    padding: 0;
    width: 100%;
    border-radius: 0.8rem;
  }
`;

const Image = styled.img`
  position: relative;
  z-index: -1;
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 0.8rem;
`;

export const VideoPlayer = () => {
  const { useRef, useEffect } = React;

  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1440px)": () => laptopLarge(videoRef),
      "(min-width: 500px)": () => laptopLarge(videoRef),
      "(max-width: 499px)": () => mobileMedium(videoRef),
    });
  }, []);

  return (
    <VideoPlayerWrapper ref={videoRef}>
      <Image
        src={yogaImage}
        alt="Woman as freelance worker does yoga exersice in jumper."
      />
      <PlayButton />
    </VideoPlayerWrapper>
  );
};
