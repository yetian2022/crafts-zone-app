// src/components/ServiceMenu/ProjectForm.js
import React from "react"

const ProjectForm = ({
  project,
  onProjectChange,
  categoryIndex,
  projectIndex,
}) => {
  return (
    <div>
      <label>Project Name:</label>
      <input
        type="text"
        name="name"
        value={project.name}
        onChange={(e) => onProjectChange(categoryIndex, projectIndex, e)}
      />
      <label>Price:</label>
      <input
        type="number"
        name="price"
        value={project.price}
        onChange={(e) => onProjectChange(categoryIndex, projectIndex, e)}
      />
      <label>Duration:</label>
      <input
        type="text"
        name="duration"
        value={project.duration}
        onChange={(e) => onProjectChange(categoryIndex, projectIndex, e)}
      />
    </div>
  )
}

export default ProjectForm
