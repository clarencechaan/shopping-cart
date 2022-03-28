import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("renders App", () => {
    // since screen does not have the container property, we'll destructure render to obtain container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
