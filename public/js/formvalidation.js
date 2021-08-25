// Desabilitar el envio de formularios, si no hay campos
(function () {
    'use strict'
    // Obtener el formulario al que queremos aplicar estilos de validación de Bootstrap
    let forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
      
  })()
  
  // Mostrar-Ocultar contraseña
  function mostrarPassword(){
    var cambio = document.getElementById("txtPassword");
    if(cambio.type == "password"){
      cambio.type = "text";
      $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
      cambio.type = "password";
      $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
  };