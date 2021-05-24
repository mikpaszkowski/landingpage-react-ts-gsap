import * as React from "react";
import styled from "styled-components";
import { fontTypes } from "../../../styles/constants";
import { lists } from "../../staticContents/footer/footerLists";
import { device } from "../../../styles/responsive";

const List = styled.ul`
  & > li {
    color: ${({ theme }) => theme.palette.primary.fontLight};
    font-family: ${fontTypes.secondaryFont};
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.7rem;
    list-style-type: none;

    &:first-child {
      color: ${({ theme }) => theme.palette.secondary.fontLight};
      margin-bottom: 1.9rem;
    }
  }

  @media ${device.mobileMedium} {
    margin-bottom: 3.1rem;
  }
`;

interface FooterListProps {
  listName: string;
}

export const FooterList = ({ listName }: FooterListProps) => {
  return (
    <List>
      <li>{listName}</li>
      {lists[`${listName.toLocaleLowerCase()}`].map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </List>
  );
};
