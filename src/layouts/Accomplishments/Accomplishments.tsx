import * as React from "react";

import styled from "styled-components";
import { AccomplishmentItem } from "./AccomplishmentItem";
import { accomplishmentItems } from "../../data/staticContents/accomplishments/accomplishmentItemList";
import { device } from "../../styles/responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  laptopLarge,
  mobileMedium,
  tabletLarge,
} from "../../animations/accomplishments";

gsap.registerPlugin(ScrollTrigger);

const AccomplishmentsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 11.1rem;
  margin: 22rem 21.9rem;
  will-change: transform;

  @media ${device.laptopSmall} {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    margin: 22rem 21.9rem;
  }

  @media ${device.tabletLarge} {
    margin: 15rem 0;
    flex-direction: column;
  }

  @media ${device.mobileLarge} {
    margin: 6.4rem 0;
    flex-direction: column;
  }
`;

export const Accomplishments = () => {
  const { useRef, useEffect } = React;

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1440px)": () => laptopLarge(sectionRef),
      "(min-width: 500px)": () => tabletLarge(sectionRef),
      "(max-width: 499px)": () => mobileMedium(sectionRef),
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
