import * as React from "react";
import styled from "styled-components";
import { fontTypes } from "../../styles/constants";
import { device } from "../../styles/responsive";
import { lightTheme } from "../../styles/theme";

const BenefitInfoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  height: 45rem;
  border-radius: 8px;
  background-color: ${({ theme }) =>
    theme === lightTheme
      ? theme.palette.common.white
      : theme.palette.common.black};
  transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  will-change: transform;

  &:hover {
    box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.25);
    transform: translateY(1rem);
  }

  @media ${device.mobileMedium} {
    margin-bottom: 4rem;
  }
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
  color: ${({ theme }) => theme.palette.primary.font};
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

  @media ${device.mobileMedium} {
    margin: 0 auto;
    margin-bottom: 4.5rem;
    width: 23rem;
  }
`;

const imageCenteringStyle = {
  margin: "0 auto",
  marginTop: "4.5rem",
};

interface IBenefitInfoCardProps {
  headline: string;
  description: string;
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  ref?: React.RefObject<HTMLDivElement>;
  id?: string;
}

export const BenefitInfoCard = React.forwardRef<
  HTMLDivElement,
  IBenefitInfoCardProps
>(({ image, id, headline, description }, ref) => {
  const BenefitImage = image;

  return (
    <BenefitInfoCardWrapper ref={ref} id={id}>
      <BenefitImage style={imageCenteringStyle} />
      <HeadLine>{headline}</HeadLine>
      <Text>{description}</Text>
    </BenefitInfoCardWrapper>
  );
});
