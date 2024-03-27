import React from "react";
import { useParams } from "react-router-dom";

export default function TodoDetail() {
  const params = useParams();
  console.log(params);

  const allTodoData = JSON.parse(localStorage.getItem("tasks"));

  const currentTask = allTodoData.filter((item) => item.id === params.todoId);

  console.log(currentTask);
  return (
    <div>
      TodoDetail - {params.todoId}
      {currentTask.map((item) => (
        <div className="title">{item.title}</div>
      ))}
    </div>
  );
}
