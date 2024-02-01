// routes/categories.js
const express = require("express")
const Category = require("../models/Category")
const ServiceMenu = require("../models/ServiceMenu")
const router = express.Router()

// POST - Create a new category
router.post("/", async (req, res) => {
  const { name, profilePic, serviceMenus } = req.body
  const category = new Category({ name, profilePic, serviceMenus })

  try {
    await category.save()
    // Optionally, add this category to each service menu's categories array
    await ServiceMenu.updateMany(
      { _id: { $in: serviceMenus } },
      { $push: { categories: category._id } }
    )
    res.status(201).json(category)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// GET - Retrieve all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().populate("serviceMenus")
    res.json(categories)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
