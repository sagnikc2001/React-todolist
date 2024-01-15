import React from 'react'

const TodoItem = (props) => {
  return (
    <div>
      <h4>{props.todo.title}</h4>
      <h4>{props.todo.desc}</h4>
      <button className="btn btn-sm btn-danger" key={props.todo.sno} onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    </div>
  )
}

export default TodoItem
