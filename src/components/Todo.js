import React, { useState } from "react";

import TodoList from "./TodoList";


const Todo=()=> {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const [index, setIndex] = useState(null);
    const [editFlag, setEditFlag] = useState(false);
  
    const updateList = (e) => {
      
      setInput(e.target.value);
      
    };
  
    const AddList = () => {
      if (input.trim() !== '') {
        setList([...list, input]);
        console.log("items added in the list")
    }
    setInput('');
    };
  
    const updateItem=(id)=>{
        if(input.trim() !== ''){
            list[index] = input
          }
          console.log(list[index])
          setEditFlag(false);
          setInput('');
      
    }
    const editItems=(id)=>{
        // console.log(list[id]);
        setEditFlag(true);
         setIndex(id);
         if (list[id].trim() !== '') {
             setInput(list[id]);
         }
         
       }
  
    const deleteItems = (id) => {
      console.log("deleted");
      setList((addValue) => {
        return addValue.filter((element, index) => {
          return index !== id;
        });
      });
    };
  
    return (
      
      <div>
        <h3> Enter Anything</h3>
        <input
          type="text" placeholder="Add anything" value={input} onChange={updateList}/>
        <button onClick={AddList}>+</button>
         {editFlag ? (<button onClick={updateItem}>Update</button>) : (<button onClick={AddList}>Update</button>)}
         <TodoList list ={list} onSelect={deleteItems} onUpdate={editItems}/>
      </div>
    );
  }
  
  export default Todo;