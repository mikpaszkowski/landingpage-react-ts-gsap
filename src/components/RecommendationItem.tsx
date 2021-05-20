import * as React from "react";
import styled from "styled-components";
import { colors, fontTypes } from "../styles/styleConstants";

const RecommandationItemWrapper = styled.div``;

const Headline = styled.p`
  display: block;
  font-family: ${fontTypes.primaryFont};
  font-style: normal;
  font-weight: normal;
  font-size: 8rem;
  line-height: 117%;
  margin-bottom: 1.6rem;
  text-align: center;
  font-feature-settings: "haln" on;
  color: ${colors.primaryTheme};
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
  color: ${colors.primaryFont};
`;

interface RecommendationProps {
  headline: string;
  description: string;
}

export const RecommendationItem = ({
  headline,
  description,
}: RecommendationProps) => {
  return (
    <RecommandationItemWrapper>
      <Headline>{headline}</Headline>
      <Description>{description}</Description>
    </RecommandationItemWrapper>
  );
};
