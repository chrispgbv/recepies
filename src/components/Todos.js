import React, { useState } from "react";
import FormTodos from "./FormTodos";
import { FiTrash } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";

const Todos = ({ todos, removeTodos, editTodos }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    editTodos(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <FormTodos edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => removeTodos(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <FiTrash onClick={() => removeTodos(todo.id)} className="delete-icon" />
        <FiEdit2
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todos;
