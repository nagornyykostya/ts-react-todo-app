import React from "react";
import classNames from "classnames";
import { ITaskProps } from "../../interfaces";

const Task: React.FC<ITaskProps> = ({
  task,
  updateTask,
  deleteTask,
}) => {
  const { id, done, text } = task;

  const listItemClass = classNames("list-item", { "list-item_done": done });
  return (
    <li className={listItemClass}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        defaultChecked={done}
        onChange={() => updateTask(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => deleteTask(id)}
      ></button>
    </li>
  );
};

export default Task;
