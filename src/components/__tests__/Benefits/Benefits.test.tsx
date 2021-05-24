import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme, mountWithLightTheme } from "../helpers/index";
import { Benefits } from "../../layouts/Benefits/Benefits";
import { BenefitInfoCard } from "../../layouts/Benefits/BenefitInfoCard";
import { ReactComponent as FirstBenefitImage } from "../../layouts/Benefits/benefit-1.svg";
import { ReactComponent as SecondBenefitImage } from "../../layouts/Benefits/benefit-2.svg";
import { ReactComponent as ThirdBenefitImage } from "../../layouts/Benefits/benefit-3.svg";

afterEach(() => {
  cleanup();
});

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

it("check render correctly <Benefits /> component", () => {
  const benefitCardsContent = [
    {
      id: 1,
      headline: "1 FREE chat session",
      description: "Start with a free text based chat session online",
      image: FirstBenefitImage,
    },
  ];
  const tree = renderWithLightTheme(
    <Benefits benefitCardsContent={benefitCardsContent} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check Benfits", () => {
  const benefitCardsContent = [
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

  const wrapper = mountWithLightTheme(
    <Benefits benefitCardsContent={benefitCardsContent} />
  ).find(Benefits);

  test("should contain three BenefitInfoCards", () => {
    expect(wrapper.find(BenefitInfoCard).length).toEqual(3);
  });

  test("should card have headline as in benefitCardsContent", () => {
    benefitCardsContent.forEach((card, index) => {
      expect(wrapper.find(BenefitInfoCard).at(index).find("h1").text()).toEqual(
        card.headline
      );
    });
  });

  test("should card have description as in benefitCardsContent", () => {
    benefitCardsContent.forEach((card, index) => {
      expect(wrapper.find(BenefitInfoCard).at(index).find("p").text()).toEqual(
        card.description
      );
    });
  });

  test("should card have SVG image as in benefitCardsContent", () => {
    benefitCardsContent.forEach((card, index) => {
      expect(
        wrapper.find(BenefitInfoCard).at(index).find("svg").text()
      ).toEqual(`benefit-${card.id}.svg`);
    });
  });
});
