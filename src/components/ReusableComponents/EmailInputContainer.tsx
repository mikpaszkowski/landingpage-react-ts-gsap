import * as React from "react";
import styled from "styled-components";
import { fontTypes } from "../../styles/styleConstants";
import { CustomInput } from "./CustomInput";
import { CustomButton } from "./CustomButton";
import { device } from "../../styles/responsive";

const EmailInputContainerWrapper = styled.div`
  position: relative;
  & > p {
    font-family: ${fontTypes.secondaryFont};
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.7rem;
    margin-bottom: 1.6rem;
    color: ${({ theme }) => theme.palette.secondary.fontLight};
  }
`;

const CustomButtonStyled = styled(CustomButton)`
  position: absolute;
  right: 0.8rem;
  bottom: 0.8rem;
  padding: 0.3rem 1.6rem 0.4rem 1.6rem;
  border-radius: 4px;

  @media ${device.mobileMedium} {
    position: relative;
    width: 100%;
    right: 0;
    bottom: 0;
    font-size: 2rem;
    padding: 1.6rem 8rem 1.6rem 8rem;
    margin: 1.6rem 0 6.3rem 0;
  }
`;

export const EmailInputContainer = () => {
  return (
    <EmailInputContainerWrapper>
      <p>Try Medli for free</p>
      <CustomInput placeholder="Enter your email" />
      <CustomButtonStyled
        fontSize="1.8rem"
        lineHeight="2.7rem"
        borderRadius="4px"
        name="Get started"
      />
    </EmailInputContainerWrapper>
  );
};
