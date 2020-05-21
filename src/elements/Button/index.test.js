import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed click if isDisabledPresent", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span.spinner-border")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  const { container } = render(<Button types="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render link component (<Link>)", () => {
  const { container } = render(
    <Router>
      <Button href="" types="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <button> tag", () => {
  const { container } = render(<Button types="button"></Button>);

  expect(container.querySelector("button")).toBeInTheDocument();
});

test("Should render <button> tag primary and large", () => {
  const { container } = render(
    <Button types="button" isPrimary isLarge></Button>
  );

  expect(
    container.querySelector("button.btn-primary.btn-lg")
  ).toBeInTheDocument();
});
