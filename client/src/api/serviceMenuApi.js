// src/api/serviceMenuApi.js
const API_SERVICE_MENU_URL = "http://localhost:4000/api/service-menu"
const API_CATEGORIES_URL = "http://localhost:4000/api/categories"
const API_PROJECTS_URL = "http://localhost:4000/api/projects"

// Service Menu API Calls
export const fetchServiceMenus = async () => {
  const response = await fetch(API_SERVICE_MENU_URL)
  if (!response.ok) {
    throw new Error("Failed to fetch service menus")
  }
  return response.json()
}

export const addMenu = async (newMenu) => {
  const response = await fetch(API_SERVICE_MENU_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMenu),
  })
  if (!response.ok) {
    throw new Error("Failed to add menu")
  }
  return response.json()
}

export const updateMenu = async (id, updatedMenu) => {
  const response = await fetch(`${API_SERVICE_MENU_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedMenu),
  })
  if (!response.ok) {
    throw new Error("Failed to update menu")
  }
  return response.json()
}

export const deleteMenu = async (id) => {
  const response = await fetch(`${API_SERVICE_MENU_URL}/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) {
    throw new Error("Failed to delete menu")
  }
  return true
}

// Category API Calls
export const addCategory = async (category) => {
  const response = await fetch(API_CATEGORIES_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(category),
  })
  if (!response.ok) {
    throw new Error("Failed to add category")
  }
  return response.json()
}

export const fetchCategories = async () => {
  const response = await fetch(API_CATEGORIES_URL)
  if (!response.ok) {
    throw new Error("Failed to fetch categories")
  }
  return response.json()
}

// Project API Calls
export const addProject = async (project) => {
  const response = await fetch(API_PROJECTS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  })
  if (!response.ok) {
    throw new Error("Failed to add project")
  }
  return response.json()
}

export const fetchProjectsByCategory = async (categoryId) => {
  const response = await fetch(`${API_CATEGORIES_URL}/${categoryId}/projects`)
  if (!response.ok) {
    throw new Error("Failed to fetch projects")
  }
  return response.json()
}
