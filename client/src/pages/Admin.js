import React, { useState, useEffect } from "react"
import CategoryForm from "../components/ServiceMenu/CategoryForm"
import FilterSortPanel from "../components/ServiceMenu/FilterSortPanel"
import {
  fetchServiceMenus,
  deleteMenu,
  addCategory,
  fetchCategories,
} from "../api/serviceMenuApi"
import ProjectTable from "../components/ServiceMenu/ProjectTable"

const Admin = () => {
  const [serviceMenus, setServiceMenus] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showCategoryForm, setShowCategoryForm] = useState(false)
  const [currentCategory, setCurrentCategory] = useState({
    name: "",
    profilePic: "",
  })
  // State for locations and projects
  const [locations, setLocations] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    loadServiceMenus()
    loadCategories()
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

  const loadCategories = async () => {
    setIsLoading(true)
    try {
      const fetchedCategories = await fetchCategories() // Ensure fetchCategories is imported and defined
      setCategories(fetchedCategories) // Update the categories state
    } catch (error) {
      console.error("Error fetching categories:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddNewCategoryClick = () => {
    setCurrentCategory({ name: "", profilePic: "" })
    setShowCategoryForm(true)
  }

  const handleDelete = async (menuId) => {
    await deleteMenu(menuId)
    loadServiceMenus()
  }

  const handleCategoryFormSave = async (category) => {
    await addCategory(category)
    setShowCategoryForm(false)
    loadCategories()
  }

  const handleFormClose = () => {
    setShowCategoryForm(false)
  }

  const onSortChange = (sortValue) => {
    // Implement sorting logic
  }

  const onFilterChange = (filterValue) => {
    // Implement filtering logic
  }

  // Handlers for button clicks
  const handleAddNewLocation = () => {
    setLocations([...locations, ""])
  }
  const handleAddNewCategory = () => {
    setCategories([...categories, ""])
  }
  const handleAddNewProject = () => {
    setProjects([...projects, ""])
  }

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <FilterSortPanel
        onFilterChange={onFilterChange}
        onSortChange={onSortChange}
      />
      <button onClick={handleAddNewLocation}>Add New Location</button>
      <button onClick={handleAddNewCategory}>Add New Category</button>
      <button onClick={handleAddNewProject}>Add New Project</button>
      <ProjectTable projects={projects} />
      {showCategoryForm && (
        <CategoryForm
          category={currentCategory}
          onSave={handleCategoryFormSave}
          onClose={handleFormClose}
        />
      )}
    </div>
  )
}

export default Admin
