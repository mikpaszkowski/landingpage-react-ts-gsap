import gsap from "gsap";

export const laptopLarge = (ref: React.RefObject<HTMLDivElement>) => gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          y: "-=100",
        },
        {
          duration: 0.8,
          delay: 0.2,
          opacity: 1,
          y: 0,
          ease: "power4.out",
          scrollTrigger: {
            id: "benefitContainer",
            trigger: `${ref.current?.className}`,
            start: "center-=650 bottom",
            scrub: 1,
            markers: false,
          },
        }
      );


export const mobileMedium = (ref: React.RefObject<HTMLDivElement>) =>    gsap.fromTo(
    ref.current,
    {
      opacity: 0,
      y: "-=30",
    },
    {
      duration: 0.5,
      delay: 0.2,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `${ref.current?.className}`,
        start: "top+=1700 20%",
        markers: false,
      },
    }
  );