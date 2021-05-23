import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { Accomplishments } from "../../layouts/Accomplishments/Accomplishments";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../styles/theme";

afterEach(() => {
  cleanup();
});

it("check render correctly <Accomplishments /> component", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <Accomplishments />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
