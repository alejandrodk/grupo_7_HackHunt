const guest = (req,res,next)=>
{
    if(req.session.type_user == 'guest')
    {
        return next();
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports = guest;