const locals = (req,res,next)=>
{
        console.log('---------------- auth --------------')
    res.locals.type_user = "guest";
    
	if(req.session.user){
        if(req.session.type_user == 'cliente'){
            console.log('sesion recuperada como: ' + req.session.user.user_name);
        }
        if (req.session.type_user == 'empresa'){
            console.log('sesion recuperada como: ' + req.session.user.cmp_user_name);
        }
        
        res.locals.user = req.session.user;
        res.locals.type_user = req.session.type_user;
        return next();
    } else {
        req.session.type_user = "guest";
        return next();
    }
	
};

module.exports = locals;