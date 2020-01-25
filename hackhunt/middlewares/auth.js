const locals = ((req,res,next)=>
{
    
    res.locals.type_user = "guest";
	if(req.session.user_email)
	{
        res.locals.user_id = req.session.user_id;
        res.locals.user_name = req.session.user_name;
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