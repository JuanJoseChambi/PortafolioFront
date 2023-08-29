import Tabs from "../../Components/Tabs/Tabs"
import me from "../../assets/me.png"
import style from "./Profile.module.css"
import circleProfileBig from "../../assets/circleProfileBig.svg"

export default function Profile () {
    return(
        <div className={style.profile} id="profile">
            <div className={style.circleProfileBig}>
                <img src={circleProfileBig} alt="circle" />
            </div>
            <div className={style.containerProfile}>
                <div className={style.containerProfile_image} >
                    <img src={me} alt="imagen" />
                    <p className={style.pImgage}>Juan Jose Chambi</p>
                </div>
                <div className={style.containerProfile_info}>
                    <h2 className={style.name}>Informacion</h2>
                    <p className={style.info}>Hola, soy Juan José, un desarrollador web full-stack con un sólido conjunto de habilidades que abarcan el Frontend, Backend y Bases de Datos. A continuación, te invito a explorar más sobre mis cualidades y obtener información adicional.</p>
                    <Tabs/>
                </div>
            </div>
        </div>
    )
}