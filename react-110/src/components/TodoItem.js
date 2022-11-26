import React from 'react';


function TodoItem  (props){
    
  
    return (
        <div>
           {props.task}
            <button onClick={() => props.onEdit()}>
                Edit item
            </button>
            <button 
            onClick={() => props.onDelete()}
            >Delete item
            </button>

           
            
        </div>
    );
};



export default TodoItem;