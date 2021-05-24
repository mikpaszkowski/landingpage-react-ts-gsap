import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme, mountWithLightTheme } from "../helpers/index";
import { Logo } from "../../Logo/Logo";

afterEach(() => {
  cleanup();
});

test("check render correctly <Logo /> component", () => {
  const tree = renderWithLightTheme(<Logo />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check Logo component - lightTheme", () => {
  const wrapper = mountWithLightTheme(<Logo />).find(Logo);

  test("should have p tag element - Medli", () => {
    expect(wrapper.find("p").text()).toEqual("Medli");
  });

  test("should have two svg tag element", () => {
    expect(wrapper.find("svg").length).toEqual(2);
  });

  test("should have first svg image: ellipse-1.svg", () => {
    expect(wrapper.find("svg").at(0).text()).toEqual("ellipse-1.svg");
  });

  test("should have second svg image: ellipse-1.svg", () => {
    expect(wrapper.find("svg").at(1).text()).toEqual("ellipse-2.svg");
  });
});
