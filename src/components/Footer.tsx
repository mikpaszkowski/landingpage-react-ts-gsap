import * as React from "react";
import { Logo } from "./Logo";
import styled from "styled-components";
import { colors, fontTypes } from "../styles/styleConstants";

const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 8.9rem 16.5rem 4.7rem 16.5rem;
  background-color: ${colors.footerBackground};
`;

const BreakLine = styled.div`
  height: 0.1rem;
  background-color: white;
  width: 100%;
  opacity: 0.2;
`;

const TermsAndConditions = styled.p`
  position: absolute;
  bottom: 1.6rem;
  right: 16.6rem;
  font-family: ${fontTypes.secondaryFont};
  color: ${colors.primaryLight};
  opacity: 0.5;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Logo inverse />
      <BreakLine />
      <TermsAndConditions>Therms & Conditions</TermsAndConditions>
    </FooterWrapper>
  );
};
