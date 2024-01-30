import React from "react"
import { Link } from "react-router-dom" // Import Link from react-router-dom for navigation
import "./Header.css" // Import the Header.css file

const Header = ({ onLocationChange }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          // Add more links as needed
          <li>
            <Link to="/auth">Login</Link>
          </li>
        </ul>
      </nav>
      <div className="location-selector">
        <button onClick={() => onLocationChange("Brookline")}>Brookline</button>
        <button onClick={() => onLocationChange("Natick")}>Natick</button>
        // Add more locations as needed
      </div>
    </header>
  )
}

export default Header
