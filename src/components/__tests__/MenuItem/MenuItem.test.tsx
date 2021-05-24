import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme, mountWithDarkTheme } from "../helpers/index";
import { MenuItem } from "../../../layouts/Header/MenuItem";

afterEach(() => {
  cleanup();
});

test("check render correctly <MenuItem /> component", () => {
  const tree = renderWithLightTheme(<MenuItem name="about" />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check MenuItem component", () => {
  const wrapper = mountWithDarkTheme(<MenuItem name="Contact" />);

  test("should contain prop name", () => {
    expect(wrapper.find(MenuItem).prop("name")).toEqual("Contact");
  });

  test("should contain a tag", () => {
    expect(wrapper.find("a").isEmptyRender()).toEqual(false);
  });
});
