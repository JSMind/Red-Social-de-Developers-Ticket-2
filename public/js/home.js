  //Modificando el estado de Sesion en el DOM
// function estadoSesion(){
//   var estadoSesion = document.querySelector('.login');
//   if(localStorage.getItem('token')){ 
//       tokenSesion= localStorage.getItem('token')   
//       if( tokenSesion !== "undefined"){
//           estadoSesion.textContent = "SIGN OFF"
//       }
//   }
// };

// estadoSesion();

const cerrarsession = document.querySelector('.signoff')

cerrarsession.addEventListener('click', ()=>{

        localStorage.removeItem('token');
        estadoSesion();

  })