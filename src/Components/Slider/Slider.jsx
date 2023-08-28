import { useState } from "react";
import style from "./Slider.module.css";

export default function Slider({ foods, other }) {
  const [imageFocus, setImageFocus] = useState(0);

  const cantidad = foods?.length;

  if (!Array.isArray(foods) || cantidad === 0) {
    return null;
  }

  function handlerPrev() {
    setImageFocus(imageFocus === 0 ? cantidad - 1 : imageFocus - 1);
  }

  function handlerNext() {
    setImageFocus(imageFocus === cantidad - 1 ? 0 : imageFocus + 1);
  }

  return (
    <div className={style.slider}>

{/* ---------------------------------------------------------- */}
      <div className={style.spaceCards}>
        <button onClick={handlerPrev} className={style.btn_prev}>
          <i className="bx bx-left-arrow-alt"></i>
        </button>
        {foods.map((image, index) => imageFocus===index?( 
        <div key={index} className={style.cardsProyects}>
            <img key={index} src={image} alt="foods"/>
            <h2 className={style.h2cards}>Foods</h2>
            <h4 className={style.textHover}>Informacion:</h4>
            <p className={style.textHover}>El proyecto es una web la cual cuenta con informacion sobre recetas, como instrucciones de preparacion, resumen de la receta, nivel de saludable, y tipo de dieta</p>
            <h4 className={style.textHover}>Tecnologias:</h4>
            <p className={style.textHover}>Html - CSS - JavaScript - React - Redux - NodeJS - Express - Sequelize - PostgreSQL - SQL</p>
            <h4 className={style.textHover}>Link:</h4>
            <p>hh</p>
        </div>
            ):null
        )}
        <button onClick={handlerNext} className={style.btn_next}>
          <i className="bx bx-right-arrow-alt"></i>
        </button>
      </div>

{/* ------------------------------------------------------- */}

      <div className={style.spaceCards}>
        <button onClick={handlerPrev} className={style.btn_prev}>
          <i className="bx bx-left-arrow-alt"></i>
        </button>
        {other.map((image, index) => imageFocus===index?( 
        <div key={index}  className={style.cardsProyects}>
            <img key={index} src={image} alt="foods"/>
            <h2 className={style.h2cards}>PF</h2>
        </div>
            ):null
        )}
        <button onClick={handlerNext} className={style.btn_next}>
          <i className="bx bx-right-arrow-alt"></i>
        </button>
      </div>
    </div >
  );
}
