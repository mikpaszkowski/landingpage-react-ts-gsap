import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme, mountWithDarkTheme } from "../helpers/index";
import { Footer } from "../../layouts/Footer/Footer";
import { FooterContent } from "../../layouts/Footer/FooterContent";
import { Logo } from "../../ReusableComponents/Logo/Logo";

afterEach(() => {
  cleanup();
});

test("check render correctly <Footer /> component", () => {
  const tree = renderWithLightTheme(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check Footer component", () => {
  const wrapper = mountWithDarkTheme(<Footer />);

  test("should contain FooterContent component", () => {
    expect(wrapper.find(FooterContent).length).toEqual(1);
  });

  describe("should contain INVERSED Logo component", () => {
    test("single Logo component", () => {
      expect(wrapper.find(Logo).length).toEqual(1);
    });
    test("should have prop inverse set to true", () => {
      expect(wrapper.find(Logo).prop("inverse")).toEqual(true);
    });
  });

  test("should contain p tag element", () => {
    expect(wrapper.find(Footer).find("p").at(2).text()).toEqual(
      "Therms & Conditions"
    );
  });
});
