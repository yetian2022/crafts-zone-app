import React, { useState } from "react"
import LocationModal from "../components/LocationModal"

const HomePage = () => {
  const [location, setLocation] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation)
    setIsModalOpen(false)
    // Load the service menu for the selected location
  }

  return (
    <div>
      <LocationModal
        isOpen={isModalOpen}
        locations={["Brookline", "Natick"]}
        onSelectLocation={handleLocationSelect}
      />
      {/* Render service menu based on selected location */}
    </div>
  )
}

export default HomePage
