import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  /**
   * Here we are testing our button in isolation.
   * This might overlap with the tests in App.test.tsx
   * In a real project you should not test the same thing twice.
   * The coverage will give you a hint what is not covered yet
   */
  it.todo("should render and call clickHandler");
});
