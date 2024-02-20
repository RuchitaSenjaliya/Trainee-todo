import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import TodoForm from "../components/todoForm/TodoForm";
import TodoList from "../components/todoList/TodoList";
import ModeContext from "../context/mode-content";

// list of dummy task
const DUMMY = [
  {
    id: "1",
    title: "Read book",
  },
  {
    id: "2",
    title: "Go to market",
  },
];

const getLocalTasks = () => {
  let tasks = localStorage.getItem("tasks");
  if (tasks) {
    return JSON.parse(tasks);
  } else {
    return [];
  }
};

export default function HomePage() {
  const [taskList, setTaskList] = useState(getLocalTasks);
  const { mode, toggleMode } = useContext(ModeContext);
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState("");

  // child to parent connection to get entered data
  const onAddTask = (title) => {
    console.log(title);
    setTaskList((prev) => [
      ...prev,
      { id: Math.random().toString(), title: title },
    ]);
    localStorage.setItem("todos", JSON.stringify(taskList));
  };

  const editTaskHandler = (id) => {
    setIsEdit(true);
    const taskToEdit = taskList.filter((item) => item.id === id);
    setEditTitle(taskToEdit);
  };

  const onEdit = (data) => {
    setTaskList(data);
    setIsEdit(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className={`${mode === "dark" ? "home-dark" : "home"}`}>
      <div className={`${mode === "dark" ? "todo-dark" : "todo"}`}>
        <TodoForm
          onAddTask={onAddTask}
          taskList={taskList}
          setTaskList={setTaskList}
          isEdit={isEdit}
          editTitle={editTitle}
          onEdit={onEdit}
        />
        <TodoList
          taskList={taskList}
          setTaskList={setTaskList}
          mode={mode}
          toggleMode={toggleMode}
          editTaskHandler={editTaskHandler}
        />
      </div>
    </div>
  );
}
