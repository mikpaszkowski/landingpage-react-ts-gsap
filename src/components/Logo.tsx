import * as React from "react";
import { ReactComponent as Ellipse2 } from "../assets/images/svg-images/ellipse-2.svg";
import { ReactComponent as Ellipse1 } from "../assets/images/svg-images/ellipse-1.svg";
import styled from "styled-components";
import { colors } from "../styles/styleConstants";

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 17.3rem;
  height: 4.7rem;
`;

const LogoText = styled.p`
  font-size: 4rem;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  width: 10.2rem;
  line-height: 117%;
  color: ${(props: LogoProps) =>
    props.inverse ? "white" : colors.primaryFont};
`;

const Ellipse1Absolute = styled(Ellipse1)`
  position: absolute;
  top: 0.7rem;
  right: 0.3rem;
`;

interface LogoProps {
  inverse?: boolean | null;
}

export const Logo = ({ inverse }: LogoProps) => {
  return (
    <LogoWrapper>
      <Ellipse1Absolute />
      <Ellipse2 />
      <LogoText inverse={inverse}>Medli</LogoText>
    </LogoWrapper>
  );
};
