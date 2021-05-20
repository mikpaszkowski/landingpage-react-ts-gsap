import * as React from "react";
import styled from "styled-components";
import { fontTypes, colors } from "../styles/styleConstants";
import { CustomInput } from "./CustomInput";
import { CustomButton } from "./CustomButton";

const EmailInputContainerWrapper = styled.div`
  position: relative;
  & > p {
    font-family: ${fontTypes.secondaryFont};
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.7rem;
    margin-bottom: 1.6rem;
    color: ${colors.secondaryLight};
  }
`;

const CustomButtonStyled = styled(CustomButton)`
  position: absolute;
  right: 0.8rem;
  bottom: 0.8rem;
  padding: 0.3rem 1.6rem 0.4rem 1.6rem;
  border-radius: 4px;
`;

export const EmailInputContainer = () => {
  return (
    <EmailInputContainerWrapper>
      <p>Try Medli for free</p>
      <CustomInput placeholder="Enter your email" />
      <CustomButtonStyled fontsize="1.8rem" lineHeight="2.7rem">
        Get started
      </CustomButtonStyled>
    </EmailInputContainerWrapper>
  );
};
