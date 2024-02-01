// routes/serviceMenus.js
const express = require("express")
const ServiceMenu = require("../models/ServiceMenu")
const Category = require("../models/Category")
const router = express.Router()

// POST - Create a new service menu
router.post("/", async (req, res) => {
  const { location, categories } = req.body
  const serviceMenu = new ServiceMenu({ location, categories })

  try {
    await serviceMenu.save()
    // Optionally, add this service menu to each category's serviceMenus array
    await Category.updateMany(
      { _id: { $in: categories } },
      { $push: { serviceMenus: serviceMenu._id } }
    )
    res.status(201).json(serviceMenu)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// GET - Retrieve all service menus
router.get("/", async (req, res) => {
  try {
    const serviceMenus = await ServiceMenu.find().populate("categories")
    res.json(serviceMenus)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
