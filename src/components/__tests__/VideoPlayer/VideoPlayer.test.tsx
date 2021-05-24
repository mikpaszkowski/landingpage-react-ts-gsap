import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import { VideoPlayer } from "../../layouts/VideoContainer/VideoPlayer";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../styles/theme";

afterEach(() => {
  cleanup();
});

test("check render correctly <LandingHeroContainer /> component", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <VideoPlayer />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
