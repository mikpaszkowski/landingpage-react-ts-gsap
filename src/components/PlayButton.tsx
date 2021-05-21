import * as React from "react";
import styled from "styled-components";
import { ReactComponent as PlayPolygon } from "../assets/images/svg-images/playButtonPolygon.svg";
import { ReactComponent as PlayPolygonSmall } from "../assets/images/svg-images/playButtonPolygonSmall.svg";
import { device } from "../styles/responsive";

const PlayButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 13rem;
  height: 13rem;
  transform: translate(-50%, -50%);
  cursor: pointer;
  background-color: rgba(254, 244, 230, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 50%;

  @media ${device.mobileMedium} {
    width: 7.8rem;
    height: 7.8rem;
  }
`;

const PlayBtnWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5.8rem;
  height: 5.8rem;

  @media ${device.mobileMedium} {
    width: 3.48rem;
    height: 3.48rem;
  }
`;
const PlayPolygonStyled = styled(PlayPolygon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0.35rem;

  @media ${device.mobileMedium} {
    display: none;
  }
`;

const PlayPolygonSmallStyled = styled(PlayPolygonSmall)`
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0.35rem;

  @media ${device.mobileMedium} {
    display: block;
  }
`;

export const PlayButton = () => {
  return (
    <PlayButtonWrapper>
      <PlayBtnWrapper>
        <PlayPolygonStyled />
      </PlayBtnWrapper>
      <PlayPolygonSmallStyled />
    </PlayButtonWrapper>
  );
};
