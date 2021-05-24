import gsap from "gsap";


export const laptopLarge = (ref: HTMLDivElement) =>  gsap.fromTo(
    ref,
    {
      opacity: 0,
      y: "+=100",
    },
    {
      duration: 0.7,
      delay: 0.2,
      opacity: 1,
      y: 0,
      ease: "none",
      stagger: .6,
      scrollTrigger: {
        id: "benefitCard",
        trigger: `${ref?.id}`,
        start: "center+=150 20%",
        markers: true,
      },
    }
  );


export const mobileMedium = (ref: HTMLDivElement) => gsap.fromTo(
    ref,
    {
      opacity: 0,
      y: "-=30",
    },
    {
      duration: 0.5,
      delay: 0.1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      scrollTrigger: {
        id: "benefitCard",
        trigger: `${ref?.className}`,
        start: "top+=1700 10%",
        markers: true,
      },
    }
  );