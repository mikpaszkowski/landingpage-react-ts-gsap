import * as React from "react";
import { Logo } from "../../ReusableComponents/Logo/Logo";
import styled from "styled-components";
import { fontTypes } from "../../../styles/styleConstants";
import { FooterContent } from "./FooterContent";
import { device } from "../../../styles/responsive";

const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 8.9rem 16.5rem 4.7rem 16.5rem;
  background-color: ${({ theme }) => theme.palette.primary.footerBackground};

  @media ${device.mobileMedium} {
    padding: 6.4rem 2.4rem 5.5rem 2.4rem;
  }
`;

const BreakLine = styled.div`
  height: 0.1rem;
  background-color: white;
  width: 100%;
  opacity: 0.2;

  @media ${device.mobileMedium} {
    display: none;
  }
`;

const TermsAndConditions = styled.p`
  position: absolute;
  bottom: 1.6rem;
  right: 16.6rem;
  font-family: ${fontTypes.secondaryFont};
  color: ${({ theme }) => theme.palette.primary.fontLight};
  opacity: 0.5;

  @media ${device.mobileMedium} {
    display: none;
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Logo inverse />
      <FooterContent />
      <BreakLine />
      <TermsAndConditions>Therms & Conditions</TermsAndConditions>
    </FooterWrapper>
  );
};
