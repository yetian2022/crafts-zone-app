// src/components/ServiceMenuDisplay.js
import React from "react"

const ServiceMenuDisplay = ({ menu, onUpdate, onDelete }) => {
  return (
    <div>
      <h2>{menu.location}</h2>
      {/* Display categories and projects */}
      <button onClick={() => onUpdate(menu._id)}>Update</button>
      <button onClick={() => onDelete(menu._id)}>Delete</button>
    </div>
  )
}

export default ServiceMenuDisplay
