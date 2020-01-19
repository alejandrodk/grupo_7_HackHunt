const locals = ((req,res,next)=>
{
    res.locals.isAuthenticated = false;
    res.locals.type_user = "guest";
	if(req.session.user_email)
	{
        res.locals.isAuthenticated = true;
        res.locals.user_id = req.session.user_id;
        res.locals.user_name = req.session.user_name;
        res.locals.data = req.session.data;
        res.locals.type_user = req.session.type_user;
	}
	next();
});

module.exports = locals;