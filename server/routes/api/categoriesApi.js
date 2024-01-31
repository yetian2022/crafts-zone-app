// api/categoriesApi.js or routes/categories.js
const express = require("express")
const Category = require("../models/Category") // Adjust path as needed
const router = express.Router()

// POST /categories to add a new category
router.post("/", async (req, res) => {
  try {
    const { name, profilePic } = req.body
    const newCategory = new Category({ name, profilePic })
    await newCategory.save()
    res.status(201).json(newCategory)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Additional category routes can go here (GET, PUT, DELETE)

module.exports = router
