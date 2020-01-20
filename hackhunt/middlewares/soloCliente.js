const soloCliente = (req,res,next)=>
{
    if(req.session.type_user != 'cliente')
    {
        return res.redirect('/');
    }
    else
    {
        next();
    }
}

module.exports = soloCliente;