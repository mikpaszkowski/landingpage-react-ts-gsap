import gsap from "gsap";


export const laptopLarge = (ref: React.RefObject<HTMLDivElement>) =>   gsap.fromTo(
    ref.current,
    {
      opacity: 0,
      y: "-=80",
    },
    {
      duration: 1.2,
      delay: 0.7,
      opacity: 1,
      y: 0,
      ease: "expo.out",
      scrollTrigger: {
        trigger: `${ref.current?.className}`,
        start: "center-=800 40%",
        markers: false,
      },
    }
  );


export const mobileMedium = (ref: React.RefObject<HTMLDivElement>) => gsap.fromTo(
    ref.current,
    {
      opacity: 0,
      y: "-=30",
    },
    {
      duration: 1.2,
      delay: 1,
      opacity: 1,
      y: 0,
      ease: "expo.out",
      scrollTrigger: {
        id: "video-player",
        trigger: `${ref.current?.className}`,
        start: "center-=1000 50%",
        markers: false,
      },
    }
  );