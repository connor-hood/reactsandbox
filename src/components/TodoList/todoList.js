import React, { Component } from 'react';
import TodoItem from '../TodoItem/todoItem';

class TodosList extends Component {

    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default TodosList