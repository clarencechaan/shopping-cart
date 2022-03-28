import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Cart component", () => {
  it("renders Cart", () => {
    const { container } = render(<App />);
    const cart = screen.getByAltText("cart");
    userEvent.click(cart);

    expect(container).toMatchSnapshot();
  });

  it("renders Cart with item", () => {
    const { container } = render(<App />);
    const music = screen.getByText(/^MUSIC$/);
    userEvent.click(music);

    const img = screen.getByAltText(
      "My Beautiful Dark Twisted Fantasy by Kanye West"
    );
    userEvent.click(img);

    const button = screen.getByRole("button", {
      name: /^ADD TO CART$/,
    });
    userEvent.click(button);

    const cart = screen.getByAltText("cart");
    userEvent.click(cart);

    const mbdtf = screen.getByText(
      "My Beautiful Dark Twisted Fantasy by Kanye West"
    );
    expect(mbdtf).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("increment and decrement quantity", () => {
    const { container } = render(<App />);

    const music = screen.getByText(/^MUSIC$/);
    userEvent.click(music);

    const img = screen.getByAltText(
      "My Beautiful Dark Twisted Fantasy by Kanye West"
    );
    userEvent.click(img);

    const button = screen.getByRole("button", {
      name: /^ADD TO CART$/,
    });
    userEvent.click(button);

    const cart = screen.getByAltText("cart");
    userEvent.click(cart);

    const incrementor = screen.getByRole("button", {
      name: "+",
    });
    userEvent.click(incrementor);

    const qtyLabel = screen.getByTestId("quantity-label");
    expect(qtyLabel.textContent).toBe("2");

    const decrementor = screen.getByRole("button", {
      name: "-",
    });

    userEvent.click(decrementor);
    expect(qtyLabel.textContent).toBe("1");

    expect(container).toMatchSnapshot();
  });

  it("remove cart item", () => {
    const { container } = render(<App />);

    const music = screen.getByText(/^MUSIC$/);
    userEvent.click(music);

    const img = screen.getByAltText(
      "My Beautiful Dark Twisted Fantasy by Kanye West"
    );
    userEvent.click(img);

    const button = screen.getByRole("button", {
      name: /^ADD TO CART$/,
    });
    userEvent.click(button);

    const cart = screen.getByAltText("cart");
    userEvent.click(cart);

    const remove = screen.getByAltText("remove");
    userEvent.click(remove);

    const linkElement = screen.queryByText(
      "My Beautiful Dark Twisted Fantasy by Kanye West"
    );
    expect(linkElement).toBeNull();

    expect(container).toMatchSnapshot();
  });
});
