import * as React from "react";
import styled from "styled-components";
import { RecommendationItem } from "./RecommendationItem";

const RecommendationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 11.1rem;
  margin: 22rem 21.8rem;
`;

export const Recommendation = () => {
  return (
    <RecommendationWrapper>
      <RecommendationItem
        headline="230+"
        description="Scientifically based tests"
      />
      <RecommendationItem
        headline="10,000+"
        description="Medical recommendations"
      />
      <RecommendationItem headline="25M+" description="Students learning" />
    </RecommendationWrapper>
  );
};
