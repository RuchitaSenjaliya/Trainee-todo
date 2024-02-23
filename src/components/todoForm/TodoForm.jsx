import { FaCheckSquare } from "react-icons/fa";
import "./TodoForm.css";
import { useState } from "react";

export default function TodoForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  const inputChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onAddTask(title);
  };
  return (
    <div className="todo-form">
      <div className="title">
        My Todos
        <span>
          <FaCheckSquare color="gold" />
        </span>
      </div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          name="taskTitle"
          id="task"
          className="task-input"
          placeholder="Enter your task..."
          onChange={inputChangeHandler}
        />
        <button type="submit" className="btn-blue add-btn">
          Add
        </button>
      </form>
    </div>
  );
}
