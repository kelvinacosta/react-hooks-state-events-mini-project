import React from "react";
//Import a random key
import { v4 as uuidv4 } from 'uuid';
import Task from "./Task"

function TaskList({tasks,deletetask,onClickCategory}) {
  
  //console.log('from task list comp: ',task)

  
  const taskList = tasks.map(listTask => <Task key={uuidv4()} 
  text={listTask.text} 
  category={listTask.category} 
  onDelete={()=>deletetask(listTask.text)
  } 
  onClickCategory={onClickCategory}
  
  
  />)
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
