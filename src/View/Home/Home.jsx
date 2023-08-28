import style from "./Home.module.css";
import circle from "../../assets/circle.svg"


export default function Home() {
  return (
    <div className={style.home} id="Home">
      <div className={style.bg} />

      <div className={style.block1}>
        <div className={style.textHome}>
          <h1 className={style.nameHome}></h1>
          <p>Developer Fullstack</p>
        </div>
        <div className={style.home_description}>
          <p>
            Hola, soy Juan Jose Chambi un desarrollador Web Fullstack, con
            formacion en el bootcamp soy Henry, en la cual desarrolle un
            aprendizaje de tecnologias como react, redux, nodejs, express, SQL,
            sequelize, postgreSQL y otras Herramientas
          </p>
        </div>
      </div>

      <div className={style.block2}>
        <img src={circle} alt="circle" />
      </div>
      <div className={style.lineBottom}/>
      <div></div>
    </div>
  );
}
