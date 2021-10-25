import React from 'react'

export const Todoitem = ({ todo, ondelete }) => {
    return (
        <>
        <div>

            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button type="button" className="btn btn-danger" onClick={() => { ondelete(todo) }}>delete</button>
        </div>
        <hr/>
        </>
    )
}
