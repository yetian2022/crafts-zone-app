import React from "react"
import "./LocationModal.css"

const LocationModal = ({ isOpen, locations, onSelectLocation }) => {
  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select Your Location</h2>
        {locations.map((location) => (
          <button key={location} onClick={() => onSelectLocation(location)}>
            {location}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LocationModal
