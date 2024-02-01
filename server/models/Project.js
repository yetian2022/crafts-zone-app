// models/Project.js
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category", // Reference to the Category model
    required: true,
  },
})

module.exports = mongoose.model("Project", projectSchema)
