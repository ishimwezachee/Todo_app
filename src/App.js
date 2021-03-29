import React, {useState} from 'react';
import './App.css';

function App() {
  // set a short term memory.
  const [todos, setTodos] = useState(['Take dogs for a walk','Take Rubish out','back to bed']);
  console.log(todos)
  return (
    <div className="App">
    <h1>Hello Clever Programmers</h1>
    <input/>
    <button>Add to do </button>

    <ul>
      {todos.map(todo => (
        <li>{todo}</li>
      ))}
    </ul>
    </div>
  ); 
}

export default App;
