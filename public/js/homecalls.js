
const obtenerPerfil = async (id_usuario) =>{                                              // Función para realizar un login
    try {
        const token = JSON.parse(localStorage.getItem('token'))
        const obtenerPerfil  = await fetch(`http://localhost:3000/usuarios/obtenerPerfil/${id_usuario}`,{
            method: 'get',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        let respuesta = await obtenerPerfil.json();
        console.log(respuesta)
        return respuesta;
    } catch (error) {
        console.log(error)
        throw new Error ('Error en la llamada para obtener el Perfil')
    }
}



const obtenerCalificaciones = async (id_usuario) =>{                                              // Función para realizar un login
    try {
        const token = JSON.parse(localStorage.getItem('token'))
        const obtenerCalificaciones  = await fetch(`http://localhost:3000/usuarios/obtenerCalificaciones/${id_usuario}`,{
            method: 'get',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        let respuesta = await obtenerCalificaciones.json();
        console.log(respuesta)
        return respuesta;
    } catch (error) {
        console.log(error)
        throw new Error ('Error en la llamada para obtener las calificaciones')
    }
}



const obtenerAmigos = async (id_usuario) =>{                                              // Función para realizar un login
    try {
        const token = JSON.parse(localStorage.getItem('token'))
        const obtenerAmigos  = await fetch(`http://localhost:3000/usuario/obtenerAmigos/${id_usuario}`,{
            method: 'get',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        let respuesta = await obtenerAmigos.json();
        console.log(respuesta)
        return respuesta;
    } catch (error) {
        console.log(error)
        throw new Error ('Error en la llamada para obtener los amigos del usuario')
    }
}


const obtenerComentarios = async (id_usuario) =>{                                              // Función para realizar un login
    try {
        const token = JSON.parse(localStorage.getItem('token'))
        const obtenerComentarios  = await fetch(`http://localhost:3000/usuario/obtenerComentarios/${id_usuario}`,{
            method: 'get',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        let respuesta = await obtenerComentarios.json();
        console.log(respuesta)
        return respuesta;
    } catch (error) {
        console.log(error)
        throw new Error ('Error en la llamada para obtener los comentarios del usuario')
    }
}