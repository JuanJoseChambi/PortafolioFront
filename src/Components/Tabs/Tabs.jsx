import { useState } from "react";
import style from "./Tabs.module.css";
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
        <p>Me he formado como desarrollador web en el Bootcamp de SoyHenry, donde he adquirido más de 800 horas de conocimientos teóricos y prácticos en programación web. Mi aprendizaje se ha enriquecido gracias a la comunidad de SoyHenry, compuesta por compañeros, tutores y mentores, quienes han sido una fuente invaluable de apoyo y aprendizaje.<br/>
        Además de las habilidades técnicas, el Bootcamp de SoyHenry ha fomentado competencias esenciales como el trabajo en equipo, la curiosidad constante, la dedicación y la perseverancia. Estoy comprometido a aplicar estas habilidades en mi desarrollo como desarrollador
        </p>
      </div>
    );
  }
  if (active === "2") {
    contentRender = (
      <div className={style.myInfo}>
        <h2 className={style.hs}>Tecnologias</h2>
        <p>Durante mi experiencia en SoyHenry, me especialicé como desarrollador junior en una amplia gama de tecnologías que abarcan Frontend, Backend y Bases de Datos.</p>
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
        <b>Recipe Food</b>
        <p>En la etapa final de mi formación en el Bootcamp de SoyHenry, como desarrollador junior, tuve la oportunidad de llevar a cabo un proyecto que reflejó todo lo que había aprendido. El proyecto consistió en la creación de una plataforma de información sobre alimentos, utilizando las tecnologías que había adquirido durante mi tiempo en el bootcamp, como HTML, CSS, JavaScript, Node.js, Express.js y SQL(postgreSQL). Esta plataforma permitía a los usuarios acceder a detalles de recetas, incluyendo pasos de preparación, resúmenes y evaluaciones de saludabilidad. Esta experiencia me permitió demostrar mi capacidad para aplicar mis conocimientos en un proyecto práctico y significativo, y me ayudó a desarrollarme como desarrollador junior.
        </p>
        <h3>Proyecto Grupal</h3>
        <b>MMarket</b>
        <p>
        Como desarrollador junior en SoyHenry, tuve la oportunidad de trabajar en equipo en el desarrollo de MMarket, El objetivo central de MMarket era simplificar el proceso de compras tanto para las tiendas locales como para los usuarios, brindando una solución que beneficiara a ambas partes. Para las tiendas locales, nuestra plataforma permitía la expansión de su base de clientes y la inclusión de servicios de entrega a domicilio eficientes. Por otro lado, para los usuarios, MMarket ofrecía una experiencia de compra cómoda y conveniente, ya fuera en la tienda o a través de entregas a domicilio a través de la plataforma web. Este proyecto formó parte de nuestro proyecto final en el bootcamp y se centró en simplificar las compras para tiendas de barrio y usuarios locales. Utilizamos tecnologías como HTML, CSS, JavaScript, React, NodeJs y SQL(postgreSQL) para crear la interfaz de usuario, el servidor y gestionar la base de datos.
        </p>
      </div>
    );
  }
  if (active === "4") {
    contentRender = (
      <div className={style.myInfo}>
        <h2 className={style.hs}>Sobre Mi</h2>
        <p>Soy Juan José, un joven de 18 años que reside en Buenos Aires, Argentina. A los 16 años, descubrí mi pasión por la programación, lo que me llevó a dedicar tiempo y esfuerzo en aprender y mejorar mis habilidades en este campo. Mi determinación y compromiso me impulsan a abordar desafíos y ofrecer soluciones efectivas durante este proceso de crecimento en el mundo de la programación.<br/><br/>
        
        En cada proyecto mio o en el que me involucro, pongo un gran énfasis en el crecimiento personal y profesional. Aspiro a contribuir al desarrollo de soluciones innovadoras en el ámbito de la programación. Veo cada día como una oportunidad para aprender y estoy convencido de que, con perseverancia, alcanzaré mis metas como programador.
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
