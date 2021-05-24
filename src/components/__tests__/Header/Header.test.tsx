import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme, mountWithLightTheme } from "../helpers/index";
import { Header } from "../../../layouts/Header/Header";
import { Logo } from "../../Logo/Logo";
import { Menu } from "../../../layouts/Header/Menu";
import { MenuMobile } from "../../../layouts/Header/MenuMobile";

afterEach(() => {
  cleanup();
});

test("check render correctly <Header /> component", () => {
  const tree = renderWithLightTheme(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check Header component", () => {
  const wrapper = mountWithLightTheme(<Header />);

  test("should contain three div elements / component", () => {
    expect(wrapper.find("div").at(0).children().length).toEqual(3);
  });
  test("should contain one svg component - Logo", () => {
    expect(wrapper.find("svg").at(0).children().length).toEqual(1);
  });

  test("should contain one Logo component", () => {
    expect(wrapper.find(Logo).length).toEqual(1);
  });

  test("should contain one Menu component", () => {
    expect(wrapper.find(Menu).length).toEqual(1);
  });

  test("should contain one MenuMobile component", () => {
    expect(wrapper.find(MenuMobile).length).toEqual(1);
  });
});
