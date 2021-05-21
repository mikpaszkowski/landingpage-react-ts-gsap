import * as React from "react";
import styled from "styled-components";
import { PlayButton } from "./PlayButton";
import { device } from "../styles/responsive";

const VideoPlayerWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  margin: 0 10rem 15rem 10rem;

  & > img {
    width: 100%;
    border-radius: 0.8rem;
  }

  @media ${device.mobileMedium} {
    margin: 0 auto;
  }
`;

export const VideoPlayer = () => {
  return (
    <VideoPlayerWrapper>
      <img
        src={`${process.env.PUBLIC_URL + "/yoga-woman-image.png"}`}
        alt="imaged"
      />
      <PlayButton />
    </VideoPlayerWrapper>
  );
};
