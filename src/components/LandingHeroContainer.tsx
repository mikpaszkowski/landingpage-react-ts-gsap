import * as React from "react";
import { CustomButton } from "./CustomButton";
import styled from "styled-components";
import { ReactComponent as Ellipse3 } from "../assets/svg-images/ellipse-3.svg";
import { ReactComponent as HeroImage } from "../assets/svg-images/hero-img.svg";
import { fontTypes, colors } from "../styles/styleConstants";

const LandingContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15.3rem;
`;

const HeroHeadline = styled.div`
  font-size: 8rem;
  margin-left: 0.2rem;
  width: 42.3rem;
  line-height: 117%;
`;

const HeroMessage = styled.p`
  font-size: 2.4rem;
  line-height: 3.6rem;
  font-style: normal;
  font-weight: normal;
  font-family: ${fontTypes.secondaryFont};
  color: ${colors.secondaryFont};
  margin-bottom: 3.6rem;
  margin-top: 1.6rem;
  margin-left: 0.2rem;
  width: 42rem;
`;

const GetStartedBtn = styled(CustomButton)`
  padding: 1.6rem 1rem;
  width: 25.5rem;
`;

const HeroImageStyled = styled(HeroImage)`
  align-self: flex-end;
`;

const HeroLeftHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 43.4rem;
`;

export const LandingContainer = () => {
  return (
    <LandingContainerWrapper>
      <HeroLeftHalf>
        <HeroHeadline>
          Check y<Ellipse3 />
          ur well-being
        </HeroHeadline>
        <HeroMessage>
          We’re sure that deciding to check on your health is a big step, even
          if it doesn’t bother in any way.
        </HeroMessage>
        <GetStartedBtn fontsize="2.5rem" lineHeight="3.7rem">
          Get started
        </GetStartedBtn>
      </HeroLeftHalf>
      <HeroImageStyled />
    </LandingContainerWrapper>
  );
};
