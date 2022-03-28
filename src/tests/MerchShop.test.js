import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("MerchShop component", () => {
  it("renders MerchShop", () => {
    const { container } = render(<App />);
    const button = screen.getByRole("button", {
      name: /^SHOP MERCH$/,
    });
    userEvent.click(button);

    expect(container).toMatchSnapshot();
  });

  it("ShopItem link", () => {
    const { container } = render(<App />);
    const img = screen.getByAltText("OVO Essentials Hoodie");
    userEvent.click(img);

    expect(container).toMatchSnapshot();
  });
});
