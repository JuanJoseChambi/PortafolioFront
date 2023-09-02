import { useEffect, useState } from "react";
import style from "./Contact.module.css"
import circleContact from "../../assets/circleContact.svg"
import validations from "./Validations";
import Swal from "sweetalert2";
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
        if (message.nombre && message.asunto && message.detalles){
            await axios.post("/mensajes", message);
            setMessage({
                nombre: "",
                asunto: "",
                detalles: ""
            })
            Swal.fire({
                title: "Mensaje Enviado!" ,
                icon: 'success',
                background: "#71aace",
                toast: 'true',
                position:'top',     
                confirmButtonText:'OK',
                padding: '1,4rem',
                confirmButtonColor:'#4cf576',
              });
        }else{
            Swal.fire({
                title: "Datos Incorrectos/ Faltantes." ,
                icon: 'warning',
                background: "#71aace",
                toast: 'true',
                position:'top',     
                confirmButtonText:'OK',
                padding: '1,4rem',
                confirmButtonColor:'#fa684b',
              });
        }
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

    useEffect(() => {
        const formulario = document.getElementById("formulario");
        const redes = document.getElementById("redes")

        function callback (entrys) {
            entrys.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(style.visibleContact)
                }
            });
        }

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }
        const observador = new IntersectionObserver(callback, options)
        observador.observe(formulario)
        observador.observe(redes)
    },[])

    return(
        <div className={style.contact} id="contact">
            <div className={style.lineTop} />
            <div className={style.leftContanier} id="formulario">
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
                    <button type="submit" onClick={handlerSubmit} className={ !errors.nombre && !errors.asunto && !errors.detalles? style.btnContact: style.btnContactInvalid}>Enviar</button>
                </form>
            </div>
            <div className={style.rightContanier} id="redes">
                <p className={style.h2Contact}>Contactame</p>
                <a className={style.linkContact} href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;to=chambijuanjose05@gmail.com" target="_blank"><i className='bx bxl-gmail'></i>Gmail</a>
                <a className={style.linkContact} href="https://www.linkedin.com/in/juanjosechambi" target="_blank"><i className='bx bxl-linkedin-square'></i>Linkedin</a>
                <a className={style.linkContact} href="https://github.com/JuanJoseChambi" target="_blank"><i className='bx bxl-github' ></i>Github</a>
                <a className={style.linkContact} href="https://api.whatsapp.com/send?phone=+541161000622&text=Hola!" target="_blank"><i className='bx bxl-whatsapp' ></i>WhatsApp</a>
                <button onClick={handlerScrollHome} className={style.btnLinksContact}>Inicio<i className='bx bx-up-arrow-alt'></i></button>
            </div>
            <div className={style.circleContact}>
        <img src={circleContact} alt="circle" />
      </div>
        </div>
    )
}