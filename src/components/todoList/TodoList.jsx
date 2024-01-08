import React from "react";
import "./TodoList.css";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

export default function TodoList({ taskList, setTaskList }) {
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

  return (
    <div className="todo-list">
      {/* conditional rendering */}
      {taskList.length === 0 && (
        <div className="empty-list">No task added.</div>
      )}

      {/* rendering list of task  */}
      {taskList.map((task) => (
        <div className="task" key={task.id}>
          <div className={`task-title ${task.completed && "line-through"}`}>
            {task.title}
          </div>
          <div className="actions">
            <div
              className="complete-btn"
              onClick={() => completeTaskHanlder(task.id)}>
              <FaCheck size={21} />
            </div>
            <div
              className="delete-btn"
              onClick={() => deleteTaskHanlder(task.id)}>
              <MdDelete size={21} />
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