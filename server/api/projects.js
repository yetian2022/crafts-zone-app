// routes/projects.js
const express = require("express")
const Project = require("../models/Project")
const router = express.Router()

// POST - Create a new project
router.post("/", async (req, res) => {
  try {
    const { name, price, duration, category } = req.body
    const newProject = new Project({ name, price, duration, category })
    await newProject.save()
    res.status(201).json(newProject)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
