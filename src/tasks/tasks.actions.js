import * as tasksGateway from './tasksGateway';

export const STORE_TASKS = 'STORE_TASKS';

export const storeTasks = (tasksData) => {
    return {
        type: STORE_TASKS,
        payload: {
            tasksData
        }
    };
};

export const fetchTasksList = () => {
    return function (dispatch) {
        tasksGateway.fetchTasksList().then(
            tasksData => dispatch(storeTasks(tasksData))
        )
    };
};

export const createTask = (text) => {
    return function (dispatch) {
        const newTask = {
            text: text,
            done: false,
        }
        tasksGateway
            .createTask(newTask)
            .then(() => dispatch(fetchTasksList()))
    };
};

export const updateTask = (id) => {
    return function (dispatch, getState) {
        const state = getState();
        const { done, text } = state.tasks.tasksList.find((task) => task.id === id);
        const updatedTask = {
            text,
            done: !done,
        };
        tasksGateway
            .updateTask(id, updatedTask)
            .then(() => dispatch(fetchTasksList()))
    };
};

export const deleteTask = (id) => {
    return function (dispatch) {
        tasksGateway
            .deleteTask(id)
            .then(() => dispatch(fetchTasksList()))

    };
};