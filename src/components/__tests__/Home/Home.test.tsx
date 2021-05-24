import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import {
  renderWithLightTheme,
  mountWithLightTheme,
  mountWithDarkTheme,
} from "../helpers/index";
import { Home } from "../../../pages/Home";
import { LandingHeroContainer } from "../../../layouts/LandingContainer/LandingHeroContainer";
import { Accomplishments } from "../../../layouts/Accomplishments/Accomplishments";
import { VideoContainer } from "../../../layouts/VideoContainer/VideoContainer";
import { BenefitContainer } from "../../../layouts/Benefits/BenefitContainer";
import { Footer } from "../../../layouts/Footer/Footer";
import { Header } from "../../../layouts/Header/Header";

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

test("check render correctly <Home /> component - page", () => {
  const tree = renderWithLightTheme(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check Home component - page", () => {
  test("should have six(6) child components / element: lightTheme", () => {
    const wrapper = mountWithLightTheme(<Home />).find(Home);
    expect(wrapper.children().length).toEqual(6);
  });

  test("should have six(6) child components / element: darkModeTheme", () => {
    const wrapper = mountWithDarkTheme(<Home />).find(Home);
    expect(wrapper.children().length).toEqual(6);
  });
});

describe("check inner components of Home", () => {
  const wrapper = mountWithLightTheme(<Home />).find(Home);

  test("should contain LandingHeroContainer", () => {
    expect(wrapper.find(LandingHeroContainer).length).toEqual(1);
  });

  test("should contain Accomplishments", () => {
    expect(wrapper.find(Accomplishments).length).toEqual(1);
  });

  test("should contain VideoContainer", () => {
    expect(wrapper.find(VideoContainer).length).toEqual(1);
  });

  test("should contain BenefitContainer", () => {
    expect(wrapper.find(BenefitContainer).length).toEqual(1);
  });

  test("should contain Footer", () => {
    expect(wrapper.find(Footer).length).toEqual(1);
  });

  test("should contain Header", () => {
    expect(wrapper.find(Header).length).toEqual(1);
  });
});
