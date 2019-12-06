import {ITodos, TodoActions} from "../todo/types";
import {ActionTypes} from "../action/todoAction";


const initialState: ITodos = [];

export const todoReducer = (
    state = initialState,
    action: TodoActions) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO: {
            return [
                ...state, action.payload,
            ]
        }
        case ActionTypes.DELETE_TODO: {
            return [
                ...state, action.payload
            ]
        }
        default:
            return state;
    }
};