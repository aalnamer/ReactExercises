import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import Todo from "./Todo";

it("renders without crashing", function () {
  render(<TodoList />);
});

//Snapshot
it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});
