import { createStore } from 'redux';
import {rootReducer} from "./reducer/rootReducer";
import {ITodos} from "./todo/types";

export  interface IState {
    Todos: ITodos
}

export const store = createStore(
    rootReducer
);