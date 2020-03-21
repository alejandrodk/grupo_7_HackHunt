const soloEmpresa = (req,res,next)=>
{
    if(req.session.type_user != 'empresa')
    {
        return res.redirect('/forbidden');
    }
    else
    {
        next();
    }
}

module.exports = soloEmpresa;