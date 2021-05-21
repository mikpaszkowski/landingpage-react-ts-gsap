import * as React from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import styled from "styled-components";
import { ReactComponent as Bar } from "../assets/images/svg-images/menu-bar.svg";
import { device } from "../styles/responsive";

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.7rem;
`;
const MenuBar = styled(Bar)`
  display: none;
  width: 3rem;
  height: 1.7rem;

  @media ${device.mobileMedium} {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(75%);
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Menu />
      <MenuBar />
    </HeaderWrapper>
  );
};
