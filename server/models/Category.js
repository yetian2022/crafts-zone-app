// models/Category.js
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  profilePic: String,
  serviceMenus: [
    {
      // Array of references to ServiceMenu
      type: Schema.Types.ObjectId,
      ref: "ServiceMenu",
    },
  ],
})

module.exports = mongoose.model("Category", categorySchema)
