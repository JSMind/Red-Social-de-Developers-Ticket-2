//En este archivo se encuentran las llamadas al servidor para registrarse como usuario nuevo e iniciar sesion


let registroUsuario = async(usuario) => {                                           // Función para crear un nuevo usuario y almacenarlo a la base de datos

    try {
        let nuevoRegistro = await fetch('http://localhost:3000/usuario/registro',{
            method: 'post',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        let respuesta = await nuevoRegistro.json();
        return respuesta;
    } catch (error) {
        
        throw new Error ('Error en la llamada para el registro de usuario')
    }
}


let nuevoIngreso = async (usuario) =>{                                              // Función para realizar un login
    try {
        let iniciarSesion = await fetch('http://localhost:3000/usuario/login',{
            method: 'post',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        })
        let respuesta = await iniciarSesion.json();
        return respuesta;
    } catch (error) {
        throw new Error ('Error en la llamada para el inicio de sesion de usuario')
    }
}