import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodosList from '../TodoList/todoList';
import Header from '../Header/header';
import InputTodo from '../InputTodo/inputTodo';

class TodoContainer extends React.Component {
    state = {
        todos: [
        {
            id: 1,
            title: "setup dev env",
            completed: true
        },
        {
            id: 2,
            title: "Dev website and add content",
            completed: false
        },
        {
            id: 3,
            title: "Deploy to server",
            completed: false
        },
            
        ]
    }
    handleChange = id => {
        this.setState(prevState =>({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            }),
        }));
    };
    render() {
        return (
            <div>
                <Header />
                {/*this.state.todos is what is given as props in TodoList */}
                <TodosList todos={this.state.todos} handleChangeProps={this.handleChange}/>
            </div>
        );
    }
}
export default TodoContainer