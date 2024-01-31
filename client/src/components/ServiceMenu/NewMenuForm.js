import React, { useState } from "react"
import CategoryForm from "./CategoryForm"
import ProjectForm from "./ProjectForm"

const NewMenuForm = ({ onSave, onClose }) => {
  const [newMenu, setNewMenu] = useState({
    location: "",
    categories: [
      {
        name: "",
        profilePic: "",
        projects: [
          {
            name: "",
            price: 0,
            duration: "",
          },
        ],
      },
    ],
  })

  const handleInputChange = (e) => {
    setNewMenu({ ...newMenu, [e.target.name]: e.target.value })
  }

  const handleCategoryChange = (categoryIndex, e) => {
    const updatedCategories = [...newMenu.categories]
    updatedCategories[categoryIndex] = {
      ...updatedCategories[categoryIndex],
      [e.target.name]: e.target.value,
    }
    setNewMenu({ ...newMenu, categories: updatedCategories })
  }

  const handleProjectChange = (categoryIndex, projectIndex, e) => {
    const updatedProjects = [...newMenu.categories[categoryIndex].projects]
    updatedProjects[projectIndex] = {
      ...updatedProjects[projectIndex],
      [e.target.name]: e.target.value,
    }
    const updatedCategories = [...newMenu.categories]
    updatedCategories[categoryIndex].projects = updatedProjects
    setNewMenu({ ...newMenu, categories: updatedCategories })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(newMenu)
    onClose()
  }

  return (
    <div>
      <h2>Add New Service Menu</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={newMenu.location}
            onChange={handleInputChange}
          />
        </div>
        {newMenu.categories.map((category, categoryIndex) => (
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

export default NewMenuForm
