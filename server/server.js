const dotenv = require("dotenv")
const cors = require("cors")
const express = require("express")
const connectDB = require("./config/db")
const session = require("express-session")
const passport = require("passport")

const categoryRoutes = require("./api/categories")
const projectRoutes = require("./api/projects")

const app = express()
app.use(express.json()) // Body parser middleware

app.use(cors()) // Cors middleware

// Session configuration
app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if your using https
  })
)

// Connect Database
connectDB()
// load log if connect to mongodb
console.log("MongoDB Connected...")
// Passport middleware
app.use(passport.initialize())
app.use(passport.session()) // For persistent login sessions

app.use("/api/categories", categoryRoutes)
app.use("/api/projects", projectRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
