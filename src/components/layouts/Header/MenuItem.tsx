import * as React from "react";
import styled from "styled-components";
import { fontTypes } from "../../../styles/styleConstants";
import { ReactComponent as FocusIcon } from "./ellipse-4.svg";

const MenuItemWrapper = styled.div`
  margin: 0.7rem 0;
`;

const MenuItemText = styled.a`
  position: relative;
  font-family: ${fontTypes.secondaryFont};
  font-style: normal;
  font-weight: normal;
  font-size: 2.4rem;
  line-height: 3.6rem;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.font};

  &:focus > svg {
    display: block;
  }
`;

const FocusSVG = styled(FocusIcon)`
  display: none;
  position: absolute;
  bottom: -0.8rem;
  left: 50%;
  transform: translateX(-50%);
`;

interface MenuItemProps {
  name: string;
}

export const MenuItem = ({ name }: MenuItemProps) => {
  return (
    <MenuItemWrapper>
      <MenuItemText href="#">
        {name}
        <FocusSVG />
      </MenuItemText>
    </MenuItemWrapper>
  );
};
