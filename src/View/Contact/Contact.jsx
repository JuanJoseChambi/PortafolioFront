import { useState } from "react";
import style from "./Contact.module.css"
import validations from "./Validations";
import axios from "axios";

export default function Contact (){
    const [message, setMessage] = useState({
        nombre: "",
        asunto: "",
        detalles: ""
    })
    const [errors, setErrors] = useState({
        nombre: "",
        asunto: "",
        detalles: ""
    })

    function hanlderChange (event) {
        setMessage({
            ...message,
            [event.target.name]: event.target.value
        })
        setErrors(
            validations({
            ...message,
            [event.target.name]: event.target.value
        }))
    }

    async function handlerSubmit (event) {
        event.preventDefault();
        await axios.post("/mensajes", message);
        setMessage({
            nombre: "",
            asunto: "",
            detalles: ""
        })
    }


    function handlerScrollHome () {
        const home = document.getElementById("Home");
        if (home) {
            home.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
        }
    }

    return(
        <div className={style.contact} id="contact">
            <div className={style.lineTop} />
            <div className={style.leftContanier}>
                <form className={style.formContact}>
                    <div className={style.blockInputs}>
                        <input onChange={hanlderChange} name="nombre" value={message.nombre} type="text" className={style.inputsContact} placeholder="Nombre"/>
                        <p className={style.error}>{errors.nombre}</p>
                    </div>
                    <div className={style.blockInputs}>
                        <input onChange={hanlderChange} name="asunto" value={message.asunto} type="text" className={style.inputsContact} placeholder="Asunto"/>
                        <p className={style.error}>{errors.asunto}</p>
                    </div>
                    <div className={style.blockTextAarea}>
                        <textarea onChange={hanlderChange} name="detalles" value={message.detalles} type="text" className={style.textareaContact} placeholder="Detalles del Asunto" />
                        <p className={style.error}>{errors.detalles}</p>
                    </div>
                    <button type="submit" onClick={handlerSubmit} className={!errors.name && !errors.asunto && !errors.detalles? style.btnContact: style.btnContactInvalid}>Enviar</button>
                </form>
            </div>
            <div className={style.rightContanier}>
                <p className={style.h2Contact}>Contactame</p>
                <a className={style.linkContact} href="mailto:juanjosech.it@gmail.com?subject=Asunto%20del%20mensaje&body=Detalles%20del%20Asunto" target="_blank"><i className='bx bxl-gmail'></i>Gmail</a>
                <a className={style.linkContact} href="https://www.linkedin.com/in/juanjosechambi" target="_blank"><i className='bx bxl-linkedin-square'></i>Linkedin</a>
                <a className={style.linkContact} href="https://github.com/JuanJoseChambi" target="_blank"><i className='bx bxl-github' ></i>Github</a>
                <a className={style.linkContact} href="https://twitter.com/ITJuanJose" target="_blank"><i className='bx bxl-twitter' ></i>Twiter</a>
                <a className={style.linkContact} href="https://api.whatsapp.com/send?phone=+541161000622&text=Hola!" target="_blank"><i className='bx bxl-whatsapp' ></i>WhatsApp</a>
                <button onClick={handlerScrollHome} className={style.btnLinksContact}>Home<i className='bx bx-up-arrow-alt'></i></button>
            </div>
        </div>
    )
}