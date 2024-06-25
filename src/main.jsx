import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDI93iE3hszikJsS3c3y4hEs8AwXX1wpSU",

  authDomain: "ventas-de-videojuegos.firebaseapp.com",

  projectId: "ventas-de-videojuegos",

  storageBucket: "ventas-de-videojuegos.appspot.com",

  messagingSenderId: "18465499021",

  appId: "1:18465499021:web:4bc2573bd2dea00a9b7fc4"

};


// Initialize Firebase

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
