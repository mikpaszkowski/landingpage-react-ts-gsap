import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithLightTheme, mountWithDarkTheme } from "../helpers";
import { LandingHeroContainer } from "../../layouts/LandingContainer/LandingHeroContainer";

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

test("check render correctly <LandingHeroContainer /> component", () => {
  const tree = renderWithLightTheme(<LandingHeroContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check the LandingHeroContainer - darkTheme", () => {
  const wrapper = mountWithDarkTheme(<LandingHeroContainer />);

  test("should contain two containers: div", () => {
    expect(wrapper.find("div").at(0).children().length).toEqual(2);
  });

  test("should contain one headline", () => {
    expect(wrapper.find(LandingHeroContainer).find("h1").length).toEqual(1);
  });

  describe("should contain p tag element", () => {
    const herotextMessage =
      "We’re sure that deciding to check on your health is a big step, even if it doesn’t bother in any way.";

    test("exactly one p tag element", () => {
      expect(wrapper.find(LandingHeroContainer).find("p").length).toEqual(1);
    });
    test("should contain text message inside", () => {
      expect(wrapper.find(LandingHeroContainer).find("p").text()).toEqual(
        herotextMessage
      );
    });
    test("should contain button", () => {
      expect(wrapper.find(LandingHeroContainer).find("button").text()).toEqual(
        "Get started"
      );
    });

    describe("should contain two svg images", () => {
      test("svg icon in headline", () => {
        expect(
          wrapper.find(LandingHeroContainer).find("svg").at(0).text()
        ).toEqual("ellipse-3.svg");
      });

      test("should contain svg image", () => {
        expect(
          wrapper.find(LandingHeroContainer).find("svg").at(1).text()
        ).toEqual("hero-img.svg");
      });
    });
  });
});
