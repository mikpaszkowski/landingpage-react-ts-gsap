import gsap from "gsap";

export const laptopLargeHeadline = (ref: React.RefObject<HTMLDivElement>) => gsap.fromTo(
    ref.current,
    {
      opacity: 0,
      x: "-=80",
    },
    {
      duration: 0.8,
      opacity: 1,
      x: 0,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: `${ref.current?.className}`,
        start: "center-=1000 40%",
        markers: false,
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
      duration: 0.8,
      delay: 0.1,
      opacity: 1,
      x: 0,
      ease: "expo.out",
      scrollTrigger: {
        trigger: `${ref.current?.className}`,
        start: "center-=1000 20%",
        markers: false,
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
        id: "video-headline",
        trigger: `${ref.current?.className}`,
        start: "center-=1000 60%",
        markers: false,
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
        id: "video-text",
        trigger: `${ref.current?.className}`,
        start: "center-=1000 50%",
        markers: false,
      },
    }
  );