// Variables globales
let btnLogin = document.getElementById("login");

// Función para capturar los datos del usuario
btnLogin.addEventListener('submit', async(e) =>{
    let usuario = {
        correo: document.getElementById("inputEmail").value,
        contrasena: document. getElementById("inputPassword").value
    }
    try {
        e.preventDefault()
        validarEmail(usuario.correo);
        validarContrasena(usuario.contrasena);
        let iniciarSesion = await nuevoIngreso(usuario);
        if(iniciarSesion.validacion){
            usuario.token = iniciarSesion.validacion;
            localStorage.setItem('token', JSON.stringify(usuario.token))
            usuario.id_usuario = iniciarSesion.id_usuario
            localStorage.setItem('id_usuario', JSON.stringify(usuario.id_usuario))
            window.location.href = "http://localhost:3000/home"
        }else{
            alert(`Error: ${iniciarSesion.message}`)
        }    
    } catch (error) {
        console.log(error);
        alert(`Error: ${error.message}`);
    }
})