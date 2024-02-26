import React from "react";
import "./TodoList.css";
import { MdDelete } from "react-icons/md";
import { FaCheck, FaEdit } from "react-icons/fa";

export default function TodoList({ title, deleteTaskHanlder }) {
  return (
    <div className="task-dark">
      <div className={`task-title`}>{title}</div>
      <div className="actions">
        <div className="complete-btn">
          <FaCheck size={21} />
        </div>
        <div className="edit-btn">
          <FaEdit size={21} />
        </div>
        <div className="delete-btn" onClick={deleteTaskHanlder}>
          <MdDelete size={21} />
        </div>
      </div>
    </div>
  );
}
