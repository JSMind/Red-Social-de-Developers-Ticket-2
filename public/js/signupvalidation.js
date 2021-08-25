//  Función para validar entrada de los campos del formulario de tipo texto
let validarTxt = (texto, tipo) =>{
    try {
        if(texto == null || texto.length < 4 || /^\s+$/.test(texto)){
            throw new Error (`El campo de ${tipo}, debe poseer un nombre de al menos cuatro letras`);
        } else{
            return 'Registro Valido'
        }
    } catch (error) {
        console.log(error)
        throw new Error (error.message)
    }
}
//Funcion para validar que los campos no sean vacios
let validarOtros = (datos,tipo) => {
    try {
        if(datos == null || datos == 0){
            throw new Error (`El campo de ${tipo}, no debe ser vacio`);
        } else{
            return 'Registro Valido'
        }
    } catch (error) {
        console.log(error)
        throw new Error (error.message)
    }
}
//Fncion para validar Contrasena
let validarContrasena = (contrasena) => {
    try {
        if (contrasena == null || contrasena == 0 || contrasena.length < 8 || /^\s+$/.test(contrasena)) {
            throw new Error (`El campo de contraseña no cumple con los parametros`)
        } else {
            return 'Registro valido'
        }
    } catch (error) {
        console.log(error)
        throw new Error (error.message)
    }
}
//Funcion para validar email
let validarEmail = (correo) => {
    try {
        
        let formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!formatoEmail.test(correo)){
            throw new Error ('Ingrese un email valido de la forma usuario@mail.com')
        } else {
            return 'Registro de email valido'
        }
    } catch (error) {
        console.log(error)
        throw new Error (error.message)
    }
}