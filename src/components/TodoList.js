import React from 'react'

function TodoList({list,onSelect,onUpdate}) {
 
  return (
    <>
    {list.map((itemsValue,id)=>{
        return (
            <ul>
            <li>{itemsValue}</li>
            <button  onClick={()=>onSelect(id)}>delete</button>
            <button  onClick={()=>onUpdate(id)}>edit</button>
            </ul>
        )
    })}
    
   
  </>
  )
}

export default TodoList


