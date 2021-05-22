import * as React from "react";
import styled from "styled-components";
import { colors, fontTypes } from "../../styles/styleConstants";
import { device } from "../../styles/responsive";

const CustomInputWrapper = styled.input`
  position: relative;
  width: 35rem;
  height: 5rem;
  background-color: transparent;
  font-family: ${fontTypes.secondaryFont};
  color: ${colors.secondaryLight};
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.7rem;
  border: 1px solid ${colors.secondaryLight};
  border-radius: 8px;
  padding: 1.2rem 14rem 1.2rem 1.6rem;

  @media ${device.mobileMedium} {
    width: 100%;
  }
`;

interface CustomInputProps {
  placeholder?: string;
}

export const CustomInput = ({ ...props }: CustomInputProps) => {
  return (
    <div>
      <CustomInputWrapper {...props} />
    </div>
  );
};
