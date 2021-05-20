import * as React from "react";
import styled from "styled-components";
import { colors, fontTypes } from "../styles/styleConstants";
import { VideoPlayer } from "../components/VideoPlayer";

const VideoContainerWrapper = styled.div`
  width: 100%;
  height: 81.1rem;
  background-color: ${colors.primaryTheme};
  position: relative;
  overflow: visible;
  margin-bottom: 36.3rem;
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
`;

const Text = styled.p`
  font-family: ${fontTypes.secondaryFont};
  font-style: normal;
  font-weight: normal;
  font-size: 2.4rem;
  line-height: 3.6rem;
  text-align: center;
  margin: 4rem 53.5rem 5.6rem 53.5rem;
`;

export const VideoContainer = () => {
  return (
    <VideoContainerWrapper>
      <HeadLine>What our community is saying?</HeadLine>
      <Text>
        A mission-driven company that invest in and builds healthier living
      </Text>
      <VideoPlayer />
    </VideoContainerWrapper>
  );
};