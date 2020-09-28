import React, { useEffect } from "react";
import TasksList from "./TasksList";
import CreateTaskInput from "./CreateTaskInput";
import * as tasksActions from "../tasks.actions.js";
import { connect } from "react-redux";
import { sortedTasks } from "../tasks.selectors";
import { ToDoListProps } from "./../../interfaces";

const ToDoList : React.FC<ToDoListProps> = ({
  fetchTasksList,
  tasks,
  createTask,
  updateTask,
  deleteTask,
}) => {
  useEffect(() => {
    fetchTasksList();
  }, [fetchTasksList]);
  return (
    <>
      <h1 className="title">To-Do List</h1>
      <main className="todo-list">
        <CreateTaskInput createTask={createTask} />
        <TasksList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </main>
    </>
  );
};

const mapState = (state: Object) => {
  return {
    tasks: sortedTasks(state),
  };
};

const mapDisp = {
  fetchTasksList: tasksActions.fetchTasksList,
  createTask: tasksActions.createTask,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
};

export default connect(mapState, mapDisp)(ToDoList);
