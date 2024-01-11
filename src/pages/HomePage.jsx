import React, { useContext, useState } from "react";
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

export default function HomePage() {
  const [taskList, setTaskList] = useState(DUMMY);
  const { mode, toggleMode } = useContext(ModeContext);

  // child to parent connection to get entered data
  const onAddTask = (title) => {
    console.log(title);
    setTaskList((prev) => [
      ...prev,
      { id: Math.random().toString(), title: title },
    ]);
  };

  return (
    <div className={`${mode === "dark" ? "home-dark" : "home"}`}>
      <div className={`${mode === "dark" ? "todo-dark" : "todo"}`}>
        <TodoForm onAddTask={onAddTask} mode={mode} toggleMode={toggleMode} />
        <TodoList
          taskList={taskList}
          setTaskList={setTaskList}
          mode={mode}
          toggleMode={toggleMode}
        />
      </div>
    </div>
  );
}
