import React from "react"

const CategoryForm = ({
  category = { name: "", profilePic: "" },
  onCategoryChange,
  categoryIndex,
}) => {
  // Handler to capture changes and propagate them up to the parent component
  const handleChange = (e) => {
    const { name, value } = e.target
    // Construct the updated category object
    const updatedCategory = { ...category, [name]: value }
    // Call the parent handler with the updated object
    onCategoryChange(categoryIndex, updatedCategory)
  }

  return (
    <div>
      <label>Category Name:</label>
      <input
        type="text"
        name="name"
        value={category.name}
        onChange={handleChange} // Use the local handler
      />
      <label>Profile Picture URL:</label>
      <input
        type="text"
        name="profilePic"
        value={category.profilePic}
        onChange={handleChange} // Use the local handler
      />
    </div>
  )
}

export default CategoryForm
