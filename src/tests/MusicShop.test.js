import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("MusicShop component", () => {
  it("renders MusicShop", () => {
    const { container } = render(<App />);
    const button = screen.getByRole("button", {
      name: /^SHOP MUSIC$/,
    });
    userEvent.click(button);

    expect(container).toMatchSnapshot();
  });

  it("ShopItem link", () => {
    const { container } = render(<App />);
    const img = screen.getByAltText(
      "My Beautiful Dark Twisted Fantasy by Kanye West"
    );
    userEvent.click(img);

    expect(container).toMatchSnapshot();
  });
});
