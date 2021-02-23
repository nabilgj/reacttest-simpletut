import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttr } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("headline component", () => {
  describe("have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test desc",
      };

      wrapper = setUp(props);
    });

    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("should render a H1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("should render a desc", () => {
      const desc = findByTestAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should not render", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
