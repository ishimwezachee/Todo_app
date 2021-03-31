import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import './App.css';

function App() {
  //short term memory.
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take Rubish out', 'back to bed']);
  const [input, setInput] = useState('');
  const addTodo = (event) => {
    // this will fire of when we add do!
    event.preventDefault(); // will stop the refresh 
    setTodos([...todos, input])
    setInput('');
  }
  console.log(todos)
  return (
    <div className="App">
      <h1>Hello Clever Programmers</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <Button type="submit" onClick={addTodo} variant="contained" color="primary">
        Add to do
        </Button>

        {/* <button type="submit" onClick={addTodo}>Add to do </button> */}
      </form>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
