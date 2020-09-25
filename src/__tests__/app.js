import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

// Component
import App from "../app";

function setup() {
  const wrapper = shallow(<App />);
  return { wrapper };
}

describe("LoginPage", () => {
  it("Should render", () => {
    const { wrapper } = setup();
    expect(wrapper.children()).toHaveLength(1);
  });

  test("should Nothing ", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
