import style from "./Proyects.module.css";
import CardProyects from "../../Components/CardProyects/CardProyects";
import circleProyects from "../../assets/circleProyects.svg"
import circleProyectsCenter from "../../assets/circleProyectsCenter.svg"

export default function Proyects({ proyects }) {
  return (
    <main className={style.proyects} id="proyects">
      <div className={style.lineTop} />
      <div className={style.circleProyects}>
        <img src={circleProyects} alt="circle" />
      </div>
      <div className={style.textProyects}>Proyects</div>
      <div className={style.container}>
        {proyects?.map((info, i) => (
          <div key={i} className={style.cardContainer}>
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
        <div className={style.circleProyectsCenter}>
        <img src={circleProyectsCenter} alt="circle" />
      </div>
      </div>
    </main>
  );
}
