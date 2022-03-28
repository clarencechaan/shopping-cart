import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Details component", () => {
  it("renders Details", () => {
    const { container } = render(<App />);
    const button = screen.getByRole("button", {
      name: /^SHOP MUSIC$/,
    });
    userEvent.click(button);

    const img = screen.getByAltText(
      "My Beautiful Dark Twisted Fantasy by Kanye West"
    );
    userEvent.click(img);

    expect(container).toMatchSnapshot();
  });

  it("add to cart", () => {
    const { container } = render(<App />);
    const button = screen.getByRole("button", {
      name: /^ADD TO CART$/,
    });
    userEvent.click(button);

    const itemAdded = screen.getByRole("button", {
      name: /^ITEM ADDED$/,
    });
    expect(itemAdded).toBeInTheDocument();

    const badge = screen.getByTestId("cart-badge");
    expect(badge.textContent).toBe("1");

    expect(container).toMatchSnapshot();
  });
});
