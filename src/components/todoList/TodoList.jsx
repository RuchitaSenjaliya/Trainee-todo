import React from "react";
import "./TodoList.css";
import { MdDelete } from "react-icons/md";
import { FaCheck, FaEdit } from "react-icons/fa";

export default function TodoList({ taskList }) {
  return (
    <div className="todo-list">
      {/* conditional rendering */}
      {taskList.length === 0 && (
        <div className="empty-list">No task added.</div>
      )}

      {/* rendering list of task  */}
      {taskList.map((task) => (
        <div className="task-dark" key={task.id}>
          <div className={`task-title ${task.completed && "line-through"}`}>
            {task.title}
          </div>
          <div className="actions">
            <div className="complete-btn">
              <FaCheck size={21} />
            </div>
            <div className="edit-btn">
              <FaEdit size={21} />
            </div>
            <div className="delete-btn">
              <MdDelete size={21} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
