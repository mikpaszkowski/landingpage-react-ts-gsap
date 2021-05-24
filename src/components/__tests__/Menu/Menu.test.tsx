import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme, mountWithDarkTheme } from "../helpers/index";
import { menuItems } from "../../../assets/menuItems/menuItems";
import { Menu } from "../../layouts/Header/Menu";
import { MenuItem } from "../../layouts/Header/MenuItem";
import { CustomButton } from "../../ReusableComponents/CustomButton";

afterEach(() => {
  cleanup();
});

test("check render correctly <Menu /> component", () => {
  const tree = renderWithLightTheme(<Menu menuItems={menuItems} />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check Menu component", () => {
  const wrapper = mountWithDarkTheme(<Menu menuItems={menuItems} />);

  test("should contain four(4) menu items", () => {
    expect(wrapper.find(MenuItem).length).toEqual(5);
  });

  describe("should contain button", () => {
    test("one CustomButton", () => {
      expect(wrapper.find(CustomButton).length).toEqual(1);
    });

    test("with a name Log in", () => {
      expect(wrapper.find(CustomButton).text()).toEqual("Log in");
    });
  });
});
