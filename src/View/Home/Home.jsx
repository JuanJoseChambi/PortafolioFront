import style from "./Home.module.css";
import circle from "../../assets/circle.svg"
import circle2 from "../../assets/circle2.svg"
import { useEffect } from "react";


export default function Home() {

 
  useEffect(() => {
    const homeText = document.getElementById("homeText")
    const circle = document.getElementById("circle");
    const buttonsHome = document.getElementById("buttonsHome")

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
    observador.observe(buttonsHome)

  },[])

  function handlerScroll() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }
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
        <div className={style.homeButtons} id="buttonsHome">
          <button className={style.buttonsLeft} onClick={handlerScroll}>Contactar</button>
          <a className={style.buttonsRight} href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;to=chambijuanjose05@gmail.com" target="_blank">Gmail</a>
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

