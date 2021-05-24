import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme, mountWithDarkTheme } from "../helpers/index";
import { FooterContent } from "../../layouts/Footer/FooterContent";

afterEach(() => {
  cleanup();
});

test("check render correctly <FooterContent /> component", () => {
  const tree = renderWithLightTheme(<FooterContent />).toJSON();
  expect(tree).toMatchSnapshot();
});
