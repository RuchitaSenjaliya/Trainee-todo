import React from "react";
import "./TodoList.css";
import { MdDelete } from "react-icons/md";
import { FaArrowRight, FaCheck, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function TodoList({
  taskList,
  setTaskList,
  mode,
  editTaskHandler,
}) {
  const navigate = useNavigate();

  const deleteTaskHanlder = (id) => {
    const filteredTask = taskList.filter((item) => item.id !== id);
    setTaskList(filteredTask);
  };

  const completeTaskHanlder = (id) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  const moreBtnHanlder = (id) => {
    navigate(`/todo/${id}`);
  };

  return (
    <div className="todo-list">
      {/* conditional rendering */}
      {taskList.length === 0 && (
        <div className="empty-list">No task added.</div>
      )}

      {/* rendering list of task  */}
      {taskList.map((task) => (
        <div
          className={`${mode === "dark" ? "task-dark" : "task"}`}
          key={task.id}>
          <div className={`task-title ${task.completed && "line-through"}`}>
            {task.title}
          </div>
          <div className="actions">
            <div
              className="complete-btn"
              onClick={() => completeTaskHanlder(task.id)}>
              <FaCheck size={21} />
            </div>
            <div className="edit-btn" onClick={() => editTaskHandler(task.id)}>
              <FaEdit size={21} />
            </div>
            <div
              className="delete-btn"
              onClick={() => deleteTaskHanlder(task.id)}>
              <MdDelete size={21} />
            </div>
            <div className="more-btn" onClick={() => moreBtnHanlder(task.id)}>
              <FaArrowRight size={20} />
            </div>
          </div>
        </div>
      ))}

      {/* <div className="task">
        <div className="task-title">Lorem, ipsum dolor sit amet</div>
        <div className="delete-btn">
          <MdDelete size={24} />
        </div>
      </div>
      <div className="task">
        <div className="task-title">Title</div>
        <div className="delete-btn">
          <MdDelete size={24} />
        </div>
      </div>
      <div className="task">
        <div className="task-title">Title</div>
        <div className="delete-btn">
          <MdDelete size={24} />
        </div>
      </div>
      <div className="task">
        <div className="task-title">Title</div>
        <div className="delete-btn">
          <MdDelete size={24} />
        </div>
      </div> */}
    </div>
  );
}
