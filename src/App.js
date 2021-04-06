import React, { useState,useEffect} from 'react';
import { Button, FormControl,InputLabel,Input } from '@material-ui/core'
import Todo from './todo';
import db from './firebase';
import './App.css';

function App() {
  //short term memory.
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
// when the apps loads, we need to listen to the database and fetch newtodoes as they are added/removed
  
  useEffect(()=>{
    // this code here... fires when the apps loads
    db.collection('todos').onSnapshot(onSnapshot=>{
      console.log(setTodos(onSnapshot.docs.map(doc=> doc.data().todo)))
      setTodos(onSnapshot.docs.map(doc=> doc.data().todo))
    })

  }, [])


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
        {/* <input value={input} onChange={event => setInput(event.target.value)} /> */}
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input  value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add to do
        </Button>

        {/* <button type="submit" onClick={addTodo}>Add to do </button> */}
      </form>

      <ul>
          {/** you can loop in jsx */}
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
