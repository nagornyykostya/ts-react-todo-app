import { STORE_TASKS } from './tasks.actions.js';

const initialState = {
    tasksList: []
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_TASKS:
            return {
                ...state,
                tasksList: action.payload.tasksData
            };
        default: return state
    }
};

export default tasksReducer;