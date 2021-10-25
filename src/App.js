
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import {About} from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];

  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));

  }
  const ondelete = (todo) => {
    console.log(todo)
    //let index =todos.indexOf(todo);
    //todos.splice(index,1)
    setTodos(todos.filter((result) => {
      return result !== todo;
    }))
    localStorage.getItem("todos");

  }
  const addtodo = (title, desc) => {
    console.log("hello done ", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {

      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(myTodo);
    setTodos([...todos, myTodo])



  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, ])

  return (
    <>
      <Router>
        <Header title="My Todos list" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addtodo={addtodo} />
                <Todos todos={todos} ondelete={ondelete} />
              </>)
          }}>   

          </Route>
          <Route exact path="/about">
            <About />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
