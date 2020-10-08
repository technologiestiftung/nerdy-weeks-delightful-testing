import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

/**
 * This is a test run that mimics what a user would do.
 *
 * - We assert on the headline
 * - we assert on the input element by its text
 * - we assert the submit button
 *
 * all of these need to be in the document
 *
 * Then we start some user interaction using the userEvent module
 *
 * - we insert some text into the input element
 * - we assert that the h2 element is visisble with the text we entered
 * - we click the sunmit button
 * - we assert that some content of the result is in the document
 * - we assert that the text we entered is in the document
 */
test.todo(
  "renders the app and asserts on all the ui elements if they rendered"
);
