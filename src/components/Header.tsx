import * as React from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.7rem;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Menu />
    </HeaderWrapper>
  );
};
