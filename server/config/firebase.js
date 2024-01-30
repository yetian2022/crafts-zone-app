// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6AhIm7VTzCQCKKevCGV83S-zOFcvGH-w",
  authDomain: "crafts-zone-web-app.firebaseapp.com",
  projectId: "crafts-zone-web-app",
  storageBucket: "crafts-zone-web-app.appspot.com",
  messagingSenderId: "525815474044",
  appId: "1:525815474044:web:299da12a27bcec3ee926f9",
  measurementId: "G-RHHG03HT9B",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
