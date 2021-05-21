import * as React from "react";
import styled from "styled-components";
import { PlayButton } from "./PlayButton";
import { device } from "../styles/responsive";

const VideoPlayerWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 69%;
  margin: 0 auto;
  margin-bottom: 15rem;
  padding: 0 10rem;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.26) 0%,
      rgba(0, 0, 0, 0.06) 100%
    ),
    url(${process.env.PUBLIC_URL + "/yoga-woman-image.png"});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 0.8rem;

  @media ${device.mobileMedium} {
    margin: 0 auto;
    padding: 0;
    height: 16rem;
    width: 100%;
  }
`;

export const VideoPlayer = () => {
  return (
    <VideoPlayerWrapper>
      {/* <img
        src={`${process.env.PUBLIC_URL + "/yoga-woman-image.png"}`}
        alt="imaged"
      /> */}
      <PlayButton />
    </VideoPlayerWrapper>
  );
};
