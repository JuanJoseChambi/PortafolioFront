import React, { useEffect, useState } from 'react'
import style from "./UpLoadContent.module.css"
import axios from 'axios'

function UpLoadContent() {
    const [messages, setMessages] = useState()
    const [proyects, setProyects] = useState({
        titulo: "",
        informacion: "",
        frontend: "",
        backend:"",
        db: "",
        github: "",
        web: "",
        imagenes: []
    })

    // -------------------------------------------------
    async function handlerMessages () {
       const {data} = await axios.get("/mensajes")
       setMessages(data)
    }
    async function handlerDelete (id) {
        await axios.delete(`/mensajes/${id}`)
        handlerMessages()
    }

    // -------------------------------------------------
    async function hanlderProyects (event) {
        setProyects({
            ...proyects,
            [event.target.name]: event.target.value
        })
    }
    const preset_key = "portafolio";
    const cloud_name = "dth62bdky";
    const URL = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
  
    async function hanlderImage (event) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", preset_key);
        axios.post(URL, formData)
          .then((response) => { setProyects({ ...proyects, imagenes: [...proyects.imagenes, response.data.secure_url ]});
    })
    .catch((err) => alert(err));
    }

    async function handlerSubmit (event) {
        event.preventDefault();
        await axios.post("/proyects", proyects);
        setProyects({
            titulo: "",
            informacion: "",
            frontend: "",
            backend:"",
            db: "",
            github: "",
            web: "",
            imagenes: []
        })
    }
    // -------------------------------------------------- 
    
    useEffect(() => {
        handlerMessages();
    },[])

  return (
    <div className={style.upLoadContent}>
    <form className={style.form}>
        <h2 className={style.h3title}>Subir Proyectos</h2>
        <div className={style.blocksInputs}>
            <input onChange={hanlderProyects} name='titulo' value={proyects.titulo} className={style.inputs} type="text" placeholder='Titulo'/>
            <textarea onChange={hanlderProyects} name='informacion' value={proyects.informacion} className={style.inputs} type="text" placeholder='Informacion'/>
        </div>
        <div className={style.blocksInputs}>
            <input onChange={hanlderProyects} name='github' value={proyects.github} className={style.inputs} type="text" placeholder='GitHub'/>
            <input onChange={hanlderProyects} name='web' value={proyects.web} className={style.inputs} type="text" placeholder='Web'/>
        </div>
        <div className={style.blocksInputs}>
        <textarea onChange={hanlderProyects} name='frontend' value={proyects.frontend} className={style.inputs} type="text" placeholder='Frontend'></textarea>
        <textarea onChange={hanlderProyects} name='backend' value={proyects.backend} className={style.inputs} type="text" placeholder='Backend'></textarea>
        </div>
        <div className={style.blocksInputs}>
            <input type="file" onChange={hanlderImage} className={style.inputs} autoComplete='off'/>
            <textarea onChange={hanlderProyects} name='db' value={proyects.db} className={style.inputs} type="text" placeholder='Bases de Datos'></textarea>
        </div>
        <button type='submit' onClick={handlerSubmit} className={style.btnForm}>Crear Proyecto</button>
    </form>
    <div className={style.viewMessage}>
        <h3 className={style.h3title}>Mensajes Recibidos</h3>
        {messages?.map((mensaje, i) => (
        <div key={i} className={style.cardsMessage}>
            <button onClick={() => handlerDelete(mensaje.id)} className={style.btnDel}>x</button>
            <div className={style.infoBlock}>
            <p>Nombre: {mensaje.nombre}</p>
            <p>Asunto: {mensaje.asunto}</p>
            </div>
            <p>{mensaje.detalles}</p>
        </div>
        ))}
    </div>
    </div>
  )
}

export default UpLoadContent
