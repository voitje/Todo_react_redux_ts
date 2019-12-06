import {ITodo, ITodos} from "../todo/types";

export enum ActionTypes {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
}


export const addTodo = (newTodo: ITodo) => {
    return {
        type: ActionTypes.ADD_TODO,
        payload: newTodo
    }
};

export const deleteTodo = (selectedTodo: ITodos) => {
    return {
        type: ActionTypes.DELETE_TODO,
        payload: selectedTodo
    }
};