import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Header from "./components/common/Header"
import { useState } from "react"
import "./components/firebaseConfig"
import Auth from "./components/Auth"
import Admin from "./pages/Admin"

// import other pages

function App() {
  const [location, setLocation] = useState("")
  const handleLocationChange = (newLocation) => {
    setLocation(newLocation)
    // Additional actions when location changes
  }

  return (
    <Router>
      <Header onLocationChange={handleLocationChange} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        // Define other routes
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
