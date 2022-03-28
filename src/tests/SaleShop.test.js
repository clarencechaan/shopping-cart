import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("SaleShop component", () => {
  it("renders SaleShop", () => {
    const { container } = render(<App />);
    const sale = screen.getByText(/^SALE$/);
    userEvent.click(sale);

    expect(container).toMatchSnapshot();
  });

  it("ShopItem link", () => {
    const { container } = render(<App />);
    const img = screen.getByAltText("Take Care by Drake");
    userEvent.click(img);

    expect(container).toMatchSnapshot();
  });
});
