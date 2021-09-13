import React from 'react'

function TodoList({list,onSelect,onUpdate}) {
 
  return (
    <>
    {list.map((itemsValue,id)=>{
        return (
            <ol>
            <li>{itemsValue}</li>
            <button  onClick={()=>onSelect(id)}>delete</button>
            <button  onClick={()=>onUpdate(id)}>edit</button>
            </ol>
        )
    })}
    
   
  </>
  )
}

export default TodoList


