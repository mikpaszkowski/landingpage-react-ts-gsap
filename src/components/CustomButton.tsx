import * as React from "react";
import styled from "styled-components";
import { colors, fontTypes } from "../styles/styleConstants";

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 3.1rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props: ButtonProps) =>
    props.color ? props.color : colors.primaryTheme};

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
}

export const CustomButton = ({ children, ...props }: ButtonProps) => (
  <Button {...props}>
    <p>{children}</p>
  </Button>
);
