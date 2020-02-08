const soloCliente = (req,res,next)=>
{
    if(req.session.type_user != 'cliente')
    {
        return res.redirect('/',{error: "No tiene acceso a la sección solicitada."});
    }
    else
    {
        next();
    }
}

module.exports = soloCliente;