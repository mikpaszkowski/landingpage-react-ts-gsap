import * as React from "react";
import styled from "styled-components";
import { FooterList } from "./FooterList";
import { EmailInputContainer } from "../../components/EmailInputContainer";
import { device } from "../../styles/responsive";

const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5.1rem 0 8rem 0;

  @media ${device.tabletLarge} {
    flex-direction: column-reverse;
    justify-content: flex-start;
    margin: 5.6rem 0 0 0;
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

  @media ${device.tabletLarge} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const footerLists = [
  {
    id: 1,
    listName: "products",
  },
  {
    id: 2,
    listName: "company",
  },
  {
    id: 3,
    listName: "help",
  },
];

export const FooterContent = () => {
  return (
    <FooterContentWrapper>
      <FooterListWrapper>
        {footerLists.map(({ id, listName }) => (
          <FooterList key={id} listName={listName} />
        ))}
      </FooterListWrapper>
      <EmailInputContainer />
    </FooterContentWrapper>
  );
};
