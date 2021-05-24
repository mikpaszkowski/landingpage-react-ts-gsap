import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithDarkTheme, mountWithLightTheme } from "../helpers/index";
import { BenefitInfoCard } from "../../layouts/Benefits/BenefitInfoCard";
import { ReactComponent as FirstBenefitImage } from "../../layouts/Benefits/benefit-1.svg";

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

it("check render correctly <BenefitInfoCard /> component - darkTheme", () => {
  const benefitCardsContent = {
    id: "1",
    headline: "1 FREE chat session",
    description: "Start with a free text based chat session online",
    image: FirstBenefitImage,
    ref: null,
  };

  const tree = renderWithDarkTheme(
    <BenefitInfoCard {...benefitCardsContent} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// describe("check BenfitInfoCard css properties", () => {
//   const benefitCardsContent = {
//     id: "1",
//     headline: "1 FREE chat session",
//     description: "Start with a free text based chat session online",
//     image: FirstBenefitImage,
//     ref: null,
//   };

//   const wrapper = mountWithLightTheme(
//     <BenefitInfoCard {...benefitCardsContent} />
//   ).find(BenefitInfoCard);

//   it("should have #FFFFFF background-color - lightTheme", () => {
//     expect(wrapper).toHaveStyleRule("background-color", "#FFFFFF");
//   });
// });
