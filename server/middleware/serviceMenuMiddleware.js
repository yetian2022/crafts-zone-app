// server/middleware/serviceMenuMiddleware.js
const express = require("express")
const ServiceMenu = require("../models/ServiceMenu") // Adjust the path as necessary

const router = express.Router()

// Fetch all service menus
router.get("/", async (req, res) => {
  try {
    const serviceMenus = await ServiceMenu.find({})
    res.json(serviceMenus)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Add a new service menu
router.post("/", async (req, res) => {
  const serviceMenu = new ServiceMenu(req.body)
  try {
    const newServiceMenu = await serviceMenu.save()
    res.status(201).json(newServiceMenu)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Update a service menu
router.put("/:id", async (req, res) => {
  try {
    const updatedServiceMenu = await ServiceMenu.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!updatedServiceMenu) {
      return res.status(404).json({ message: "Service menu not found" })
    }
    res.json(updatedServiceMenu)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Delete a service menu
router.delete("/:id", async (req, res) => {
  try {
    const serviceMenu = await ServiceMenu.findByIdAndDelete(req.params.id)
    if (!serviceMenu) {
      return res.status(404).json({ message: "Service menu not found" })
    }
    res.json({ message: "Service menu deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
