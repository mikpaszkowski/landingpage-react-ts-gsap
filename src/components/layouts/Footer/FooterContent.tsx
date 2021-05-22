import * as React from "react";
import styled from "styled-components";
import { FooterList } from "./FooterList";
import { EmailInputContainer } from "../../ReusableComponents/EmailInputContainer";
import { device } from "../../../styles/responsive";

const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5.1rem 0 8rem 0;

  @media ${device.mobileMedium} {
    flex-direction: column-reverse;
    justify-content: flex-start;
    margin: 5.6rem 0 8rem 0;
  }
`;

const FooterListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  ul:nth-child(2) {
    margin-right: 14rem;
  }

  ul:first-child {
    margin-right: 5.8rem;
  }

  @media ${device.mobileMedium} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const FooterContent = () => {
  return (
    <FooterContentWrapper>
      <FooterListWrapper>
        <FooterList listName="Products" />
        <FooterList listName="Company" />
        <FooterList listName="Help" />
      </FooterListWrapper>
      <EmailInputContainer />
    </FooterContentWrapper>
  );
};