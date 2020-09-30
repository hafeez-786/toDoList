import React from 'react'
import '../components/toDo.css'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="container">
    <h1 className="ToDo-heading">ToDo List</h1>
    <div className="row">
      <div className="col-lg-6 col-sm-8 toDo-container">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </div>
  </div>
)

export default App
