import React, { useEffect } from 'react'
import style from "./CardProyects.module.css"
import { useRef } from 'react'

function CardProyects({id, titulo, informacion, frontend, backend, db, imagenes, github, web}) {
  const cardsRef = useRef(null)


  
  useEffect(() => {
    const card = cardsRef.current

    function callback (entrys) {
      entrys.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.isIntersecting);
          entry.target.classList.add(style.visibleCards);
        }
      });
    }
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    }
    const observadorProyects = new IntersectionObserver(callback, options);

    observadorProyects.observe(card);
  },[])

  return (
    <div className={style.card} ref={cardsRef}>
        <div className={style.containerImg}>
            {imagenes.map((imgs) => <img key={id} className={style.imagenes} src={imgs} alt='Proyect Not Found'/>)}
        </div>
        <h2 className={style.title}>{titulo}</h2>
        <div className={style.info}>
          <b className={style.textCardTitle}>Infomacion :</b>
          <p className={style.textCard}>{informacion}</p>
          <b className={style.textCardTitle}>Tecnologias :</b>
          {frontend? <p className={style.textCard}><b>Front: </b> {frontend}</p> : null}
          {backend? <p className={style.textCard}><b>Back: </b> {backend}</p> : null}
          {db? <p className={style.textCard}><b>Bases de Datos:</b> {db}</p> : null}
          <b className={style.textCardTitle}>Enlaces :</b>
          <div className={style.blockLinks}>
            {github? <a className={style.button} target="_black" href={github}><i className='bx bxl-github'></i> GitHub</a>: null}
            {web? <a className={style.button} target="_black" href={web}><i className='bx bx-news'></i> Web</a> : null}
          </div>
        </div>
    </div>
  )
}

export default CardProyects;