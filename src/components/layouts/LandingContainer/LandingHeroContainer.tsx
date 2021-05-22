import * as React from "react";
import { CustomButton } from "../../ReusableComponents/CustomButton";
import styled from "styled-components";
import { ReactComponent as Ellipse3 } from "./ellipse-3.svg";
import { ReactComponent as HeroImage } from "./hero-img.svg";
import { fontTypes, colors } from "../../../styles/styleConstants";
import { device } from "../../../styles/responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LandingContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 27.1rem;

  @media ${device.laptopLarge} {
    flex-direction: row;
  }

  @media ${device.laptopSmall} {
    flex-direction: column-reverse;
  }

  @media ${device.mobileMedium} {
    flex-direction: column-reverse;
    margin-top: 4.8rem;
  }
`;

const HeroHeadline = styled.div`
  font-size: 8rem;
  margin-left: 0.2rem;
  line-height: 117%;

  @media ${device.mobileMedium} {
    font-size: 5rem;
  }
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

  @media ${device.mobileMedium} {
    text-align: left;
    font-size: 2rem;
    line-height: 3rem;
    width: 100%;
  }
`;

const GetStartedBtn = styled(CustomButton)`
  padding: 1.6rem 1rem;
  width: 25.5rem;

  @media ${device.mobileMedium} {
    width: 100%;
  }
`;

const HeroImageStyled = styled(HeroImage)`
  align-self: flex-end;
`;

const HeroLeftHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.laptopSmall} {
    flex-direction: column;
    margin-top: 4.2rem;
  }

  @media ${device.mobileMedium} {
    margin-top: 4.2rem;
    flex-direction: column;
  }
`;

const Ellipse3Styled = styled(Ellipse3)`
  @media ${device.mobileMedium} {
    width: 2.7rem;
    height: 2rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  align-self: flex-end;
`;

export const LandingHeroContainer = () => {
  const { useRef, useEffect } = React;

  const leftScetionRef = useRef<HTMLDivElement>(null);
  const rightScetionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1440px)": function () {
        gsap.fromTo(
          leftScetionRef.current,
          {
            opacity: 0,
            x: "-=60",
          },
          {
            duration: 1,
            delay: 0.5,
            opacity: 1,
            x: 0,
            ease: "expo.out",
          }
        );

        gsap.fromTo(
          rightScetionRef.current,
          {
            opacity: 0,
            x: "+=60",
          },
          {
            duration: 1,
            delay: 0.5,
            opacity: 1,
            x: 0,
            ease: "expo.out",
          }
        );
      },

      "(max-width: 375px)": function () {
        gsap.fromTo(
          leftScetionRef.current,
          {
            opacity: 0,
            x: "-=30",
          },
          {
            duration: 1,
            delay: 0.5,
            opacity: 1,
            x: 0,
            ease: "expo.out",
          }
        );

        gsap.fromTo(
          rightScetionRef.current,
          {
            opacity: 0,
            x: "+=30",
          },
          {
            duration: 1,
            delay: 0.5,
            opacity: 1,
            x: 0,
            ease: "expo.out",
          }
        );
      },
    });
  });
  return (
    <LandingContainerWrapper>
      <HeroLeftHalf ref={leftScetionRef}>
        <HeroHeadline>
          Check y<Ellipse3Styled />
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
      <ImageWrapper ref={rightScetionRef}>
        <HeroImageStyled />
      </ImageWrapper>
    </LandingContainerWrapper>
  );
};
