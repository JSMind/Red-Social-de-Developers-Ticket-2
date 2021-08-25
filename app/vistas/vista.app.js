// Importación de modulos necesarios a utilizar
const midd = require('../../middelwares/midd.usuarios')


// Exportar los modulos
module.exports = (app) => {

    app.get('/home',  async(req,res) => {                            //Vista que renderiza la pagina Home
        try {
            res.render('home')  
        } catch (error) {
            console.log('Error al renderizar la pagina principal');
            res.status(400).json(error.message);
        }
    });
    
    app.get('/login', async(req,res) => {                            //Vista que renderiza la pagina login
        try { 
            res.render('login')  
        } catch (error) {
            console.log('Error al renderizar la pagina login');
            res.status(400).json(error.message);
        }
    });

    app.get('/signup', async(req,res) => {                            //Vista que renderiza la pagina Signup
        try { 
            res.render('signup')  
        } catch (error) {
            console.log('Error al renderizar la pagina signup');
            res.status(400).json(error.message);
        }
    });
}