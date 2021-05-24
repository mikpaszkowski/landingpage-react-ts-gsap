import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { darkTheme, lightTheme } from "../../../styles/theme";
import { ThemeProvider } from "styled-components";
import { Logo } from "../../Logo/Logo";

export function renderWithDarkTheme(component: JSX.Element) {
  return renderer.create(
    <ThemeProvider theme={darkTheme}>{component}</ThemeProvider>
  );
}

export function renderWithLightTheme(component: JSX.Element) {
  return renderer.create(
    <ThemeProvider theme={lightTheme}>{component}</ThemeProvider>
  );
}

export function mountWithDarkTheme(component: JSX.Element) {
  return mount(<ThemeProvider theme={darkTheme}>{component}</ThemeProvider>);
}

export function mountWithLightTheme(component: JSX.Element) {
  return mount(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
}

describe("check helpers methods - testing on Accomplishments", () => {
  it("should renderWithDarkTheme return tree element in darkTheme", () => {
    const firstTree = renderer
      .create(
        <ThemeProvider theme={darkTheme}>
          <Logo />
        </ThemeProvider>
      )
      .toJSON();

    const secondTree = renderWithDarkTheme(<Logo />).toJSON();
    expect(firstTree).toEqual(secondTree);
  });

  it("should renderWithLightTheme return tree element in lightTheme", () => {
    const firstTree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <Logo />
        </ThemeProvider>
      )
      .toJSON();

    const secondTree = renderWithLightTheme(<Logo />).toJSON();
    expect(firstTree).toEqual(secondTree);
  });

  it("should mountWithLightTheme return wrapper element in lightTheme", () => {
    const firstWrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <Logo />
      </ThemeProvider>
    );

    const secondWrapper = mountWithLightTheme(<Logo />);
    expect(firstWrapper).toEqual(secondWrapper);
  });

  it("should mountWithDarkTheme return wrapper element in darkTheme", () => {
    const firstWrapper = mount(
      <ThemeProvider theme={darkTheme}>
        <Logo />
      </ThemeProvider>
    );

    const secondWrapper = mountWithDarkTheme(<Logo />);
    expect(firstWrapper).toEqual(secondWrapper);
  });
});
