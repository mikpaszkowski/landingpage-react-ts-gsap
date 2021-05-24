import * as React from "react";
import styled from "styled-components";
import { fontTypes } from "../../styles/constants";
import { lists } from "../../data/staticContents/footer/footerLists";
import { device } from "../../styles/responsive";

const List = styled.ul`
  margin-bottom: 3.1rem;
  & > li {
    font-family: ${fontTypes.secondaryFont};
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.7rem;
    list-style-type: none;

    & a {
      color: ${({ theme }) => theme.palette.primary.fontLight};
      text-decoration: none;
      font-size: 1.8rem;
      line-height: 2.7rem;
    }

    &:first-child {
      text-transform: uppercase;
      color: ${({ theme }) => theme.palette.secondary.fontLight};
      margin-bottom: 1.9rem;
    }
  }

  @media ${device.mobileMedium} {
    margin-bottom: 3.1rem;
  }
`;

interface IFooterListProps {
  listName: string;
}

export const FooterList = ({ listName }: IFooterListProps) => {
  return (
    <List>
      <li>{listName}</li>
      {lists[`${listName.toLocaleLowerCase()}`].map(({ url, label }, index) => (
        <li key={index}>
          <a href={url}>{label}</a>
        </li>
      ))}
    </List>
  );
};
