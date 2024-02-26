import { useEffect, useState } from "react";
import TodoForm from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";

const getLocalData = () => {
  const todos = localStorage.getItem("todoTrainee");
  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
};

export default function Home() {
  const [taskList, setTaskList] = useState(getLocalData);

  const onAddTask = (title) => {
    console.log(title);
    setTaskList((prev) => [
      ...prev,
      { title: title, id: Math.random().toString() },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("todoTrainee", JSON.stringify(taskList));
  }, [taskList]);

  const deleteTaskHanlder = (itemId) => {
    const updatedTaskList = taskList.filter((item) => item.id !== itemId);
    setTaskList(updatedTaskList);
  };

  return (
    <>
      <div className="home-dark">
        <div className="todo-dark">
          <TodoForm onAddTask={onAddTask} />
          <div className="todo-list">
            {/* conditional rendering */}
            {taskList.length === 0 && (
              <div className="empty-list">No task added.</div>
            )}

            {/* rendering list of task  */}
            {taskList.map((task) => (
              <TodoList
                title={task.title}
                key={task.id}
                deleteTaskHanlder={() => deleteTaskHanlder(task.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
