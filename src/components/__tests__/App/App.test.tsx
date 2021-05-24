import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme, mountWithDarkTheme } from "../helpers/index";
import { App } from "../../../App";
import { Home } from "../../../pages/Home";

afterEach(() => {
  cleanup();
});

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

test("check render correctly <App /> component", () => {
  const tree = renderWithLightTheme(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("App component should consist of Home component", () => {
  const wrapper = mountWithDarkTheme(<App />);
  expect(wrapper.find(Home).length).toEqual(1);
});
