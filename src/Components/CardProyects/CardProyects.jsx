import React from 'react'
import style from "./CardProyects.module.css"

function CardProyects({id, titulo, informacion, frontend, backend, db, imagenes, github, web}) {
  return (
    <div className={style.card}>
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
            {github? <a className={style.button} target="_black" href={github}><i class='bx bxl-github'></i> GitHub</a>: null}
            {web? <a className={style.button} target="_black" href={web}><i class='bx bx-news'></i> Web</a> : null}
          </div>
        </div>
    </div>
  )
}

export default CardProyects;