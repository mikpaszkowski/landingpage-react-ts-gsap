import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme } from "../helpers";
import { Accomplishments } from "../../../layouts/Accomplishments/Accomplishments";

afterEach(() => {
  cleanup();
});

it("check render correctly <Accomplishments /> component", () => {
  const tree = renderWithLightTheme(<Accomplishments />).toJSON();
  expect(tree).toMatchSnapshot();
});
