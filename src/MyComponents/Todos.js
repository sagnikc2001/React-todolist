import React from 'react'
import TodoItem from "./TodoItem"

const Todos = (props) => {
  return (
    <div className='container my-3'>
      <h3 className='text-center'>Todos List</h3>

      {/* Iteraring todos array to get individual todo or show null */}
      {props.todos.length === 0 ? (
        "No Todos to Display"
      ) : (
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
            </>
          );
        })
      )}

      {/* {props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })} */}
    </div>
  )
}

export default Todos
