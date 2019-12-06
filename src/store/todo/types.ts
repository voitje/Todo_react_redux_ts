import {ActionTypes} from "../action/todoAction";

export interface ITodo {
    text: string
}

export type ITodos = ITodo[];

export interface TodoActions {
    type: ActionTypes
    payload: ITodos
}

export interface AddTodoActions {
    type: typeof ActionTypes
    payload: ITodos
}