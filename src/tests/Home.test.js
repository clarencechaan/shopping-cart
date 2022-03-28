import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Home component", () => {
  it("renders Home", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });

  it("Home link music", () => {
    const { container } = render(<App />);

    const button = screen.getByRole("button", {
      name: /^SHOP MUSIC$/,
    });
    userEvent.click(button);

    expect(container).toMatchSnapshot();
  });

  it("Home link merch", () => {
    const { container } = render(<App />);
    const home = screen.getByText(/HOME/i);
    userEvent.click(home);
    const button = screen.getByRole("button", {
      name: /^SHOP MERCH$/,
    });
    userEvent.click(button);

    expect(container).toMatchSnapshot();
  });
});
