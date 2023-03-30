import React from "react";

const Todo = ({ todo, id, handleRemove }) => {
  const remove = () => handleRemove(id);
  return (
    <ul className="todo">
      {todo}
      <div>
        <button onClick={remove}>Completed</button>
      </div>
    </ul>
  );
};

export default Todo;
