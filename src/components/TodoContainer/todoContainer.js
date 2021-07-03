import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodosList from '../TodoList/todoList';
import Header from '../Header/header';
import InputTodo from '../InputTodo/inputTodo';

class TodoContainer extends React.Component {
    state = {
        todos: [
        {
            id: uuidv4(),
            title: "setup dev env",
            completed: true
        },
        {
            id: uuidv4(),
            title: "Dev website and add content",
            completed: false
        },
        {
            id: uuidv4(),
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
    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };
    addTodoItem = title => {
        const newTodo = {
            id: 4,
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };
    render() {
        return (
            <div className="container">
            <div className="inner">
                <Header />
                <InputTodo 
                addTodoProps={this.addTodoItem}/>
                {/*this.state.todos is what is given as props in TodoList */}
                <TodosList 
                todos={this.state.todos} 
                handleChangeProps={this.handleChange} 
                deleteTodoProps={this.delTodo}/>
            </div>
            </div>
        );
    }
}
export default TodoContainer