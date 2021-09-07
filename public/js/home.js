


const cerrarsession = document.querySelector('.signoff')
cerrarsession.addEventListener('click', ()=>{

        localStorage.removeItem('token');
        localStorage.removeItem('id_usuario');
  

  })

//Obteniendo el perfil acorde al el usuario que haya iniciado sesion
const id_usuario = localStorage.getItem('id_usuario')
const perfil = obtenerPerfil(id_usuario);
obtenerCalificaciones(id_usuario)
obtenerAmigos(id_usuario)
obtenerComentarios(id_usuario)



console.log(perfil)





