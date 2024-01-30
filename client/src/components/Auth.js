import React, { useEffect } from "react"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import * as firebaseui from "firebaseui"
import "firebaseui/dist/firebaseui.css"

// Singleton instance of FirebaseUI
let ui = null

const Auth = () => {
  useEffect(() => {
    if (!ui) {
      // Initialize the FirebaseUI Widget using Firebase
      ui = new firebaseui.auth.AuthUI(firebase.auth())
    }

    const uiConfig = {
      signInSuccessUrl: "/", // where to redirect after login
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // other providers as needed
      ],
    }

    // Start the FirebaseUI Auth interface
    ui.start("#firebaseui-auth-container", uiConfig)

    // Clean up: Reset the UI on component unmount
    return () => {
      ui.reset()
    }
  }, [])

  return (
    <div>
      <h1>Authentication</h1>
      <div id="firebaseui-auth-container"></div>
    </div>
  )
}

export default Auth
