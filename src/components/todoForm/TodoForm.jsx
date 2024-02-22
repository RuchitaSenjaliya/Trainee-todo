import React, { useEffect, useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import "./TodoForm.css";

export default function TodoForm({
  onAddTask,
  taskList,
  isEdit,
  editTitle,
  setTaskList,
  onEdit,
}) {
  const [taskTitle, setTaskTitle] = useState("");

  useEffect(() => {
    setTaskTitle(editTitle[0]?.title);
  }, [editTitle]);

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

  const editTaskHandler = (e) => {
    e.preventDefault();
    const data = [...editTitle];
    const index = taskList.findIndex((i) => i.id === data[0].id);
    if (taskTitle.length === 0) {
      return;
    }
    taskList[index] = { id: data[0].id, title: taskTitle };
    setTaskList(taskList);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    onEdit(taskList);
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
      <form action="" onSubmit={isEdit ? editTaskHandler : addTaskHandler}>
        <input
          type="text"
          name="taskTitle"
          id="task"
          className="task-input"
          placeholder="Enter your task..."
          value={taskTitle}
          onChange={taskTitleChangeHandler}
        />
        {isEdit ? (
          <button type="submit" className="btn-blue add-btn">
            Update
          </button>
        ) : (
          <button type="submit" className="btn-blue add-btn">
            Add
          </button>
        )}
      </form>
    </div>
  );
}
