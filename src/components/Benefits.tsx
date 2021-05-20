import * as React from "react";
import { BenefitInfoCard } from "./BenefitInfoCard";
import styled from "styled-components";
import { ReactComponent as FirstBenefitImage } from "../assets/images/svg-images/benefit-1.svg";
import { ReactComponent as SecondBenefitImage } from "../assets/images/svg-images/benefit-2.svg";
import { ReactComponent as ThirdBenefitImage } from "../assets/images/svg-images/benefit-3.svg";

const BenefitsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
`;

export const Benefits = () => {
  return (
    <BenefitsWrapper>
      <BenefitInfoCard
        headline="1 FREE chat session"
        description="Start with a free text based chat session online"
        image={FirstBenefitImage}
      />
      <BenefitInfoCard
        headline="Personal Coach"
        description="A dedicated coach to help you through your journey"
        image={SecondBenefitImage}
      />
      <BenefitInfoCard
        headline="Text chat session"
        description="An excellent way of preaparing a projects wireframe"
        image={ThirdBenefitImage}
      />
    </BenefitsWrapper>
  );
};
