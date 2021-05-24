import { ReactComponent as FirstBenefitImage } from "../../layouts/Benefits/benefit-1.svg";
import { ReactComponent as SecondBenefitImage } from "../../layouts/Benefits/benefit-2.svg";
import { ReactComponent as ThirdBenefitImage } from "../../layouts/Benefits/benefit-3.svg";

export interface IBenefitCardsContent {
    id: number;
    headline: string;
    description: string;
    image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }

export const benefitCardsContent: Array<IBenefitCardsContent> = [
    {
      id: 1,
      headline: "1 FREE chat session",
      description: "Start with a free text based chat session online",
      image: FirstBenefitImage,
    },
    {
      id: 2,
      headline: "Personal Coach",
      description: "A dedicated coach to help you through your journey",
      image: SecondBenefitImage,
    },
    {
      id: 3,
      headline: "Text chat session",
      description: "An excellent way of preaparing a projects wireframe",
      image: ThirdBenefitImage,
    },
  ];