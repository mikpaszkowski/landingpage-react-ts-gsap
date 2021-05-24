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
