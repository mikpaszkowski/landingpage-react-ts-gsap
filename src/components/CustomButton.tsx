import * as React from "react";
import styled from "styled-components";
import { colors, fontTypes } from "../styles/styleConstants";

const Button = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 3.1rem;
  border: none;
  border-radius: ${(props: ButtonProps) =>
    props.borderRadius ? props.borderRadius : "8px"};
  background-color: ${(props: ButtonProps) =>
    props.color ? props.color : colors.primaryTheme};
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  overflow: hidden;
  will-change: transform;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: -100%;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: ${(props: ButtonProps) =>
      props.borderRadius ? props.borderRadius : "8px"};
    background-color: black;
    color: ${colors.primaryTheme};
    transition: all 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  &:hover {
    box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.25);
    color: ${colors.primaryTheme};

    &::after {
      transform: translateY(-100%);
    }
  }

  & > p {
    font-family: ${fontTypes.secondaryFont};
    font-size: ${(props: ButtonProps) =>
      props.fontsize ? props.fontsize : "2.5rem"};
    font-style: normal;
    font-weight: normal;
    line-height: ${(props: ButtonProps) =>
      props.lineHeight ? props.lineHeight : "3.6rem"};
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  children?: React.ReactNode;
  lineHeight: string;
  fontsize: string;
  borderRadius?: string;
}

export const CustomButton = ({ children, ...props }: ButtonProps) => (
  <Button {...props}>
    <p>{children}</p>
  </Button>
);
