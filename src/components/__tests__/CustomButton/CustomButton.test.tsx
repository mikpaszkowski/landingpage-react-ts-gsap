import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithDarkTheme, mountWithLightTheme } from "../helpers/index";
import { CustomButton } from "../../CustomButton";

afterEach(() => {
  cleanup();
});

test("check render correctly <CustomButton /> component - darkTheme", () => {
  const tree = renderWithDarkTheme(<CustomButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check CustomButton properties and props", () => {
  test("should have name prop displayed", () => {
    const props = {
      name: "Log in",
    };

    const wrapper = mountWithLightTheme(<CustomButton {...props} />).find(
      CustomButton
    );

    expect(wrapper.prop("name")).toEqual("Log in");
    expect(wrapper.contains("Log in")).toEqual(true);
  });

  test("should have #000000 - black background-color property", () => {
    const props = {
      color: "#000000",
    };
    const wrapper = mountWithLightTheme(<CustomButton {...props} />).find(
      CustomButton
    );
    expect(wrapper).toHaveStyleRule("background-color", "#000000");
  });

  test("should have font-size property set to 15rem", () => {
    const props = {
      fontSize: "15rem",
    };

    const wrapper = mountWithLightTheme(<CustomButton {...props} />).find(
      CustomButton
    );

    expect(wrapper).toHaveStyleRule("font-size", "15rem");
  });

  test("should have line-height property set to 3rem", () => {
    const props = {
      lineHeight: "3rem",
    };

    const wrapper = mountWithLightTheme(<CustomButton {...props} />).find(
      CustomButton
    );

    expect(wrapper).toHaveStyleRule("line-height", "3rem");
  });

  test("should have border-radius property set to 0.8rem", () => {
    const props = {
      borderRadius: "0.8rem",
    };

    const wrapper = mountWithLightTheme(<CustomButton {...props} />).find(
      CustomButton
    );

    expect(wrapper).toHaveStyleRule("border-radius", "0.8rem");
  });

  test("should have #131E07 font color - lightTheme", () => {
    const wrapper = mountWithLightTheme(<CustomButton />).find(CustomButton);
    expect(wrapper).toHaveStyleRule("color", "#131E07");
  });
});

describe("check props data types", () => {
  test("render component with undefined name props", () => {
    const wrapper = mountWithLightTheme(<CustomButton />).find(CustomButton);

    expect(wrapper.prop("name")).toEqual(undefined);
    expect(wrapper.prop("color")).toEqual(undefined);
    expect(wrapper.prop("lineHeight")).toEqual(undefined);
    expect(wrapper.prop("fontSize")).toEqual(undefined);
    expect(wrapper.prop("borderRadius")).toEqual(undefined);
  });

  test("should have name prop as string data type", () => {
    const props = {
      name: "Log in",
    };
    const CustomButtonElement = mountWithLightTheme(
      <CustomButton {...props} />
    ).find(CustomButton);

    expect(typeof CustomButtonElement.prop("name")).toBe("string");
  });

  test("should have color prop as string data type", () => {
    const props = {
      color: "#FFFFFF",
    };
    const wrapper = mountWithLightTheme(<CustomButton {...props} />).find(
      CustomButton
    );

    expect(typeof wrapper.prop("color")).toBe("string");
  });

  test("should have lineHeight prop as string data type", () => {
    const props = {
      color: "#FFFFFF",
    };
    const wrapper = mountWithLightTheme(<CustomButton {...props} />).find(
      CustomButton
    );

    expect(typeof wrapper.prop("color")).toBe("string");
  });

  test("should have fontSize prop as string data type", () => {
    const props = {
      fontSize: "30rem",
    };
    const wrapper = mountWithLightTheme(<CustomButton {...props} />).find(
      CustomButton
    );

    expect(typeof wrapper.prop("fontSize")).toBe("string");
  });

  test("should have borderRadius prop as string data type", () => {
    const props = {
      borderRadius: "0.8rem",
    };
    const wrapper = mountWithLightTheme(<CustomButton {...props} />).find(
      CustomButton
    );

    expect(typeof wrapper.prop("borderRadius")).toBe("string");
  });
});
