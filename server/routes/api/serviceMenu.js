// routes/serviceMenu.js
const express = require("express")
const ServiceMenu = require("../../models/ServiceMenu")
const router = express.Router()

// Create a new service menu
router.post("/", async (req, res) => {
  try {
    const newMenu = new ServiceMenu(req.body)
    const savedMenu = await newMenu.save()
    res.status(201).json(savedMenu)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Get all service menus or by specific location
router.get("/", async (req, res) => {
  try {
    const { location } = req.query
    const query = location ? { location } : {}
    const menus = await ServiceMenu.find(query)
    res.json(menus)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Update a service menu
router.put("/:id", async (req, res) => {
  try {
    const updatedMenu = await ServiceMenu.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!updatedMenu) {
      return res.status(404).json({ message: "Menu not found" })
    }
    res.json(updatedMenu)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Delete a service menu
router.delete("/:id", async (req, res) => {
  try {
    const deletedMenu = await ServiceMenu.findByIdAndDelete(req.params.id)
    if (!deletedMenu) {
      return res.status(404).json({ message: "Menu not found" })
    }
    res.json({ message: "Menu deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
