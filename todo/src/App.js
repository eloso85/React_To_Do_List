import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo'
import todoData from './todosData'

function App() {
    const todoItems = todoData.map(item =><ToDo key = {item.id} item={item} />)
  return (
    <div className="todo-list">
      {todoItems}
      
    </div>
  )
}

export default App;
