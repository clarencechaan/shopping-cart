import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("NavBar component", () => {
  it("renders NavBar", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("NavBar link logo", () => {
    const { container } = render(<App />);
    const logo = screen.getByText(/auditty/i);
    userEvent.click(logo);

    expect(container).toMatchSnapshot();
  });

  it("NavBar link home", () => {
    const { container } = render(<App />);
    const home = screen.getByText(/HOME/i);
    userEvent.click(home);

    expect(container).toMatchSnapshot();
  });

  it("NavBar link music", () => {
    const { container } = render(<App />);
    const music = screen.getByText(/^MUSIC$/);
    userEvent.click(music);

    expect(container).toMatchSnapshot();
  });

  it("NavBar link merch", () => {
    const { container } = render(<App />);
    const merch = screen.getByText(/^MERCH$/);
    userEvent.click(merch);

    expect(container).toMatchSnapshot();
  });

  it("NavBar link cart", () => {
    const { container } = render(<App />);
    const cart = screen.getByAltText(/cart/i);
    userEvent.click(cart);

    expect(container).toMatchSnapshot();
  });
});
