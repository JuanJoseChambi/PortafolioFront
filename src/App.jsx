import { Routes, Route } from "react-router-dom"
import Portafolio from "./View/Portafolio/Portafolio"
import UpLoadContent from "./View/UpLoadContent/UpLoadContent"
import axios from "axios"
axios.defaults.baseURL="https://portafoliojuanjose.up.railway.app";

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
