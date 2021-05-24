import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import {
  renderWithLightTheme,
  mountWithLightTheme,
  mountWithDarkTheme,
} from "../helpers";
import { AccomplishmentItem } from "../../../layouts/Accomplishments/AccomplishmentItem";

afterEach(() => {
  cleanup();
});

it("check render correctly <AccomplishmentItem /> component", () => {
  const props = {
    headline: "10,000+",
    description: "Medical recommendations",
  };
  const tree = renderWithLightTheme(<AccomplishmentItem {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("check AccomplishmentItem props", () => {
  test("should have headline prop displayed", () => {
    const props = {
      headline: "10,000+",
      description: "Medical recommendations",
    };
    const wrapper = mountWithLightTheme(<AccomplishmentItem {...props} />).find(
      AccomplishmentItem
    );
    expect(wrapper.find("h1").text()).toEqual(props.headline);
  });

  test("should have description prop displayed", () => {
    const props = {
      headline: "10,000+",
      description: "Medical recommendations",
    };
    const wrapper = mountWithLightTheme(<AccomplishmentItem {...props} />).find(
      AccomplishmentItem
    );
    expect(wrapper.find("p").text()).toEqual(props.description);
  });
});

describe("check AccomplishmentItem props data type", () => {
  test("should headline prop be string type", () => {
    const props = {
      headline: "10,000+",
      description: "Medical recommendations",
    };
    const wrapper = mountWithLightTheme(<AccomplishmentItem {...props} />).find(
      AccomplishmentItem
    );
    expect(typeof wrapper.prop("headline")).toEqual("string");
  });

  test("should description prop be string type", () => {
    const props = {
      headline: "10,000+",
      description: "Medical recommendations",
    };
    const wrapper = mountWithLightTheme(<AccomplishmentItem {...props} />).find(
      AccomplishmentItem
    );
    expect(typeof wrapper.prop("description")).toEqual("string");
  });
});

describe("check AccomplishmentItem css properties", () => {
  test("should have headline color: #FABD20", () => {
    const props = {
      headline: "10,000+",
      description: "Medical recommendations",
    };
    const wrapper = mountWithLightTheme(<AccomplishmentItem {...props} />).find(
      AccomplishmentItem
    );
    expect(wrapper.find("h1")).toHaveStyleRule("color", "#FABD20");
  });

  describe("check description font color when", () => {
    test("theme set to dark - #FFFFFF", () => {
      const props = {
        headline: "10,000+",
        description: "Medical recommendations",
      };
      const wrapper = mountWithDarkTheme(
        <AccomplishmentItem {...props} />
      ).find(AccomplishmentItem);
      expect(wrapper.find("p")).toHaveStyleRule("color", "#FFFFFF");
    });

    test("theme set to light - p color #131E07", () => {
      const props = {
        headline: "10,000+",
        description: "Medical recommendations",
      };
      const wrapper = mountWithLightTheme(
        <AccomplishmentItem {...props} />
      ).find(AccomplishmentItem);
      expect(wrapper.find("p")).toHaveStyleRule("color", "#131E07");
    });

    test("theme set to dark - p color #FFFFFF", () => {
      const props = {
        headline: "10,000+",
        description: "Medical recommendations",
      };
      const wrapper = mountWithDarkTheme(
        <AccomplishmentItem {...props} />
      ).find(AccomplishmentItem);
      expect(wrapper.find("p")).toHaveStyleRule("color", "#FFFFFF");
    });
  });
});
