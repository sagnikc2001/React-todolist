import React, { useState } from 'react'

const AddTodo = (props) => {

    // Declare a new state variable, which we'll call "title"
    const [title, setTitle] = useState("");
    // Declare a new state variable, which we'll call "desc"
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if ((!title || !desc) && (title.length===0 || desc.length===0)) {
            alert("Title or Description cannot be Blank!");
        }
        else {
            props.addTodo(title, desc);
            
            // For clearing the imput box of UI
            setTitle("");
            setDesc("");
        }
    }

    return (
        <>
        <div className='container'>
                <h3 className='text-center my-3'>Add a Todo</h3>
                <form onSubmit={submit} className="row g-3">
                    <div className="col-12">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" placeholder="Enter Title" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" placeholder="Enter Description" />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                    </div>
                </form>
        </div>
        </>
    )
}

export default AddTodo
