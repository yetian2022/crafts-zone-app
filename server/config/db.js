const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/yourDB",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    console.log("MongoDB Connected...")
  } catch (err) {
    console.error(err.message)
    // Exit process with failure
    process.exit(1)
  }
}

module.exports = connectDB
