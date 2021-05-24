import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme, mountWithDarkTheme } from "../helpers/index";
import { VideoContainer } from "../../layouts/VideoContainer/VideoContainer";

afterEach(() => {
  cleanup();
});

test("check render correctly <LandingHeroContainer /> component", () => {
  const tree = renderWithLightTheme(<VideoContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
