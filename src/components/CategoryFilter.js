import React,{useState} from "react";



function CategoryFilter({categories,onSelectedCategory}) {
  

  const [selectedCategory,setSelectedCategory] = useState("All")

  function onClickCategory(category){
    setSelectedCategory(category)
    onSelectedCategory(category)
    
  }

  
  
  const listCategories = categories.map(category =>
  <button key={category} className={`${selectedCategory === category ? "selected":""}`} onClick={()=>onClickCategory(category)}>{category}</button>)
  
  return (  
    <div className="categories">
      <h5>Category filters</h5>
      {listCategories}
    </div>
  );
}

export default CategoryFilter;
