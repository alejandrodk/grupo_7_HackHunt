const soloGuest = (req,res,next)=>
{
    if(req.session.type_user == 'company')
    {
        return res.redirect('/empresa/perfil');
    }
    if(req.session.type_user == 'cliente')
    {
        return res.redirect('/perfil');
    }
    else
    {
        next();
    }
}

module.exports = soloGuest;