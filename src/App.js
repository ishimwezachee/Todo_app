import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./todo";
import db from "./firebase";
import firebase from "firebase";
import "./App.css";

function App() {
  //short term memory.
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // when the apps loads, we need to listen to the database and fetch newtodoes as they are added/removed

  useEffect(() => {
    // this code here... fires when the apps loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((onSnapshot) => {
        setTodos(
          onSnapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  
  const addTodo = (event) => {
    //  fire of when we add do!
    event.preventDefault(); // ==>  stop the refresh
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setTodos([...todos, input])
    setInput("");
  };

  return (
    <div className="App">
      <h1>ToDO App</h1>
      <form>
        {/* <input value={input} onChange={event => setInput(event.target.value)} /> */}
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={inputHandler} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add to do
        </Button>

        {/* <button type="submit" onClick={addTodo}>Add to do </button> */}
      </form>

      <ul>
        {/** you can loop in jsx */}
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;

// hosted link ==> https://todo-app-62f2e.web.app/
