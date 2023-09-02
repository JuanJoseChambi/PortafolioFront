import React, { useEffect } from 'react'
import style from "./Modal.module.css"

function Modal({closeModal, proyectInModal}) {


    useEffect(() => {
        const modal = document.getElementById("modal")
    
        function callback (entrys) {
          entrys.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add(style.visibleModal);
            }
          });
        }
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.5
        }
        const observadorModal = new IntersectionObserver(callback, options);
    
        observadorModal.observe(modal);
      },[])

  return (
    <div className={style.modal} id='modal'>
        <button className={style.btnCloseModal} onClick={closeModal}><i className='bx bx-exit-fullscreen'></i></button>
        <div className={style.sectionLeft}>
            <div className={style.containerImage}>
                <img className={style.imageProyect} src={proyectInModal.imagenes[0]} alt="" />
            </div>
            <div className={style.enlaces}>
            {proyectInModal.github? <a className={style.btnEnlaces} target="_black" href={proyectInModal.github}><i className='bx bxl-github'></i> GitHub</a>: null}
            {proyectInModal.web? <a className={style.btnEnlaces} target="_black" href={proyectInModal.web}><i className='bx bx-news'></i> Web</a> : null}
            </div>
        </div>
        <div className={style.sectionRight}>
            <p className={style.titleProyect}>{proyectInModal.titulo}</p>
            <b>Informacion : </b>
            <p className={style.infoProyect}>{proyectInModal.informacion}</p>
            <b>Tecnologias :</b>
            <p><b>Frontend :</b> {proyectInModal.frontend}</p>
            <p><b>Backend :</b> {proyectInModal.backend}</p>
            <p><b>Bases de Datos :</b> {proyectInModal.db}</p>
        </div>
    </div>
  )
}

export default Modal