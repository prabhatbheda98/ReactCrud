import React from 'react'
import { Todoitem } from './Todoitem';

export const Todos = (props) => {
    return (
        <div className="container">
            <p>Todo list</p>
            {props.todos.map((todo) => {
                return (
                    
                        <Todoitem todo={todo} key={todo.sno} ondelete={props.ondelete} />
                    
                )
            })}
        </div>
    )
}
