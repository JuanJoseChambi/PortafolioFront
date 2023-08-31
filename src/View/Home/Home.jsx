import style from "./Home.module.css";
import circle from "../../assets/circle.svg"
import circle2 from "../../assets/circle2.svg"
import { useEffect } from "react";


export default function Home() {

 
  useEffect(() => {
    const homeText = document.getElementById("homeText")
    const circle = document.getElementById("circle");

    function callback (entrys) {
      entrys.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(style.visible)
        }
      });
    }
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
  
    const observador = new IntersectionObserver(callback, options)
    observador.observe(homeText)
    observador.observe(circle)

  },[])


  return (
    <div className={style.home} id="Home">
      <div className={style.bg} />
      <div className={style.circle2} >
        <img src={circle2} alt="circle" />
      </div>
      <div className={style.block1}>
        <div className={style.textHome}>
          <h1 className={style.nameHome}></h1>
          <p>Developer Fullstack</p>
        </div>
        <div className={style.home_description} id="homeText">
          <p >
            Hola, soy Juan Jose Chambi un desarrollador Web Fullstack, con
            formacion en el bootcamp soy Henry, en la cual desarrolle un
            aprendizaje de tecnologias como react, redux, nodejs, express, SQL,
            sequelize, postgreSQL y otras Herramientas
          </p>
        </div>
      </div>

      <div className={style.block2} id="circle">
        <img src={circle} alt="circle" />
      </div>
      <div className={style.lineBottom}/>
      <div></div>
    </div>
  );
}
