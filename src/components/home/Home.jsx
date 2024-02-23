import { useState } from "react";
import TodoForm from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";

export default function Home() {
  const [taskList, setTaskList] = useState([]);
  const onAddTask = (title) => {
    console.log(title);
    setTaskList((prev) => [
      ...prev,
      { title: title, id: Math.random().toString() },
    ]);
  };
  return (
    <>
      <div className="home-dark">
        <div className="todo-dark">
          <TodoForm onAddTask={onAddTask} />
          <TodoList taskList={taskList} />
        </div>
      </div>
    </>
  );
}
