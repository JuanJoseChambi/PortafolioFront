import style from "./Proyects.module.css";
import CardProyects from "../../Components/CardProyects/CardProyects";
import circleProyects from "../../assets/circleProyects.svg"
import circleProyectsCenter from "../../assets/circleProyectsCenter.svg"
import { useEffect } from "react";

export default function Proyects({ proyects }) {
  useEffect(() => {
    const cards = document.getElementById("cards")

    function callback (entrys) {
      entrys.forEach(entry => {
        if (entry.isIntersecting) {
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

      observadorProyects.observe(cards);

  },[])

  return (
    <main className={style.proyects} id="proyects">
      <div className={style.lineTop} />
      <div className={style.circleProyects}>
        <img src={circleProyects} alt="circle" />
      </div>
      <div className={style.textProyects}>Proyects</div>
      <div className={style.container}id="cards">
        {proyects?.map((info, i) => (
          <div key={i} className={style.cardContainer} >
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
