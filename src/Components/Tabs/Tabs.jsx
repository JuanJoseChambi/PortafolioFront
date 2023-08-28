import { useState } from "react";
import style from "./Tabs.module.css";
import github from "../../assets/TechImages/github.png"
import gmail from "../../assets/TechImages/gmail.png"
import linkedin from "../../assets/TechImages/linkedin.png"
import developer from "../../assets/developer2.svg"

export default function Tabs() {
  const [active, setActive] = useState("");

  function handlerActive(number) {
    if (number !== active) {
      setActive(number);
    }
    if (number === active) {
        setActive("")
    }
  }

  let contentRender;
  let imageDev;
  if (active === "") {
    imageDev = (
        <div className={style.myInfo}>
            <div className={style.containerDev}>
            <img src={developer} alt="developer" className={style.imgDev}/>
            </div>
        </div>
    )
  }
  if (active === "1") {
    contentRender = (
      <div className={style.myInfo}>
        <h2 className={style.hs}>Educacion</h2>
        <h3 className={style.hs}>SoyHenry</h3>
        <p>Me forme como desarrollador web en el Bootcamp de SoyHenry, donde tuve
            un aprendizaje con mas 800hs de clases teoricas de fundamentos y practicas las cuales se llevaban a cabo cada dia,
            tambien contaba con acompañamiento de la gran comunidad que conforma SoyHenry, los cuales eran compañeros, tutores y mentores.
            Tambien SoyHenry, desarrollo competencias las cuales trato de aplicar cada dia, como lo son el trabajo en equipo, curiosidad, dedicación y perseverancia.
        </p>
        <h3>Extras</h3>
        <p>Tuve reforzamientos por parte de otros cursos como Udemy en las cuales trate de reforzar conocimientos en react, typesript y nodejs</p>
      </div>
    );
  }
  if (active === "2") {
    contentRender = (
      <div className={style.myInfo}>
        <h2 className={style.hs}>Tecnologias</h2>
        <p>En la cursada de SoyHenry me especialice como junior en tecnologias de Frontend, Backend Y conocimientos en Bases de Datos.</p>
        <div className={style.containerImg}>
            <img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="html"/>
            <img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="css"/>
            <img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="Javascript"/>
            <img src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React"/>
            <img src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="redux"/>
            <img src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="nodejs" />
            <img src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Exp" />
            <img src="https://sequelize.org/img/logo.svg" alt="sequelize" />
            <img src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="postgresql" />
            <img src="https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-29.png" alt="sql" />
        </div>
      </div>
    );
  }
  if (active === "3") {
    contentRender = (
      <div className={style.myInfo}>
        <h2>Experiencia</h2>
        <h3>Proyecto Individual</h3>
        <p>Estando en SoyHenry, como ultimas etapas del Bootacamp tuve que desarrollar un proyecto en el cual se reflejara todo lo apredido durante el bootcamp, creando asi un 
            proyecto de informacion sobre comidas, y este contaba con informacion como pasos de preparacion, resumen de la comida, nivel de saludable y demas.
        </p>
        <h3>Proyecto Grupal</h3>
        <p>La utlima etapa para ser graduado de henry era el desarrollo de un prooyecto grupal, en el cual se buscaba desarrollar una web en la cual se utilicen tecnologias nuevas que 
            fueron enseñadas antes de comenzar el proyecto, y tambien se buscaba lograr un entorno real de trabajo en el cual se trabaje en grupos con compañeros, tratando de 
            resolver y planear el enfoque que se iba a tomar en cuanto al desarrollo de la web con la cual tendriamos que graduarnos de Henry.
        </p>
      </div>
    );
  }
  if (active === "4") {
    contentRender = (
      <div className={style.myInfo}>
        <h2 className={style.hs}>Sobre Mi</h2>
        <p>Soy Juan José, tengo 18 años y resido en Buenos Aires, Argentina.<br></br>Mi pasión por la programación surgió a los 16 años cuando descubrí mi fascinación por la tecnología y su estructura. Desde entonces, me dedico a aprender y mejorar mis habilidades para enfrentar desafíos y ofrecer soluciones efectivas. Mi determinación y entusiasmo me impulsan a dar lo mejor de mí en cada proyecto, buscando crecer y contribuir al desarrollo de soluciones innovadoras en el campo de la programación. Cada día veo nuevas oportunidades para aprender y estoy seguro de alcanzar mis metas como programador con perseverancia.
        </p>
      </div>
    );
  }
  return (
    <div className={style.tabs}>
      <div className={style.options}>
        <h3 className={active === "1"? style.active: style.options_h3} onClick={() => handlerActive("1")}>
          Educacion
        </h3>
        <h3 className={active === "2"? style.active: style.options_h3} onClick={() => handlerActive("2")}>
          Tecnologias
        </h3>
        <h3 className={active === "3"? style.active: style.options_h3} onClick={() => handlerActive("3")}>
          Experiencia
        </h3>
        <h3 className={active === "4"? style.active: style.options_h3} onClick={() => handlerActive("4")}>
          Sobre Mi
        </h3>
      </div>
      <div className={style.states}>{contentRender?contentRender:imageDev}</div>
    </div>
  );
}
