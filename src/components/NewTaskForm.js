import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({categories,onTaskFormSubmit}) {
  
  // console.log("Hi from the newTask",categories)
  const [selectedCategory, setSelectCategory] = useState("")
  const [detailsCategory, setDetailsCategory] = useState("")



  const listOfCategories = categories.map((category)=> category !== selectedCategory && category !== "All" ?(<option key={category}>{category}</option>):null)

  function handleChange(event){
    setDetailsCategory(event.target.value)
    
  
  }

  function handleSelect(event){
    setSelectCategory(event.target.value)
  }
  function handleSubmit(event){
    
    event.preventDefault()
    const newFormData = {
      id: uuid(),
      text: detailsCategory,
      category: selectedCategory
    }
    onTaskFormSubmit(newFormData)
    setDetailsCategory("")
    setSelectCategory("")
  }

  return (
    
    
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={detailsCategory}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelect} value={selectedCategory}>
          {listOfCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
