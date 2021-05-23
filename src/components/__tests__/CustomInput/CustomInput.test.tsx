import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import { CustomInput } from "../../ReusableComponents/CustomInput";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../styles/theme";

afterEach(() => {
  cleanup();
});

test("render correctly the <CustomInput /> component", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <CustomInput />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check CustomInput css properties", () => {
  test("should have placeholder displayed", () => {
    const props = {
      placeholder: "Enter your name...",
    };

    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <CustomInput {...props} />
      </ThemeProvider>
    ).find(CustomInput);
    expect(wrapper.at(0).props().placeholder).toEqual(props.placeholder);
  });

  test("should have border property", () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <CustomInput />
      </ThemeProvider>
    ).find(CustomInput);
    expect(wrapper).toHaveStyleRule("border", "1px solid #7C8176");
  });

  test("should have color property", () => {
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <CustomInput />
      </ThemeProvider>
    ).find(CustomInput);
    expect(wrapper).toHaveStyleRule("color", "#7C8176");
  });
});
