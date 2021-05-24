import * as React from "react";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";
import { CustomButton } from "../../ReusableComponents/CustomButton";
import { IMenuItems } from "../../../assets/menuItems/menuItems";
import { device } from "../../../styles/responsive";

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 64.4rem;

  @media ${device.mobileMedium} {
    display: none;
  }
`;
interface IMenuProps {
  menuItems: Array<IMenuItems>;
}

export const Menu = ({ menuItems }: IMenuProps) => {
  return (
    <MenuWrapper>
      {menuItems.map(({ id, name }) => (
        <MenuItem key={id} name={name} />
      ))}

      <CustomButton fontSize="2.4rem" lineHeight="3.6rem" name="Log in" />
    </MenuWrapper>
  );
};
