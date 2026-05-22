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
    if (isEdit) {
      setTaskTitle(editTitle[0].title);
    }
  }, [editTitle, isEdit]);

  const taskTitleChangeHandler = (event) => {
    setTaskTitle(event.target.value);
  };

  const addTaskHandler = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "") {
      return;
    }
    onAddTask(taskTitle);
    setTaskTitle("");
  };

  console.log({ taskTitle });

  const editTaskHandler = (e) => {
    e.preventDefault();
    const data = [...editTitle];
    const index = taskList.findIndex((i) => i.id === data[0].id);
    if (taskTitle.trim() === "") {
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
