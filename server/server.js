const express = require("express")
const connectDB = require("./config/db")
const passport = require("passport")

const app = express()

// Connect Database
connectDB()

// Passport middleware
app.use(passport.initialize())
app.use(passport.session()) // For persistent login sessions

app.get("/", (req, res) => {
  res.send("Hello World!")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
