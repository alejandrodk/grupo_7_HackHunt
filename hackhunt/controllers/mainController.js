const fs = require('fs');
const bcrypt = require('bcrypt');
const dbFunctions = require('../helpers/readjson.js');
const {check, validationResult, body} = require('express-validator');

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
			console.log("llegue hasta aqui",login);
			if(login){
				req.session.data = user[0];
				req.session.user_email = user[0].user_email;
				req.session.type_user = "cliente";

				res.cookie('user_id',bcrypt.hashSync(req.session.data.user_id,10),{maxAge:60000000});

				return res.redirect('/perfil');
			} else {
				res.send('error en el login'); 
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
				user_avatar:req.file.filename
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
				console.log(req.session.type_user);
				return res.redirect('/empresa/perfil');
			}
			else
			{
				return res.redirect('/empresa/login');
			}
		} else{
			res.render('main/loginEmpresa', { errors: errors.array() });
		}
		 
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
		res.cookie('user_id',null, { maxAge: -1});
		
		return res.redirect('/');
	}
};

module.exports = controller;
