const soloEmpresa = (req,res,next)=>
{
    if(req.session.type_user != 'company')
    {
        return res.redirect('/');
    }
    else
    {
        next();
    }
}

module.exports = soloEmpresa;