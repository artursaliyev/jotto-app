import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";

import Congrats from "./congrats";

/**
 * Factory function to create ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props cpecific to this setup.
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = props => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "congrats-component");
  expect(component.length).toBe(1);
});

test("renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "congrats-component");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when `success` prop is true", () => {
  const wrapper = setup({ success: false });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(component.text().length).not.toBe(0);
});
