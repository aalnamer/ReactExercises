import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import Todo from "./Todo";

//Smoke
it("renders without crashing", function () {
  render(<TodoList />);
});

//Snapshot
it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

// Use Form

it("should add a new  todo", function () {
  const { queryByText, getByLabelText } = render(<TodoList />);
  const input = getByLabelText("New ToDo");
  const btn = queryByText("Add ToDo");
  expect(queryByText("Completed")).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: "Clean" } });
  fireEvent.click(btn);
  expect(queryByText("Completed")).toBeInTheDocument();
});
