import React from 'react';
import './App.css';

import TodoList from './components/TodoList';

function App() {
 
  return (
    <div className='todo-app'>
      <TodoList/>
      <input type="text" placeholder="Add anything"/>
    </div>
  );
}

export default App;