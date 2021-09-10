import React from "react";
import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  // const [editingText, setEditingText] = useState("");
  // const [todoEditing, setTodoEditing] = useState(null);

  const updateList = (event) => {
    setInput(event.target.value);
  };

  const AddList = () => {
    console.log("value added")
    setList((addValue) => {
      return [...addValue, input];
    });
    setInput("");
  };

  // const updateItems=(id)=>{
  //    const newValue=[...list].map((newVal)=>{
  //      if(input.id===id){
  //        input.text=editingText;
  //      }
  //      return newVal;
  //    })
  //    setList(newValue);
  //    setTodoEditing(null)
  // }

  const deleteItems = (id) => {
    console.log("deleted");
    setList((addValue) => {
      return addValue.filter((element, index) => {
        return index !== id;
      });
    });
  };

  return (
    
    <div className="todo-app">
      <h1> Enter Anything</h1>
      <input
        type="text"
        placeholder="Add anything"
        value={input}
        onChange={updateList}
      />
      <button onClick={AddList}>+</button>
      <ul>
        {list.map((itemsvalue, id) => {
          return (
            <TodoList
              itemsValue={itemsvalue}
              key={id}
              onSelect={deleteItems}
              id={id}
              // onUpdate={updateItems}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
