import React, { useState, useEffect } from "react"

const ProjectForm = ({ onSave, onClose, initialProject, categories }) => {
  const [project, setProject] = useState(
    initialProject || { name: "", price: 0, duration: "", category: "" }
  )

  useEffect(() => {
    if (initialProject) {
      setProject(initialProject)
    }
  }, [initialProject])

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(project)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={project.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={project.price}
          onChange={handleChange}
        />
      </label>
      <label>
        Duration:
        <input
          type="text"
          name="duration"
          value={project.duration}
          onChange={handleChange}
        />
      </label>
      <label>
        Category:
        <select
          name="category"
          value={project.category}
          onChange={handleChange}
        >
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  )
}

export default ProjectForm
