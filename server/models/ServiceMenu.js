// models/ServiceMenu.js
const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
  name: String,
  price: Number,
  duration: String,
  // Additional fields as needed
})

const categorySchema = new mongoose.Schema({
  name: String,
  profilePic: String,
  projects: [projectSchema],
})

const serviceMenuSchema = new mongoose.Schema({
  location: String,
  categories: [categorySchema],
})

module.exports = mongoose.model("ServiceMenu", serviceMenuSchema)
