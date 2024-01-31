import React, { useState, useEffect } from "react"
import ServiceMenuTable from "../components/ServiceMenu/ServiceMenuTable"
import ServiceMenuForm from "../components/ServiceMenu/ServiceMenuForm"
import FilterSortPanel from "../components/ServiceMenu/FilterSortPanel"
import {
  fetchServiceMenus,
  addMenu,
  updateMenu,
  deleteMenu,
} from "../api/serviceMenuApi"

const Admin = () => {
  const [serviceMenus, setServiceMenus] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [currentMenu, setCurrentMenu] = useState(null) // null for add, object for edit

  useEffect(() => {
    loadServiceMenus()
  }, [])

  const loadServiceMenus = async () => {
    setIsLoading(true)
    try {
      const menus = await fetchServiceMenus()
      setServiceMenus(menus)
    } catch (error) {
      console.error("Error fetching service menus:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (menuId) => {
    // Find the menu to edit by id
    const menuToEdit = serviceMenus.find((menu) => menu._id === menuId)
    setCurrentMenu(menuToEdit)
    setShowForm(true)
  }

  const handleDelete = async (menuId) => {
    await deleteMenu(menuId)
    loadServiceMenus() // Refresh list after deletion
  }

  const handleAddNewClick = () => {
    setCurrentMenu(null) // Ensure form is in "add new" mode
    setShowForm(true)
  }

  const handleFormSave = async (menu) => {
    if (currentMenu) {
      await updateMenu(currentMenu._id, menu)
    } else {
      await addMenu(menu)
    }
    setShowForm(false)
    loadServiceMenus() // Refresh list after add/update
  }

  const handleFormClose = () => {
    setShowForm(false)
  }

  const onSortChange = (sortValue) => {
    // Implement sorting logic here based on sortValue
  }

  const onFilterChange = (filterValue) => {
    // Implement filtering logic here based on filterValue
  }

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <FilterSortPanel
        onFilterChange={onFilterChange}
        onSortChange={onSortChange}
      />
      <button onClick={handleAddNewClick}>Add New Service</button>
      <ServiceMenuTable
        serviceMenus={serviceMenus}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {showForm && (
        <ServiceMenuForm
          initialData={currentMenu}
          onSave={handleFormSave}
          onClose={handleFormClose}
        />
      )}
    </div>
  )
}

export default Admin
