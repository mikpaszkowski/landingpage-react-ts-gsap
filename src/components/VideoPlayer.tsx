import * as React from "react";
import styled from "styled-components";
import { PlayButton } from "./PlayButton";
import { device } from "../styles/responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

  @media ${device.mobileMedium} {
    margin: 0 auto;
    padding: 0;
    height: 15.7rem;
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
      "(min-width: 1440px)": function () {
        gsap.fromTo(
          videoRef.current,
          {
            opacity: 0,
            y: "-=120",
          },
          {
            duration: 1.2,
            delay: 0.5,
            opacity: 1,
            y: 0,
            ease: "expo.out",
            scrollTrigger: {
              trigger: `${videoRef.current?.className}`,
              start: "center-=800 20%",
              markers: true,
            },
          }
        );
      },

      "(max-width: 375px)": function () {
        gsap.fromTo(
          videoRef.current,
          {
            opacity: 0,
            y: "-=30",
          },
          {
            duration: 1.2,
            delay: 1,
            opacity: 1,
            y: 0,
            ease: "expo.out",
            scrollTrigger: {
              trigger: `${videoRef.current?.className}`,
              start: "center+=150 center+=100",
              markers: true,
            },
          }
        );
      },
    });
  }, []);

  return (
    <VideoPlayerWrapper ref={videoRef}>
      <Image src={`${process.env.PUBLIC_URL + "/yoga-woman-image.png"}`} />
      <PlayButton />
    </VideoPlayerWrapper>
  );
};
