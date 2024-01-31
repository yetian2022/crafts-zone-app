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
        projects: [{ name: "", price: "", duration: "", categoryName: "" }],
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

  const handleCategoryChange = (categoryIndex, event) => {
    const { name, value } = event.target
    const updatedCategories = [...menuData.categories]
    updatedCategories[categoryIndex] = {
      ...updatedCategories[categoryIndex],
      [name]: value,
    }
    setMenuData({ ...menuData, categories: updatedCategories })
  }

  const handleProjectChange = (categoryIndex, projectIndex, updatedProject) => {
    const updatedProjects = [...menuData.categories[categoryIndex].projects]
    updatedProjects[projectIndex] = updatedProject

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
          <div key={`category-${categoryIndex}`}>
            <CategoryForm
              category={category}
              onCategoryChange={(e) => handleCategoryChange(categoryIndex, e)}
            />
            {category.projects.map((project, projectIndex) => (
              <ProjectForm
                key={`project-${projectIndex}`}
                project={project}
                categories={menuData.categories} // Pass all categories for the dropdown
                onProjectChange={(updatedProject) =>
                  handleProjectChange(
                    categoryIndex,
                    projectIndex,
                    updatedProject
                  )
                }
              />
            ))}
          </div>
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
