import React, { useState, useEffect } from "react"
import ServiceMenuTable from "../components/ServiceMenu/ServiceMenuTable"
import ServiceMenuForm from "../components/ServiceMenu/ServiceMenuForm"
import CategoryForm from "../components/ServiceMenu/CategoryForm" // Import CategoryForm
import FilterSortPanel from "../components/ServiceMenu/FilterSortPanel"
import {
  fetchServiceMenus,
  addMenu,
  updateMenu,
  deleteMenu,
  addCategory, // Add addCategory to the import statement
} from "../api/serviceMenuApi"

const Admin = () => {
  const [serviceMenus, setServiceMenus] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [showCategoryForm, setShowCategoryForm] = useState(false)
  const [currentMenu, setCurrentMenu] = useState(null)

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
    const menuToEdit = serviceMenus.find((menu) => menu._id === menuId)
    setCurrentMenu(menuToEdit)
    setShowServiceForm(true) // Updated to setShowServiceForm
    setShowCategoryForm(false) // Ensure category form is not shown
  }

  const handleDelete = async (menuId) => {
    await deleteMenu(menuId)
    loadServiceMenus()
  }

  const handleAddNewServiceClick = () => {
    setCurrentMenu(null)
    setShowServiceForm(true)
    setShowCategoryForm(false)
  }

  const handleAddNewCategoryClick = () => {
    setShowCategoryForm(true)
    setShowServiceForm(false)
  }

  const handleCategoryFormSave = async (category) => {
    try {
      await addCategory(category)
      setShowCategoryForm(false)
      // Optionally refresh your categories here if needed
    } catch (error) {
      console.error("Error adding category:", error)
    }
  }

  const handleFormSave = async (menu) => {
    if (currentMenu) {
      await updateMenu(currentMenu._id, menu)
    } else {
      await addMenu(menu)
    }
    setShowServiceForm(false) // Updated to setShowServiceForm
  }

  const handleFormClose = () => {
    setShowServiceForm(false) // Updated to setShowServiceForm
    setShowCategoryForm(false) // Hide category form if open
  }

  const onSortChange = (sortValue) => {
    // Sorting logic
  }

  const onFilterChange = (filterValue) => {
    // Filtering logic
  }

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <FilterSortPanel
        onFilterChange={onFilterChange}
        onSortChange={onSortChange}
      />
      <button onClick={handleAddNewServiceClick}>Add New Service</button>
      <button onClick={handleAddNewCategoryClick}>Add New Category</button>
      <ServiceMenuTable
        serviceMenus={serviceMenus}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {showServiceForm && (
        <ServiceMenuForm
          initialData={currentMenu}
          onSave={handleFormSave}
          onClose={handleFormClose}
        />
      )}
      {showCategoryForm && (
        <CategoryForm
          // Add props and onSave logic for CategoryForm
          onClose={handleFormClose}
        />
      )}
    </div>
  )
}

export default Admin
