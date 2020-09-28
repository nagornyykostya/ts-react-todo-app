import { createSelector } from 'reselect';

export const tasksSelector = (state: any) => {
    return state.tasks.tasksList
}

export const sortedTasks = createSelector(
    [tasksSelector],
    (tasks) => {
        return tasks.slice().sort((a: any, b: any) => a.done - b.done)
    })