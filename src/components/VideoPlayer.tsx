import * as React from "react";
import styled from "styled-components";
import { PlayButton } from "./PlayButton";

const VideoPlayerWrapper = styled.div`
  height: auto;
  margin: 0 auto;
  margin: 0 10rem 15rem 10rem;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
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
