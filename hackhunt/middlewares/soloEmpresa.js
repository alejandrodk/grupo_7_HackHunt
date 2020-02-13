const soloEmpresa = (req,res,next)=>
{
    if(req.session.type_user != 'empresa')
    {
        return res.redirect('/');
    }
    else
    {
        next();
    }
}

module.exports = soloEmpresa;