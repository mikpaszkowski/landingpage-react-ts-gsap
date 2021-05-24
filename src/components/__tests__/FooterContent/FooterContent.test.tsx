import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme, mountWithDarkTheme } from "../helpers/index";
import { FooterContent } from "../../../layouts/Footer/FooterContent";
import { EmailInputContainer } from "../../EmailInputContainer";
import { FooterList } from "../../../layouts/Footer/FooterList";

afterEach(() => {
  cleanup();
});

test("check render correctly <FooterContent /> component", () => {
  const tree = renderWithLightTheme(<FooterContent />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check FooterContent component", () => {
  const wrapper = mountWithDarkTheme(<FooterContent />);

  test("should contain EmailInputContainer", () => {
    expect(wrapper.find(EmailInputContainer).length).toEqual(1);
  });

  test("should contain three(3) FooterLists", () => {
    expect(wrapper.find(FooterList).length).toEqual(3);
  });
});
