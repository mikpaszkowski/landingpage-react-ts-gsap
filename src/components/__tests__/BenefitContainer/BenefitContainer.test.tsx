import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme, mountWithLightTheme } from "../helpers/index";
import { BenefitContainer } from "../../layouts/Benefits/BenefitContainer";

afterEach(() => {
  cleanup();
});

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

it("check render correctly <AccomplishmentItem /> component", () => {
  const tree = renderWithLightTheme(<BenefitContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check BenfitContainer", () => {
  test("should have headline displayed", () => {
    const content = {
      headline: "What you’re getting?",
      text: `We bring you personalized development programs that are backed by
            research and crafted from the years of experience`,
    };
    const wrapper = mountWithLightTheme(<BenefitContainer />).find(
      BenefitContainer
    );
    expect(wrapper.find("h1").at(0).text()).toEqual(content.headline);
  });

  test("should have description - span text displayed", () => {
    const content = {
      headline: "What you’re getting?",
      text: "We bring you personalized development programs that are backed by research and crafted from the years of experience",
    };
    const wrapper = mountWithLightTheme(<BenefitContainer />).find(
      BenefitContainer
    );
    expect(wrapper.find("span").at(0).text()).toEqual(content.text);
  });
});
