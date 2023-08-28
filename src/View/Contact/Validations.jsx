
const onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

export default function validations (input) {

    let errors = {};

    if(!onlyLetters.test(input.nombre)) errors.nombre = "Solo Letras";
    
    if((input.nombre).length <= 1) errors.nombre = "Nombre es Requerido";

    if((input.nombre).length > 60) errors.nombre = "Nombre muy Largo";
    
    if((input.asunto).length <= 1) errors.asunto = "Asunto es Requerido";

    if((input.detalles).length <= 1) errors.detalles = "Detalles es Requirido";

    return errors;
}