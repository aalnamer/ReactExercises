import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";

import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const INITIAL_STATE = [];

  const [todos, setTodos] = useState(INITIAL_STATE);

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
  };
  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <div>
        {todos.map(({ id, todo }) => (
          <Todo id={id} todo={todo} handleRemove={remove} key={id} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
