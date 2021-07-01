import React from 'react'
import TodosList from '../TodoList/todoList'
import Header from '../Header/header';

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup Dev env",
                completed: true
            },
            {
                id: 2,
                title: "Develop site and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to server",
                completed: false
            }
        ]
    }

    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            }),
        }))
    };
    render() {
        return (
            <div>
                <Header />
                <TodosList todos={this.state.todos} handleChangeProps={this.handleChange}/>
            </div>
        );
    }
}
export default TodoContainer