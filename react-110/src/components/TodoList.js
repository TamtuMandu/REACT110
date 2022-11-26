import React, { useEffect } from 'react';
import { useState } from 'react';
import TodoItem from './TodoItem';



const TodoList = (props) =>   {
    const [tasks, setTasks] = useState([]);
    
    const [text, setText] = useState('');

    const [taskUpdate, setTaskUpdate] = useState(false);

    const [taskIndex, setTaskIndex] = useState();
 
    const handleSubmit = (event) => {
        event.preventDefault();
        if(text !== "") {
            if(taskUpdate) {
                const changeTasks = tasks.map((task, index) => {
                    return index === taskIndex ? text : task;
                })
                setTasks(changeTasks);
                setTaskUpdate(false);
            } else {
                setTasks((prevTasks) => [...prevTasks, text])
            }
            
            setText('');
        }
        
      }

      useEffect(() => {
        props.onTaskCountChange(tasks.length)
      }, [tasks]);

      const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
      };


      const editTask = (index) => {
        setTaskUpdate(true);
        setTaskIndex(index);
        const task = tasks[index];
        setText(task);
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Write Your Task:
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
       </label>
       <button type="submit">
        {
        taskUpdate ? "Update Task" : "Add Task"
        }
        </button>
                </form> 

                {
                    tasks.map((task, index) => <TodoItem onDelete={() => deleteTask(index)} 
                    onEdit={()=> editTask(index)} task={task} key={index}/> )
                }     
        
        </div>
    );
};


    


export default TodoList;