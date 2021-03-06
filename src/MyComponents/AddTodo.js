import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("please enter the value")
        }
        else {
            props.addtodo(title, desc);
            setTitle("");
            setDesc("");
        }

    }
    return (
        <div className="container ">
            <h3>AddTodo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title" className="from-label">todo title </label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />

                </div>
                <div className="form-group">
                    <label htmlFor="desc" className="from-label">desc</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}
