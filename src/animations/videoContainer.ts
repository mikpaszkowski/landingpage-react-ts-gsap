import gsap from "gsap";

export const laptopLargeHeadline = (ref: React.RefObject<HTMLDivElement>) => gsap.fromTo(
    ref.current,
    {
      opacity: 0,
      x: "-=80",
    },
    {
      duration: 1,
      delay: 0.2,
      opacity: 1,
      x: 0,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: `${ref.current?.className}`,
        start: "center-=1000 40%",
        markers: true,
      },
    }
  );

  export const laptopLargeText = (ref: React.RefObject<HTMLDivElement>) => gsap.fromTo(
    ref.current,
    {
      opacity: 0,
      x: "+=80",
    },
    {
      duration: 1,
      delay: 0.6,
      opacity: 1,
      x: 0,
      ease: "expo.out",
      scrollTrigger: {
        trigger: `${ref.current?.className}`,
        start: "center-=1000 20%",
        markers: true,
      },
    }
  );


export const mobileMediumHeadline = (ref: React.RefObject<HTMLDivElement>) =>    gsap.fromTo(
    ref.current,
    {
      opacity: 0,
      y: "-=30",
    },
    {
      duration: 1,
      delay: 0.5,
      opacity: 1,
      y: 0,
      ease: "expo.out",
      scrollTrigger: {
        trigger: `${ref.current?.className}`,
        start: "center+=150 center+=100",
        markers: true,
      },
    }
  );

  export const mobileMediumText = (ref: React.RefObject<HTMLDivElement>) =>     gsap.fromTo(
    ref.current,
    {
      opacity: 0,
      y: "+=30",
    },
    {
      duration: 1,
      delay: 0.6,
      opacity: 1,
      y: 0,
      ease: "expo.out",
      scrollTrigger: {
        trigger: `${ref.current?.className}`,
        start: "center-=1000 20%",
        markers: true,
      },
    }
  );