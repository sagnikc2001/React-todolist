import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState, useEffect, useLayoutEffect } from "react";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("This is onDelete", todo);
    // Deleting this way wont work in React, will work in Angular
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(
      todos.filter((e) => {
        return e !== todo; // Returns only those todo which are true
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("Adding this todo", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  };

  // Declare a new state variable, which we'll call "todos"
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header title="My Todos List" searchBar={false} />
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
              <Footer />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      {/* <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer /> */}
    </>
  );
}

export default App;
