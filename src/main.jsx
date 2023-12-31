import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import { BrowserRouter } from 'react-router-dom'
import axios from "axios"
// axios.defaults.baseURL="http://localhost:3001/"
axios.defaults.baseURL="https://portafoliojuanjose.up.railway.app/"


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
)
