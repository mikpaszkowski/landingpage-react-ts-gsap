import * as React from "react";
import styled from "styled-components";
import { fontTypes } from "../styles/styleConstants";

const MenuItemWrapper = styled.div`
  margin: 0.7rem 0;
`;

const MenuItemText = styled.p`
  font-family: ${fontTypes.secondaryFont};
  font-style: normal;
  font-weight: normal;
  font-size: 2.4rem;
  line-height: 3.6rem;
`;

interface MenuItemProps {
  name: string;
}

export const MenuItem = ({ name }: MenuItemProps) => {
  return (
    <MenuItemWrapper>
      <MenuItemText>{name}</MenuItemText>
    </MenuItemWrapper>
  );
};
