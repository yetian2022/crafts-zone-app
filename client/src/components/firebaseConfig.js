// src/firebaseConfig.js
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA6AhIm7VTzCQCKKevCGV83S - zOFcvGH - w",
  authDomain: "crafts - zone - web - app.firebaseapp.com",
  // ... other configuration keys
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
