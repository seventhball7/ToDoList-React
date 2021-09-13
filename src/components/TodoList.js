import React from 'react'

function TodoList(props) {
 
  return (
    <>
    <div>
    <li>{props.itemsValue}</li>
    <button  onClick={()=>props.onSelect(props.id)}>delete</button>
    <button  onClick={()=>props.onUpdate(props.id)}>edit</button>
  </div>
  </>
  )
}

export default TodoList