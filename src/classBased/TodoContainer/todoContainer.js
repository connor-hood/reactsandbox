import React from 'react'
import TodosList from '../TodoList/todoList';
import Header from '../Header/header';
import InputTodo from '../InputTodo/inputTodo';

class TodoContainer extends React.Component {
    state = {
        todos: []
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
    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        }
    }
    componentDidMount() {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            this.setState({
                todos: loadedTodos
            })
        }
    }
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
                deleteTodoProps={this.delTodo}
                setUpdate={this.setUpdate}/>
            </div>
            </div>
        );
    }
}
export default TodoContainer