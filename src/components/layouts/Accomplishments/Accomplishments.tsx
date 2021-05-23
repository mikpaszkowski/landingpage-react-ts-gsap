import * as React from "react";

import styled from "styled-components";
import { AccomplishmentItem } from "./AccomplishmentItem";
import { accomplishmentItems } from "../../../assets/accomplishmentsContent/accomplishmentItemList";
import { device } from "../../../styles/responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { laptopLarge, mobileMedium } from "../../../animations/accomplishments";

gsap.registerPlugin(ScrollTrigger);

const AccomplishmentsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 11.1rem;
  margin: 22rem 21.9rem;
  will-change: transform;

  @media ${device.mobileMedium} {
    display: block;
    margin: 6.4rem 0;
    padding: 0 2.4rem;
  }
`;

export const Accomplishments = () => {
  const { useRef, useEffect } = React;

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1440px)": () => laptopLarge(sectionRef),

      "(max-width: 375px)": () => mobileMedium(sectionRef),
    });
  });

  return (
    <AccomplishmentsWrapper ref={sectionRef}>
      {accomplishmentItems.map(({ id, ...props }) => (
        <AccomplishmentItem key={id} {...props} />
      ))}
    </AccomplishmentsWrapper>
  );
};
