import React, { useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import "./TodoForm.css";

export default function TodoForm({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");

  const taskTitleChangeHandler = (event) => {
    setTaskTitle(event.target.value);
  };

  const addTaskHandler = (e) => {
    e.preventDefault();
    if (taskTitle.length === 0) {
      return;
    }
    onAddTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <div className="todo-form">
      <div className="title">
        My Todos
        <span>
          <FaCheckSquare color="gold" />
        </span>
      </div>
      <form action="" onSubmit={addTaskHandler}>
        <input
          type="text"
          name="task"
          id="task"
          className="task-input"
          placeholder="Enter your task...."
          value={taskTitle}
          onChange={taskTitleChangeHandler}
        />
        <button type="submit" className="btn-blue add-btn">
          Add
        </button>
      </form>
    </div>
  );
}
