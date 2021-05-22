import * as React from "react";
import styled from "styled-components";
import { fontTypes } from "../styles/styleConstants";
import { device } from "../styles/responsive";

const BenefitInfoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

const HeadLine = styled.h1`
  font-family: ${fontTypes.primaryFont};
  font-size: 2.4rem;
  padding-top: 8.1rem;
  margin-bottom: 1.6rem;
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
  font-size: 1.8rem;
  line-height: 2.7rem;
  text-align: center;
  margin: 0 7rem;
  margin-bottom: 4.5rem;
`;

const imageCenteringStyle = {
  margin: "0 auto",
  marginTop: "4.5rem",
};

interface BenefitInfoCardProps {
  headline: string;
  description: string;
  image: any;
  ref?: React.RefObject<HTMLDivElement>;
  id?: string;
}

export const BenefitInfoCard = React.forwardRef<
  HTMLDivElement,
  BenefitInfoCardProps
>((props, ref) => {
  const { useRef } = React;

  const BenefitImage = props.image;

  return (
    <BenefitInfoCardWrapper ref={ref} id={props.id}>
      <BenefitImage style={imageCenteringStyle} />
      <HeadLine>{props.headline}</HeadLine>
      <Text>{props.description}</Text>
    </BenefitInfoCardWrapper>
  );
});
