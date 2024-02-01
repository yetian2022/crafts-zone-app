// models/ServiceMenu.js
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const serviceMenuSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
})

module.exports = mongoose.model("ServiceMenu", serviceMenuSchema)
