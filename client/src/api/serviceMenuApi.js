// src/api/serviceMenuApi.js
const API_BASE_URL = "http://localhost:4000/api/service-menu"

export const fetchServiceMenus = async () => {
  const response = await fetch(API_BASE_URL)
  if (!response.ok) {
    throw new Error("Failed to fetch service menus")
  }
  return response.json()
}

export const addMenu = async (newMenu) => {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMenu),
  })
  if (!response.ok) {
    throw new Error("Failed to add menu")
  }
  return response.json() // Return the newly added menu
}

export const updateMenu = async (id, updatedMenu) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedMenu),
  })
  if (!response.ok) {
    throw new Error("Failed to update menu")
  }
  return response.json() // Return the updated menu
}

export const deleteMenu = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) {
    throw new Error("Failed to delete menu")
  }
  return response.ok // Return true for successful deletion
}

export const addCategory = async (category) => {
  const response = await fetch("http://localhost:4000/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  })
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return response.json()
}
