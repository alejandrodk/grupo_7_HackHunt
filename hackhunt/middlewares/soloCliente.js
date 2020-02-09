const soloCliente = (req,res,next)=> {
    
    console.log('---------------- solo cliente --------------')
    if(req.session.type_user == 'cliente' || req.session.type_user == 'empresa'){
        console.log('conectado como cliente o empresa');
        next()
    } else {
        res.send('No tienes permisos para acceder a esta sección')
        next()
    }
}

module.exports = soloCliente;