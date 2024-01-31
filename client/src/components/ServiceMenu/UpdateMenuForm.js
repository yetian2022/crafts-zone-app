import React, { useState, useEffect } from "react"
import CategoryForm from "./CategoryForm"
import ProjectForm from "./ProjectForm"

const UpdateMenuForm = ({ currentMenu, onSave, onClose }) => {
  const [menu, setMenu] = useState(currentMenu)

  useEffect(() => {
    setMenu(currentMenu) // Set initial form values to current menu details
  }, [currentMenu])

  const handleInputChange = (e) => {
    setMenu({ ...menu, [e.target.name]: e.target.value })
  }

  const handleCategoryChange = (categoryIndex, e) => {
    const updatedCategories = [...menu.categories]
    updatedCategories[categoryIndex] = {
      ...updatedCategories[categoryIndex],
      [e.target.name]: e.target.value,
    }
    setMenu({ ...menu, categories: updatedCategories })
  }

  const handleProjectChange = (categoryIndex, projectIndex, e) => {
    const updatedProjects = [...menu.categories[categoryIndex].projects]
    updatedProjects[projectIndex] = {
      ...updatedProjects[projectIndex],
      [e.target.name]: e.target.value,
    }
    const updatedCategories = [...menu.categories]
    updatedCategories[categoryIndex].projects = updatedProjects
    setMenu({ ...menu, categories: updatedCategories })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(menu._id, menu) // Pass the updated menu data to the onSave function
    onClose() // Close the form
  }

  return (
    <div>
      <h2>Update Service Menu</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={menu.location}
            onChange={handleInputChange}
          />
        </div>
        {menu.categories.map((category, categoryIndex) => (
          <div key={`category-${categoryIndex}`}>
            <CategoryForm
              category={category}
              onCategoryChange={(e) => handleCategoryChange(categoryIndex, e)}
              categoryIndex={categoryIndex}
            />
            {category.projects.map((project, projectIndex) => (
              <ProjectForm
                key={`project-${projectIndex}`}
                project={project}
                onProjectChange={(e) =>
                  handleProjectChange(categoryIndex, projectIndex, e)
                }
                categoryIndex={categoryIndex}
                projectIndex={projectIndex}
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

export default UpdateMenuForm
