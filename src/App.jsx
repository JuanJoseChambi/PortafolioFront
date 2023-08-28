import style from "./App.module.css"
import { Routes, Route } from "react-router-dom"
import Portafolio from "./View/Portafolio/Portafolio"
import UpLoadContent from "./View/UpLoadContent/UpLoadContent"
import axios from "axios"
import { useEffect } from "react"
axios.defaults.baseURL="http://localhost:3001/";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Portafolio/>}/>
        <Route path="/UpLoadContent" element={<UpLoadContent/>}/>
      </Routes>
    </div>
  )
}

export default App
