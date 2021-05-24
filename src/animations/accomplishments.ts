import React from "react";
import gsap from "gsap";

export const laptopLarge = (ref: React.RefObject<HTMLDivElement>) => gsap.fromTo(
    ref.current,
    {
      opacity: 0,
      y: "+=100",
    },
    {
      duration: 0.7,
      delay: 0.1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `${ref.current?.className}`,
        start: "top 10%",
        markers: true,
      },
    }
  );

  export const tabletLarge = (ref: React.RefObject<HTMLDivElement>) => gsap.fromTo(
    ref.current,
    {
      opacity: 0,
      y: "+=100",
    },
    {
      duration: 0.7,
      delay: 0.1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `${ref.current?.className}`,
        start: "top 10%",
        markers: true,
      },
    }
  );

export const mobileMedium = (ref: React.RefObject<HTMLDivElement>) =>  gsap.fromTo(
    ref.current,
    {
      opacity: 0,
      y: "-=60",
    },
    {
      duration: 0.5,
      delay: 0.1,
      opacity: 1,
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: `${ref.current?.className}`,
        start: "top+=500 20%",
        markers: true,
      },
    }
  );