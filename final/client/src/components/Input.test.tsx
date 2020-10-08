import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";
describe("Input", () => {
  /**
   * Here we are testing our Input in isolation. This might overlap with the
   * tests in App.test.tsx
   * In a real project you should not test the same thing twice.
   * The coverage will give you a hint what is not covered yet
   */

  it("should render", async () => {
    const changeHandler = jest.fn();
    render(
      <Input changeHandler={changeHandler}>
        <div>Button</div>
      </Input>
    );
    const input = screen.getByLabelText(/add some food/i);
    expect(input).toBeInTheDocument();
    const word = "dog food";
    await userEvent.type(input, word);
    expect((input as HTMLInputElement).value).toBe(word);
    expect((input as HTMLInputElement).placeholder).toMatch(
      /your favorite food/i
    );
    expect(changeHandler).toHaveBeenCalledTimes(word.length);
    const child = screen.getByText(/button/i);
    expect(child).toBeInTheDocument();
  });
});
