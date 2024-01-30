import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Header from "./components/common/Header"

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
      </Routes>
    </Router>
  )
}

export default App
