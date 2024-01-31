// models/Category.js
const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profilePic: String, // Optional field
})

module.exports = mongoose.model("Category", categorySchema)
