import React from 'react';
import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
 const [input, setInput]=useState("");
 const [list, setList]=useState([]);
 const updateList=(event)=>{
   setInput(event.target.value);
 }
 const AddList=()=>{
     setList((addValue)=>{
       return [...addValue,input]
     })
     setInput('');
 }
  return (
    <div className='todo-app'>
      <TodoList/>
      <input type="text" placeholder="Add anything" 
      value={input} onChange={updateList}/>
      <button onClick ={AddList}>+</button>
      <ul>
        { list.map((itemsvalue)=>{
          return <li>{itemsvalue}</li>
        })
          }
      </ul>
    </div>
  );
}

export default App;