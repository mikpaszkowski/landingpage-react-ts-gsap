import * as React from "react";
import styled from "styled-components";
import { colors, fontTypes } from "../styles/styleConstants";
import { VideoPlayer } from "../components/VideoPlayer";
import { device } from "../styles/responsive";

const VideoContainerWrapper = styled.div`
  width: 100%;
  background-color: ${colors.primaryTheme};
  position: relative;
  overflow: visible;
  margin-bottom: 36.3rem;

  @media ${device.mobileMedium} {
    padding: 0 2.4rem;
    margin-bottom: 13.7rem;
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
    margin-bottom: 5.6rem;
  }
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
