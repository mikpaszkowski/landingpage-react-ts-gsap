import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme, mountWithLightTheme } from "../helpers/index";
import { CustomInput } from "../../CustomInput";

afterEach(() => {
  cleanup();
});

test("render correctly the <CustomInput /> component", () => {
  const tree = renderWithLightTheme(<CustomInput />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check CustomInput css properties", () => {
  test("should have placeholder displayed", () => {
    const props = {
      placeholder: "Enter your name...",
    };

    const wrapper = mountWithLightTheme(<CustomInput {...props} />).find(
      CustomInput
    );
    expect(wrapper.at(0).props().placeholder).toEqual(props.placeholder);
  });

  test("should have border property", () => {
    const wrapper = mountWithLightTheme(<CustomInput />).find(CustomInput);
    expect(wrapper).toHaveStyleRule("border", "1px solid #7C8176");
  });

  test("should have color property", () => {
    const wrapper = mountWithLightTheme(<CustomInput />).find(CustomInput);
    expect(wrapper).toHaveStyleRule("color", "#7C8176");
  });
});
