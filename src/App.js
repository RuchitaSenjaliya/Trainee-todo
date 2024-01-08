import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TodoForm from "./components/todoForm/TodoForm.jsx";
import TodoList from "./components/todoList/TodoList.jsx";
import Login from "./components/login/Login.jsx";

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

function App() {
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
      {/* <Login /> */}
    </div>
  );
}

export default App;
