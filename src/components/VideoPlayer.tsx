import * as React from "react";
import styled from "styled-components";
import { PlayButton } from "./PlayButton";
import { device } from "../styles/responsive";

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
  return (
    <VideoPlayerWrapper>
      <Image src={`${process.env.PUBLIC_URL + "/yoga-woman-image.png"}`} />
      <PlayButton />
    </VideoPlayerWrapper>
  );
};
