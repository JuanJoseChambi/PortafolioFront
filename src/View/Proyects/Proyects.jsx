import style from "./Proyects.module.css";
import CardProyects from "../../Components/CardProyects/CardProyects";
import circleProyects from "../../assets/circleProyects.svg"
import circleProyectsCenter from "../../assets/circleProyectsCenter.svg"
import {useState } from "react";
import Modal from "../../Components/Modal/Modal";

export default function Proyects({ proyects }) {
  const [modal, setModal] = useState(false)
  const [proyectInModal, setProyectInModal] = useState([])

  function openModel (id) {
    const proyect = proyects.find(proyect => proyect.id === id);
    if (proyect) {
      setProyectInModal(proyect)
      setModal(true)
    }
  }
  return (
    <main className={style.proyects} id="proyects">
      <div className={style.lineTop} />
      <div className={style.circleProyects}>
        <img src={circleProyects} alt="circle" />
      </div>
      <div className={style.textProyects}>Proyectos</div>
      <div className={style.container}>
        {modal
        ?<Modal closeModal={() => setModal(false)} proyectInModal={proyectInModal}/>
        :proyects?.map((info) => (
          <div key={info.id} className={style.cardContainer} >
            <button className={`${style.btnOpenModel} ${!modal? style.btnVisible : null}`} onClick={() => openModel(info.id)}><i className='bx bx-fullscreen'></i></button>
            <CardProyects
              id={info.id}
              titulo={info.titulo}
              informacion={info.informacion}
              frontend={info.frontend}
              backend={info.backend}
              db={info.db}
              imagenes={info.imagenes}
              github={info.github}
              web={info.web}
            />
          </div>
        ))}
      </div>
        <div className={style.circleProyectsCenter}>
        <img src={circleProyectsCenter} alt="circle" />
      </div>
    </main>
  );
}
