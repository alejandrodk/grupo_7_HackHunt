const fs = require('fs');
const bcrypt = require('bcrypt');
const dbFunctions = require('../helpers/readjson.js');
const { validationResult, body} = require('express-validator');
const db = require('../database/models');
const userCv = require('../helpers/user_cv.js');


const loginFunctions = require('../helpers/login');

const controller = {
	home: (req, res) => {
		let anu = dbFunctions.getAllAnuncios();
		res.render('main/index', { anuncios: anu.file });
	},
	busquedaHome: (req, res) => {
		// traer datos enviados en la barra de busqueda y mostrar resultados
		res.redirect('/');
	},
	detalleAnuncio: (req, res) => {
		id = req.query.id;
		let anu = dbFunctions.getAnuncioById(id);
		res.render('main/detalleAnuncio', { anuncio: anu });
	},
	loginUsuario: (req, res) => {
		res.render('main/loginUsuario', { title: 'Express' });
	},
	validarUsuario: (req,res) => {
		// validar formulario con express-validator
		const errors = validationResult(req);

		if(errors.isEmpty()){

			db.clientes.findOne({
				where : {
					user_email : req.body.user_email
				}
			}) .then( user => {
				if(bcrypt.compareSync(req.body.user_passwd,user.user_passwd)){

					req.session.user = user;
					res.cookie('user_id', bcrypt.hashSync(toString(user.user_id),10),{maxAge: 1000 * 60 * 30 });
					res.cookie('user_type','cliente',{maxAge: 1000 * 60 * 30 });
	
					return res.redirect('/perfil');
				} else{
					return res.redirect('/login'); 
				}
			})

		} else {
		res.render('main/loginUsuario', { errors: errors.array() });
		}
	},
	registroUsuario: (req, res) => { 
		res.render('main/registroUsuario', { title: 'Express' });
	},
	valRegUsuario: (req,res) => {
		const errors = validationResult(req);

		if(errors.isEmpty()){	

			req.body.user_passwd = bcrypt.hashSync(req.body.user_passwd,10);
			req.body.user_type = 'cliente';

			db.clientes.create({ ...req.body, user_avatar : req.file.filename });

			delete req.body.user_passwd
			let user = { ...req.body }
			req.session.user = user;

			return res.redirect('registro/cv');

		} else {
			res.render('main/registroUsuario', { errors: errors.array() });
		}
	},
	completarCv : (req,res) => {
		res.render('main/completarRegistro', { title: 'Completar tu registro' });
	},
	valCompletarCv : (req,res) => {
		const errors = validationResult(req);
		//if(errors.isEmpty()){

			db.clientes.findOne({
				where : {
					user_email : req.session.user.user_email
				}
			}) .then(user => {
				let id = user.user_id

				let clienteCv = userCv.infoPersonal(req.body,id);
				let clienteExp = userCv.infoLaboral(req.body,id);
				let clienteEduc = userCv.infoEducacion(req.body,id);
	
				db.cliente_cv.create({ ...clienteCv });
				db.cliente_experience.create({ ...clienteExp });
				db.cliente_education.create({ ...clienteEduc });

				return res.redirect('/login');
			})

		//} else {
		//	res.render('main/completarRegistro', { errors: errors.array(), user: user });
		//	}
	},
	loginEmpresa: (req, res) => {
		res.render('main/loginEmpresa', { title: 'Express' });
	},
	validarEmpresa: (req,res) => {
		const errors = validationResult(req);

		if(errors.isEmpty()){
			let users = dbFunctions.getAllCompanies();
			let user = users.file.filter(item => item.cmp_user_email == req.body.cmp_user_email);
			let login = loginFunctions.checkLogin(req,user[0]);
			if(login) 
			{
				req.session.data = user[0];
				req.session.user_email = user[0].cmp_user_email;
				req.session.type_user = user[0].type;
				
				hashed_id = bcrypt.hashSync("fede" ,12);
				
				res.cookie('user_id',hashed_id,{maxAge:60000000});

				return res.redirect('/empresa/perfil');
			}
			else
			{
				return res.redirect('/empresa/login');
			}
		} else{
			res.render('main/loginEmpresa', { errors: errors.array() });
		}
		/*
		db.Empresa.findOne({
			where: {
				cmp_user_email: req.body.cmp_user_email,
			}
		}).then(empresa=>{
			
			if(empresa)
			{
				
				if(bcrypt.compareSync(req.body.cmp_user_passwd,empresa.cmp_user_passwd)){
					req.session.user_email = req.body.cmp_user_email;
					req.session.type_user = 'company';
					req.session.data = empresa;
			return res.redirect('/empresa/perfil');
					
				} 
				else
				{
					
				return	res.render('main/registroEmpresa',{errors:[{msg:"Usuario y/o contraseña erroneo"}]})
				}
			}
			return res.render('main/registroEmpresa',{errors:[{msg:"Usuario y/o contraseña erroneo"}]})
		})
		 */
	},
	registroEmpresa: (req, res) => {
		res.render('main/registroEmpresa', { title: 'Express' });
	},
	valRegEmpresa: (req,res) => {
		const errors = validationResult(req);

		if(errors.isEmpty()){

			let allCompanies = dbFunctions.getAllCompanies();
			var newid = dbFunctions.getNewId(allCompanies);
			req.body.cmp_user_passwd = bcrypt.hashSync(req.body.cmp_user_passwd,12);
			let newCompany = {
				cmp_id: newid,
				...req.body,
				cmp_avatar: req.file.filename
			};
			
			dbFunctions.writeFile(newCompany,allCompanies);
			
			res.redirect('/');
		} else {
			res.render('main/registroEmpresa', { errors: errors.array() });
		}

		/*
		//busco si hay un cliente con el mismo email que se quiere registrar.
		 db.Empresa.findOne({
			 where:{cmp_user_email:req.body.cmp_user_email}
		 })
		 .then(resultado => {
			 //verifico si no existe registro en la db con el mismo email
			 if(resultado == null)
			 {
				 //hasheo el passwd y creo el nuevo usuario. se guarda en la db
				req.body.cmp_user_passwd = bcrypt.hashSync(req.body.cmp_user_passwd,12);
				const user = db.Empresa.create({...req.body,cmp_avatar:req.file.filename})
				return user;
			}
			 else
			 {
				 //si existe registro con el email, se vuelve al form con el error.
				 res.render('main/registroEmpresa',{errors:[{msg:"Email en uso"}]})
			 }
			 
		 })
		 .then(user => {
			 //cuando termina de crearse el usuario nuevo, se pasan los datos a sesion y se redirecciona.
			req.session.user_email = req.body.cmp_user_email;
			req.session.type_user = 'company';
			
			req.session.data = user;
			return res.redirect('/empresa/perfil');
		})
		//si algo falla, se ve en consola el/los errores.
		 .catch(error =>{
			 console.log(error);
		 })
		
		
		

		*/
	},
	recuperar: (req,res) => {
		// consultar info en DB y enviar al correo los datos de la cuenta
		return res.redirect('/perfil');
	},
	recuperarEmpresa: (req,res) => {
		// consultar info en DB y enviar al correo los datos de la cuenta
		res.redirect('/empresa/perfil');
	},
	pruebas: (req,res) =>
	{

	},
	logout:(req,res)=>
	{
		req.session.destroy();
		res.cookie('user_id', null, { maxAge: -1 });
		
		
		return res.redirect('/');
	},

	pruebas:(req,res) =>
	{
		db.Empresas.findAll()
		.then(result => {
			res.send(result);
		})
	}
};

module.exports = controller;
