import React from 'react'
import TodosList from '../TodoList/todoList'

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
    render() {
        return (
            <div>
                <TodosList todos={this.state.todos} />
            </div>
        );
    }
}
export default TodoContainer