import * as React from "react";
import { Logo } from "../../ReusableComponents/Logo/Logo";
import { Menu } from "./Menu";
import styled from "styled-components";
import { ReactComponent as Bar } from "./menu-bar.svg";
import { menuItems } from "../../staticContents/menu/menuItems";
import { device } from "../../../styles/responsive";
import { MenuMobile } from "./MenuMobile";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 9999;
  max-width: 145rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2.7rem 16.7rem;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.palette.common.background};

  @media ${device.laptopSmall} {
    padding: 2.7rem 6rem;
  }

  @media ${device.mobileMedium} {
    position: relative;
    padding: 2.7rem 2.4rem;
  }
`;
const MenuBar = styled(Bar)`
  display: none;
  width: 3rem;
  height: 1.7rem;
  cursor: pointer;
  fill: ${({ theme }) => theme.palette.primary.font};

  @media ${device.tabletLarge} {
    display: block;
    position: absolute;
    top: 50%;
    right: 2.4rem;
    transform: translateY(-50%);
    fill: ${({ theme }) => theme.palette.primary.font};
  }
`;

const { useState } = React;

export const Header = () => {
  const [menuBarOpen, setMenuBarOpen] = useState<boolean | null>(null);

  const handleClick = () => {
    setMenuBarOpen(!menuBarOpen);
  };

  return (
    <HeaderWrapper>
      <Logo />
      <Menu menuItems={menuItems} />
      <MenuBar onClick={handleClick} />
      <MenuMobile
        isMenuOpen={menuBarOpen}
        closeMenuMobile={handleClick}
        menuItems={menuItems}
      />
    </HeaderWrapper>
  );
};
