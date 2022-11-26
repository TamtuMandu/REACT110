import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
function App() {
 const [taskCount, setTaskCount] = useState()
  return (
    
    <div className='todo-app'>
      <NavBar taskCount={taskCount} />
      <TodoList onTaskCountChange={(count) => setTaskCount(count)}/>
    </div>
  );
}

export default App;
