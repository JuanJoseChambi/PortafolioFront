import Tabs from "../../Components/Tabs/Tabs"
import me from "../../assets/me.png"
import style from "./Profile.module.css"
import circleProfileBig from "../../assets/circleProfileBig.svg"
import profileMini from "../../assets/profileMini.svg"
import { useEffect } from "react"

export default function Profile () {

    useEffect(() => {
    const profileText = document.getElementById("profileInfo");
    const profileImage = document.getElementById("profileImage");
    function callback (entrys) {
        entrys.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(style.visibleInfo);
            }
        });
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    }

    const observador = new IntersectionObserver(callback, options)
    observador.observe(profileText)
    observador.observe(profileImage)
    },[])

    return(
        <div className={style.profile} id="profile">
            <div className={style.circleProfileBig}>
                <img src={circleProfileBig} alt="circle" />
            </div>
            <div className={style.profileMini}>
                <img src={profileMini} alt="circle" />
            </div>
            <div className={style.containerProfile}>
                <div className={style.containerProfile_image} id="profileImage">
                    <img src={me} alt="imagen" />
                    <p className={style.pImgage}>Juan Jose Chambi</p>
                </div>
                <div className={style.containerProfile_info} id="profileInfo">
                    <h2 className={style.name}>Informacion</h2>
                    <p className={style.info}>Hola, soy Juan José, un desarrollador web full-stack con un sólido conjunto de habilidades que abarcan el Frontend, Backend y Bases de Datos. A continuación, te invito a explorar más sobre mis cualidades y obtener información adicional.</p>
                    <Tabs/>
                </div>
            </div>
        </div>
    )
}