import React, { useState } from 'react';
import './App.css';

function App() {
  //short term memory.
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take Rubish out', 'back to bed']);
  const [input, setInput] = useState('');
  const addTodo = (event)=> {
    // this will fire of when we add do!
    setTodos([...todos,input])
  }
  console.log(todos)
  return (
    <div className="App">
      <h1>Hello Clever Programmers</h1>
      <input value={input} onChange={event=> setInput(event.target.value)}/>
      <button onClick={addTodo}>Add to do </button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
