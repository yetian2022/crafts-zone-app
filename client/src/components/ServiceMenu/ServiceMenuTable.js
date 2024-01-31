// src/components/ServiceMenuTable.js
import React from "react"

const ServiceMenuTable = ({ serviceMenus, onEdit, onDelete }) => {
  // Function to trigger the edit form for a specific service menu
  const handleEdit = (menuId) => {
    onEdit(menuId)
  }

  // Function to trigger the delete operation for a specific service menu
  const handleDelete = (menuId) => {
    onDelete(menuId)
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Profile Picture</th>
          <th>Project Name</th>
          <th>Price</th>
          <th>Duration</th>
          <th>Actions</th> {/* Column for edit/delete actions */}
        </tr>
      </thead>
      <tbody>
        {serviceMenus.map((menu) =>
          menu.categories.map((category, categoryIndex) =>
            category.projects.map((project, projectIndex) => (
              <tr key={`${menu._id}-${categoryIndex}-${projectIndex}`}>
                <td>{category.name}</td>
                <td>
                  <img
                    src={category.profilePic}
                    alt={category.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{project.name}</td>
                <td>{project.price}</td>
                <td>{project.duration}</td>
                <td>
                  <button onClick={() => handleEdit(menu._id)}>Edit</button>
                  <button onClick={() => handleDelete(menu._id)}>Delete</button>
                </td>
              </tr>
            ))
          )
        )}
      </tbody>
    </table>
  )
}

export default ServiceMenuTable
