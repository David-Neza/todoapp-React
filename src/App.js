import React, { useState } from 'react';
import './App.css';
import Todo from './Todo'
import TodoForm from './TodoForm';

function App() {
  
  const [todos, setTodos ] = useState([
    {
      text: "Learn React",
      isCompleted: false
    },
    {
      text: "Learn Redux",
      isCompleted: false
    },
    {
      text: "Learn Express",
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos)
  }
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
    <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
