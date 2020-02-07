const soloEmpresa = (req,res,next)=>
{
    if(req.session.type_user != 'company')
    {
        return res.redirect('/',{error: "No tiene acceso a la sección solicitada."});
    }
    else
    {
        next();
    }
}

module.exports = soloEmpresa;