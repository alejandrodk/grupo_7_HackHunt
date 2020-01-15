const locals = ((req,res,next)=>
{
    res.locals.isAuthenticated = false;
	if(req.session.user_email)
	{
        res.locals.isAuthenticated = true;
        res.locals.user_id = req.session.user_id;
        res.locals.user_name = req.session.user_name;
	}
	next();
});

module.exports = locals;