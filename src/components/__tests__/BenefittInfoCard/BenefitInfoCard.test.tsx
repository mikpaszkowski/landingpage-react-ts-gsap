import React, { useRef } from "react";
import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { BenefitInfoCard } from "../../layouts/Benefits/BenefitInfoCard";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../../styles/theme";
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

it("check render correctly <BenefitInfoCard /> component", () => {
  const benefitCardsContent = {
    id: "1",
    headline: "1 FREE chat session",
    description: "Start with a free text based chat session online",
    image: FirstBenefitImage,
    ref: null,
  };

  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <BenefitInfoCard {...benefitCardsContent} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check BenfitInfoCard css properties", () => {
  const benefitCardsContent = {
    id: "1",
    headline: "1 FREE chat session",
    description: "Start with a free text based chat session online",
    image: FirstBenefitImage,
    ref: null,
  };

  const wrapper = mount(
    <ThemeProvider theme={lightTheme}>
      <BenefitInfoCard {...benefitCardsContent} />
    </ThemeProvider>
  ).find(BenefitInfoCard);

  //   it("should have #FFFFFF background-color - lightTheme", () => {
  //     expect(wrapper.find("c0")).toHaveStyleRule("background-color", "#FFFFFF");
  //   });
});
