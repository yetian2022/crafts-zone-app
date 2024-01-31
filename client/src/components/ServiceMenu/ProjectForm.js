import React from "react"

const ProjectForm = ({
  project,
  categories, // Add this prop to receive the categories list
  onProjectChange,
  categoryIndex,
  projectIndex,
}) => {
  // Handle input changes including the category dropdown
  const handleChange = (e) => {
    // Construct the updated project object based on input changes
    const updatedProject = { ...project, [e.target.name]: e.target.value }
    // Invoke the change handler passed from the parent component
    onProjectChange(categoryIndex, projectIndex, updatedProject)
  }

  return (
    <div>
      <label>Project Name:</label>
      <input
        type="text"
        name="name"
        value={project.name || ""}
        onChange={handleChange}
      />
      <label>Category:</label>
      <select
        name="categoryName"
        value={project.categoryName || ""}
        onChange={handleChange}
      >
        {/* Ensure there's a default or placeholder option */}
        <option value="">Select a category</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
      <label>Price:</label>
      <input
        type="number"
        name="price"
        value={project.price || ""}
        onChange={handleChange}
      />
      <label>Duration:</label>
      <input
        type="text"
        name="duration"
        value={project.duration || ""}
        onChange={handleChange}
      />
    </div>
  )
}

export default ProjectForm
