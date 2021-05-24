import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme, mountWithDarkTheme } from "../helpers/index";
import { FooterList } from "../../layouts/Footer/FooterList";

afterEach(() => {
  cleanup();
});

test("check render correctly <FooterList /> component", () => {
  const tree = renderWithLightTheme(<FooterList listName="Company" />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check FooterContent component", () => {
  const wrapper = mountWithDarkTheme(<FooterList listName="Company" />);

  test("should contain EmailInputContainer", () => {
    expect(wrapper.find("li").length).toEqual(4);
  });
  test("should contain one ul tag element", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });
});
