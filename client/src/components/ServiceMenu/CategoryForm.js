import React, { useState } from "react"

const CategoryForm = ({ onSave, onClose, initialCategory }) => {
  const [category, setCategory] = useState(
    initialCategory || { name: "", profilePic: "" }
  )

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(category)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Profile Picture URL:
        <input
          type="text"
          name="profilePic"
          value={category.profilePic}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  )
}

export default CategoryForm
