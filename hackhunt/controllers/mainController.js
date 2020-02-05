const fs = require('fs');
const bcrypt = require('bcrypt');
const dbFunctions = require('../helpers/readjson.js');
const { validationResult, body} = require('express-validator');
const db = require('../database/models');


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
			let users = dbFunctions.getAllUsers();
			let user = users.file.filter(item => item.user_email == req.body.user_email);
			let login = loginFunctions.checkLogin(req,user[0]);
			
			if(login){
				req.session.data = user[0];
				req.session.user_email = user[0].user_email;
				req.session.type_user = "cliente";
				
				res.cookie('user_id', bcrypt.hashSync(req.session.data.user_id,10),{maxAge: 1000 * 60 * 30 });

				return res.redirect('/perfil');
			} else {
				return res.redirect('/login'); 
			}

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

			let usuarios = dbFunctions.getAllUsers();
			id = dbFunctions.getNewId(usuarios); 
			
			req.body.user_passwd = bcrypt.hashSync(req.body.user_passwd,10);

			let usuario = {
				user_id: id,
				...req.body,
				user_avatar: req.file.filename,
			};
	
			
			dbFunctions.writeFile(usuario,usuarios);
			
			req.session.user = usuario;
			return res.redirect('registro/cv');
		} else {
			res.render('main/registroUsuario', { errors: errors.array() });
		}
	},
	completarCv : (req,res) => {
		let user = req.session.user;
		res.render('main/completarRegistro', { user: user });
	},
	valCompletarCv : (req,res) => {
		const errors = validationResult(req);
		//if(errors.isEmpty()){
			// validar info y cargar el CV
			let user = dbFunctions.modifyUser(req.body.user_id).file;
			delete user.user_name;
			delete user.user_lastname;
			let user_info = {
				ruta: 'data/usuarios.json',
				file: {
					...user,
					...req.body,
				}
			};
	
			dbFunctions.saveUpdates(user_info);
			return res.redirect('/login');
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
	}
};

module.exports = controller;
