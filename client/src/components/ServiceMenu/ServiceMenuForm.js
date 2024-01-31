import React, { useState, useEffect } from "react"
import CategoryForm from "./CategoryForm"
import ProjectForm from "./ProjectForm"

const ServiceMenuForm = ({ initialData = null, onSave, onClose }) => {
  const [menuData, setMenuData] = useState({
    location: "",
    categories: [
      {
        name: "",
        profilePic: "",
        projects: [{ name: "", price: "", duration: "" }],
      },
    ],
  })

  useEffect(() => {
    if (initialData) {
      setMenuData(initialData)
    }
  }, [initialData])

  const handleInputChange = (event) => {
    setMenuData({ ...menuData, [event.target.name]: event.target.value })
  }

  // Adjusting to directly handle event changes
  const handleCategoryChange = (categoryIndex, event) => {
    const { name, value } = event.target
    const updatedCategories = [...menuData.categories]
    updatedCategories[categoryIndex] = {
      ...updatedCategories[categoryIndex],
      [name]: value,
    }
    setMenuData({ ...menuData, categories: updatedCategories })
  }

  // Updating projects requires passing event to access target values
  const handleProjectChange = (categoryIndex, projectIndex, event) => {
    const { name, value } = event.target
    const updatedProjects = [...menuData.categories[categoryIndex].projects]
    updatedProjects[projectIndex] = {
      ...updatedProjects[projectIndex],
      [name]: value,
    }

    const updatedCategories = [...menuData.categories]
    updatedCategories[categoryIndex].projects = updatedProjects
    setMenuData({ ...menuData, categories: updatedCategories })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSave(menuData)
    onClose()
  }

  return (
    <div>
      <h2>{initialData ? "Update" : "Add New"} Service Menu</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={menuData.location}
            onChange={handleInputChange}
          />
        </div>
        {menuData.categories.map((category, categoryIndex) => (
          <CategoryForm
            key={categoryIndex}
            category={category}
            onCategoryChange={(e) => handleCategoryChange(categoryIndex, e)}
            categoryIndex={categoryIndex}
          />
        ))}
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default ServiceMenuForm
