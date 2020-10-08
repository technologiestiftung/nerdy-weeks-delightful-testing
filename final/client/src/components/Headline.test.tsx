import React from "react";
import { render, screen } from "@testing-library/react";
import { Headline } from "./Headline";
describe("Headline", () => {
  /**
   * Here we are testing our Headline in isolation. This might overlap with the
   * tests in App.test.tsx
   * In a real project you should not test the same thing twice.
   * The coverage will give you a hint what is not covered yet
   */
  it("should render with inputs", async () => {
    render(<Headline inputFood={"dog food"} />);
    const h1 = screen.getByText(/the favorite food is/i);
    expect(h1).toBeInTheDocument();
    const h2 = screen.getByText(/dog food/i);
    expect(h2).toBeInTheDocument();
  });
  it("should render the spinner", async () => {
    render(<Headline />);
    const h1 = screen.getByText(/the favorite food is/i);
    expect(h1).toBeInTheDocument();
    const spinner = screen.getByTestId(/spinner/i);
    expect(spinner).toBeInTheDocument();
  });
});
