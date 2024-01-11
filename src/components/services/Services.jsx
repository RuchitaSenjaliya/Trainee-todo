import React, { useContext } from "react";
import "./Services.css";
import ModeContext from "../../context/mode-content";

export default function Services({ data }) {
  const { mode } = useContext(ModeContext);
  return (
    <div className="services">
      <div className={`${mode === "dark" ? "home-dark" : "home"}`}>
        <div className="content">
          <div className="title">List of ToDos</div>
          <div className="container">
            {data.todos.map((item) => (
              <div
                className={`${mode === "dark" ? "card-dark" : "card"}`}
                key={item.id}>
                <div className="todo-title">{item.todo}</div>
                {console.log(item.completed)}
                <div
                  className={`${
                    item.completed ? "chip completed" : " chip pending"
                  }`}>
                  {item.completed ? "Completed" : "Pending"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
