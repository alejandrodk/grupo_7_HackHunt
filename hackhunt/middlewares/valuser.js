const validate = (req,res,next)=>
{
    if(req.session.data != undefined)
    {
        next();
    }
    res.redirect('/');
}

module.exports = validate;