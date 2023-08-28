import Tabs from "../../Components/Tabs/Tabs"
import me from "../../assets/me.png"
import style from "./Profile.module.css"

export default function Profile () {
    return(
        <div className={style.profile} id="profile">
            <div className={style.containerProfile}>
                <div className={style.containerProfile_image} >
                    <img src={me} alt="imagen" />
                    <p className={style.pImgage}>Juan Jose Chambi</p>
                </div>
                <div className={style.containerProfile_info}>
                    <h2 className={style.name}>Informacion</h2>
                    <p className={style.info}>Hola mi nombre es Juan Jose soy desarrollador web fullsatck, con conocimientos en cuanto a Frontend, Backend y Bases de Datos y en las siguientes 
                    opciones se veran las cualidades y mas informacion.</p>
                    <Tabs/>
                </div>
            </div>
        </div>
    )
}