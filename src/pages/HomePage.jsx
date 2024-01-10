import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import TodoForm from "../components/todoForm/TodoForm";
import TodoList from "../components/todoList/TodoList";

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

  // child to parent connection to get entered data
  const onAddTask = (title) => {
    console.log(title);
    setTaskList((prev) => [
      ...prev,
      { id: Math.random().toString(), title: title },
    ]);
  };

  return (
    <div className="home">
      <Navbar />
      <div className="todo">
        <TodoForm onAddTask={onAddTask} />
        <TodoList taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
}
