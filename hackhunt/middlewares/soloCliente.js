const soloCliente = (req,res,next)=> {
    
    console.log('---------------- solo cliente --------------')
    if(req.session.type_user == 'cliente'){
        return next();
    } else {
       // res.send('No tienes permisos para acceder a esta sección')
       return  res.redirect('/forbidden')
    }
}

module.exports = soloCliente;