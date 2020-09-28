export interface ITask {
  id: string;
  done: boolean;
  text: string;
}

export interface ITaskProps {
  task: ITask;
  updateTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export interface TasksListProps {
  tasks: Array<ITask>;
  updateTask: () => void;
  deleteTask: () => void;
}

export interface ToDoListProps {
  fetchTasksList: () => void;
  tasks: Array<ITask>;
  createTask: () => void;
  updateTask: () => void;
  deleteTask: () => void;
}
