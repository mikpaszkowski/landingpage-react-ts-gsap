import gsap from "gsap";

export const laptopLargeLeftSection = (ref: React.RefObject<HTMLDivElement>) => gsap.fromTo(
    ref.current,
    {
      opacity: 0,
      x: "-=60",
    },
    {
      duration: 1,
      delay: 0.5,
      opacity: 1,
      x: 0,
      ease: "expo.out",
    }
  );

  export const laptopLargeRightSection = (ref: React.RefObject<HTMLDivElement>) => gsap.fromTo(
    ref.current,
    {
      opacity: 0,
      x: "+=70",
    },
    {
      duration: 1.2,
      delay: 0.7,
      opacity: 1,
      x: 0,
      ease: "expo.out",
    }
  );