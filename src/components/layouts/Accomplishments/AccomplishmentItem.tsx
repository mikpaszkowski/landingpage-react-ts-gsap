import * as React from "react";
import styled from "styled-components";
import { fontTypes } from "../../../styles/constants";
import { device } from "../../../styles/responsive";

const AccomplishmentItemWrapper = styled.div``;

const Headline = styled.h1`
  display: block;
  font-family: ${fontTypes.primaryFont};
  font-style: normal;
  font-weight: normal;
  font-size: 8rem;
  line-height: 117%;
  margin-bottom: 1.6rem;
  text-align: center;
  font-feature-settings: "haln" on;
  color: ${({ theme }) => theme.palette.common.theme};

  @media ${device.mobileMedium} {
    margin-bottom: 0.6rem;
  }
`;

const Description = styled.p`
  display: block;
  font-family: ${fontTypes.secondaryFont};
  font-style: normal;
  font-weight: normal;
  font-size: 2.4rem;
  line-height: 3.6rem;
  margin: 0 4rem;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.font};
`;

interface AccomplishmentProps {
  headline: string;
  description: string;
}

export const AccomplishmentItem = ({
  headline,
  description,
}: AccomplishmentProps) => {
  return (
    <AccomplishmentItemWrapper>
      <Headline>{headline}</Headline>
      <Description>{description}</Description>
    </AccomplishmentItemWrapper>
  );
};
