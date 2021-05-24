import * as React from "react";
import styled, { keyframes } from "styled-components";
import { MenuItem } from "./MenuItem";
import { CustomButton } from "../../ReusableComponents/CustomButton";
import { menuItems, IMenuItems } from "../../../assets/menuItems/menuItems";
import { IoCloseOutline } from "react-icons/io5";

const slideDown = keyframes`
  from{
    transform: translateY(-100%);
  }
  to{
    transform: translateY(0);
  }
`;

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  padding: 7rem 2.4rem 5rem 2.4rem;
  background-color: ${({ theme }) => theme.palette.common.background};
  transform: translateY(0);
  animation-name: ${slideDown};
  animation-duration: 0.4s;
  animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  animation-fill-mode: both;
  transition: all 1s ease-in-out;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const LogInButton = styled(CustomButton)`
  margin-top: 4rem;
  width: 100%;
`;

const CloseButton = styled(IoCloseOutline)`
  position: absolute;
  top: 2.7rem;
  right: 2.4rem;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(90deg);
  }
`;

interface MenuMobileProps {
  isMenuOpen: boolean | null;
  closeMenuMobile: () => void;
  menuItems: Array<IMenuItems>;
}

export const MenuMobile = ({
  isMenuOpen,
  closeMenuMobile,
  menuItems,
}: MenuMobileProps) => {
  return isMenuOpen ? (
    <MenuWrapper>
      <Menu>
        {menuItems.forEach(({ id, name }) => {
          <MenuItem key={id} name={name} />;
        })}
        <LogInButton fontSize="2.4rem" lineHeight="3.6rem">
          Log in
        </LogInButton>
      </Menu>
      <CloseButton onClick={closeMenuMobile} />
    </MenuWrapper>
  ) : null;
};
