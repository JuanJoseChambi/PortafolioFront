import { Routes, Route } from "react-router-dom"
import Portafolio from "./View/Portafolio/Portafolio"
import UpLoadContent from "./View/UpLoadContent/UpLoadContent"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Portafolio/>}/>
        <Route path="/JuanJose" element={<Portafolio/>}/>
        <Route path="/UpLoadContent" element={<UpLoadContent/>}/>
      </Routes>
    </div>
  )
}

export default App
