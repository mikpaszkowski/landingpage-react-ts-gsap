import * as React from "react";
import styled from "styled-components";
import { DefaultTheme } from "styled-components";
import { lightTheme } from "../styles/theme";
import { HiSun, HiMoon } from "react-icons/hi";

const ToggleButton = styled.button`
  position: absolute;
  top: -5rem;
  right: 16rem;
  z-index: 2;
  background-color: ${({ theme }) => theme.palette.common.black};
  border: 1px solid ${({ theme }) => theme.palette.primary.font};
  -moz-box-shadow: 0px 0px 10px 0px
    ${({ theme }) => theme.palette.primary.fontLight};
  -webkit-box-shadow: 0px 0px 10px 0px
    ${({ theme }) => theme.palette.primary.fontLight};
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.palette.primary.font};
  padding: 0.1rem 0.3rem;
  border-radius: 4rem;
  cursor: pointer;
  width: 7rem;
  height: 3.7rem;

  &::after {
    content: "";
    position: absolute;
    top: 0.3rem;
    right: 0.4rem;
    width: 2.9rem;
    height: 2.9rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.common.white};
    transition: all 0.3s ease-in-out;
    transform: ${(props: ToggleButtonProps) =>
      props.theme === lightTheme ? "translateX(0)" : "translateX(-3rem)"};
  }
`;

const SunIcon = styled(HiSun)`
  position: absolute;
  top: 0.3rem;
  left: 0.6rem;
  width: 2.7rem;
  height: 2.7rem;
  color: ${({ theme }) => theme.palette.common.theme};
`;

const MoonIcon = styled(HiMoon)`
  position: absolute;
  top: 0.3rem;
  right: 0.6rem;
  width: 2.7rem;
  height: 2.7rem;
  color: ${({ theme }) => theme.palette.common.white};
  transform: rotate(250deg);
  will-change: transform;
`;

interface ToggleButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  theme: DefaultTheme;
}

export const ToggleThemeButton = ({ onClick, theme }: ToggleButtonProps) => {
  return (
    <ToggleButton onClick={onClick} theme={theme}>
      <SunIcon />
      <MoonIcon />
    </ToggleButton>
  );
};
