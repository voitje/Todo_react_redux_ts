import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {IState} from "./store/createStore";
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {addTodo} from "./store/action/todoAction";
import {ITodo, ITodos} from "./store/todo/types";

interface ITodoProps {
    addTodo: (newTodo: ITodo) => void
    todos: ITodos
}

const App: React.FC<ITodoProps> = (props) => {
    const [value, setValue] = useState<ITodo>({text: ''});

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({text: e.target.value})
    };

    const handleClickButton = () => {
        props.addTodo(value)
        console.log(props.todos)
    };

    return (
        <div className='App'>
            <input
                type='text'
                onChange={(e) => handleChangeInput(e)}
            />
            <input
                type='button'
                value='Add'
                onClick={handleClickButton}
            />
        </div>
    );
};

const mapStateToProps = (store: IState) => ({
    todos: store.Todos
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addTodo: (newTodo: ITodo) => dispatch(addTodo(newTodo))
});

export default (connect)(mapStateToProps, mapDispatchToProps)(App);
