import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodosList from '../TodoList/todoList'
import Header from '../Header/header';
import InputTodo from '../InputTodo/inputTodo';

class TodoContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from react</h1>
                <p>I am componet</p>
            </div>
        );
    }
}
export default TodoContainer