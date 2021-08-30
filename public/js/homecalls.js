function mostrarPerfil(perfil) {                                    //Metodo que imprimira el DOM de la pagina Product
    const items = document.getElementById('items')
    const templateCard = document.getElementById('template-card').content
    const fragment = document.createDocumentFragment()
    
      templateCard.querySelectorAll('.texto')[0].textContent = perfil.nombre_perfil
      templateCard.querySelectorAll('.texto')[1].textContent = perfil.edad
      templateCard.querySelectorAll('.texto')[2].textContent = perfil.pais
      templateCard.querySelectorAll('.texto')[3].textContent = perfil.ciudad
      templateCard.querySelectorAll('.texto')[4].textContent = perfil.estudios
      templateCard.querySelectorAll('.texto')[5].textContent = perfil.linkedin
      templateCard.querySelectorAll('.texto')[6].textContent = perfil.idiomas
      templateCard.querySelectorAll('.texto')[7].textContent = perfil.hobbies



      templateCard.querySelector('img').setAttribute("src", perfil.foto_perfil)
      const clone = templateCard.cloneNode(true)
      fragment.appendChild(clone)
    items.appendChild(fragment)
  }


const obtenerPerfil = async (id_usuario) =>{                                              // Función para realizar un login
    try {
        const token = JSON.parse(localStorage.getItem('token'))
        let respuesta
        await fetch(`http://localhost:3000/usuarios/obtenerPerfil/${id_usuario}`,{
            method: 'get',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(response=> response.json()).then(data => respuesta = data )
        
        mostrarPerfil(respuesta.consultaPerfil)
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