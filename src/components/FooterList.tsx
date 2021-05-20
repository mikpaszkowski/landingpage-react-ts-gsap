import * as React from "react";
import styled from "styled-components";
import { colors, fontTypes } from "../styles/styleConstants";
import { lists } from "../assets/footerLists/footerLists";

const List = styled.ul`
  & > li {
    color: ${colors.primaryLight};
    font-family: ${fontTypes.secondaryFont};
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.7rem;
    list-style-type: none;

    &:first-child {
      color: ${colors.secondaryLight};
      margin-bottom: 1.9rem;
    }
  }
`;

interface FooterListProps {
  listName: string;
}

export const FooterList = ({ listName }: FooterListProps) => {
  return (
    <List>
      <li>{listName}</li>
      {lists[`${listName.toLocaleLowerCase()}`].map((item) => (
        <li>{item}</li>
      ))}
    </List>
  );
};
