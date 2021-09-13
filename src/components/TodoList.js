import React,{useContext} from 'react'
import {TodoContext} from './Todo';

function TodoList() {
 const {list,deleteItems,editItems}= useContext(TodoContext)  
  return (
    <>
     {list.map((itemsValue,id)=>{
        return (
            <ol>
            <li>{itemsValue}</li>
            <button  onClick={()=>deleteItems(id)}>delete</button>
            <button  onClick={()=>editItems(id)}>edit</button>
            </ol>
        )
    })}
  </>
  )
}

export default TodoList


