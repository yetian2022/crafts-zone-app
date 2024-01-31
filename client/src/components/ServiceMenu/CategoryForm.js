// src/components/CategoryForm.js
import React from "react"

const CategoryForm = ({ category, onCategoryChange, categoryIndex }) => {
  return (
    <div>
      <label>Category Name:</label>
      <input
        type="text"
        name="name"
        value={category.name}
        onChange={onCategoryChange} // Directly use the passed function
      />
      <label>Profile Picture URL:</label>
      <input
        type="text"
        name="profilePic"
        value={category.profilePic}
        onChange={onCategoryChange} // Directly use the passed function
      />
      {/* Assuming ProjectForm components or inputs for projects are handled similarly */}
    </div>
  )
}

export default CategoryForm
