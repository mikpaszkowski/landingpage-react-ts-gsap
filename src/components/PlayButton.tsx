import * as React from "react";
import styled from "styled-components";
import { ReactComponent as PlayPolygon } from "../assets/svg-images/playButtonPolygon.svg";

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
`;

const PlayBtnWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5.8rem;
  height: 5.8rem;
`;
const PlayPolygonStyled = styled(PlayPolygon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0.35rem;
`;

export const PlayButton = () => {
  return (
    <PlayButtonWrapper>
      <PlayBtnWrapper>
        <PlayPolygonStyled />
      </PlayBtnWrapper>
    </PlayButtonWrapper>
  );
};
