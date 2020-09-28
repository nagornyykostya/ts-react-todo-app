import React from "react";
import Task from "./Task";
import { TasksListProps } from "./../../interfaces";

const TasksList: React.FC<TasksListProps> = ({ tasks, updateTask, deleteTask }) => {

  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TasksList;
