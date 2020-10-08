import React from "react";
import { render, screen } from "@testing-library/react";
import { Output } from "./Output";

describe("Output", () => {
  /**
   * Here we are testing our Output in isolation. This might overlap with the
   * tests in App.test.tsx
   * In a real project you should not test the same thing twice.
   * The coverage will give you a hint what is not covered yet
   */
  it("should render", () => {
    const { rerender } = render(
      <Output foods={{ fruits: { description: "foo", data: ["dog food"] } }} />
    );
    const desc = screen.getByText(/foo/i);
    const food = screen.getByText(/food/i);
    expect(desc).toBeInTheDocument();
    expect(food).toBeInTheDocument();

    rerender(
      <Output foods={{ fruits: { description: "dog", data: ["boom"] } }} />
    );
    const desc2 = screen.getByText(/dog/i);
    const food2 = screen.getByText(/boom/i);
    expect(desc2).toBeInTheDocument();
    expect(food2).toBeInTheDocument();
  });
});
