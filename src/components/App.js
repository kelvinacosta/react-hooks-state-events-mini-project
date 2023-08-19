import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });



function App() {
  
  const [tasks,setTask] = useState(TASKS)
  // const [categories,setSelectCategory] = useState(CATEGORIES)
  
  function deletetask(itemText){
    const updateTask = tasks.filter((item)=> item.text !== itemText)
    setTask(updateTask)
    // console.log("Hi from the app")
    
  }

  function onSelectedCategory(itemCategory){
   if(itemCategory === "All"){
    setTask(TASKS)
   }else{
    const updateCategoryTask = TASKS.filter((item)=> item.category === itemCategory)
    setTask(updateCategoryTask)
   }
  }

  function onTaskFormSubmit(newForm){
    setTask([...tasks,newForm])
  }

  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectedCategory={onSelectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} deletetask={deletetask}  />
    </div>
  );
}

export default App;
