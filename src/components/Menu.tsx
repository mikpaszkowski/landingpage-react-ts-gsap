import * as React from "react";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";
import { CustomButton } from "./CustomButton";

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 64.4rem;
`;

export const Menu = () => {
  return (
    <MenuWrapper>
      <MenuItem name="Home" />
      <MenuItem name="About" />
      <MenuItem name="Courses" />
      <MenuItem name="News" />
      <MenuItem name="Contact" />
      <CustomButton fontsize="2.4rem" lineHeight="3.6rem">
        Log in
      </CustomButton>
    </MenuWrapper>
  );
};
