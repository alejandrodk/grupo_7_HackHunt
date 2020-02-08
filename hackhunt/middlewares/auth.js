const locals = ((req,res,next)=>
{
    res.locals.type_user = "guest";
	if(req.session.data)
	{
        res.locals.data = req.session.data;
        res.locals.type_user = req.session.type_user;
        return next();
    }
    else
    {
        req.session.type_user = "guest";
        return next();
    }
	
});

module.exports = locals;