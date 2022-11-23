import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import Todolist from './components/todolist';


function App() {
  const [inputText, setInputText] = useState(" "); 
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>My todo list</h1>
      <Form setInputText={setInputText} />
      <Todolist />
    </div>
  );
}

export default App;
