import React, { useEffect } from 'react'
import Nav from '../../Components/Nav/Nav'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Proyects from '../Proyects/Proyects'
import Contact from '../Contact/Contact'
import { useState } from 'react'
import style from "./Portafolio.module.css"
import axios from 'axios'

function Portafolio() {
    const [background, setBackground] = useState(false)
    const [proyects, setProyects] = useState([]);

    async function handlerProyects () {
      const {data} = await axios.get("/proyects");
      setProyects(data);
    }
    function handlerBackground () {
      setBackground(!background)
    }
   

   useEffect(() => {
    handlerProyects()
   },[])

    return (
      <div  className={background?style.dark:style.light}>
        <div className={style.switch}>   
          <button className={background?style.button:style.active} onClick={handlerBackground}>{background === false?<i className='bx bxs-sun'></i>:<i className='bx bx-moon' ></i>}</button>
        </div>
        <Nav className={style.view}/>
        <Home/>                         
        <Profile/>
        <Proyects proyects={proyects}/>
        <Contact/>
      </div>
    )
}

export default Portafolio