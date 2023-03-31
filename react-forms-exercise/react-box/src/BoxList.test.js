import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

//Smoke
it("renders without crashing", function () {
  render(<BoxList />);
});

//Snapshot
it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// Use Form

it("should add new box", function () {
  const { queryByText, getByLabelText } = render(<BoxList />);
  const input = getByLabelText("Color");
  const btn = queryByText("Add Box");
  expect(queryByText("Remove This Box!")).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: "blue" } });
  fireEvent.click(btn);
  expect(queryByText("Remove This Box!")).toBeInTheDocument();
});
