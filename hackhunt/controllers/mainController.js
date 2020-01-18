const fs = require('fs');
const bcrypt = require('bcrypt');
const dbFunctions = require('../helpers/readjson.js');
const {check, validationResult, body} = require('express-validator');

const loginFunctions = require('../helpers/login');
var sessionData;

const anuncios = fs.readFileSync('data/anuncios.json', {encoding : 'utf-8'} );

const controller = {
	home: (req, res) => {
		res.render('main/index', { anuncios: JSON.parse(anuncios) });
	},
	busquedaHome: (req, res) => {
		// traer datos enviados en la barra de busqueda y mostrar resultados
		res.redirect('/');
	},
	detalleAnuncio: (req, res) => {
		id = req.query.id;
		res.render('main/detalleAnuncio', { anuncio: JSON.parse(anuncios)[id - 1] });
	},
	loginUsuario: (req, res) => {
		res.render('main/loginUsuario', { title: 'Express' });
	},
	validarUsuario: (req,res) => {
		// validar formulario con express-validator
		let errors = validationResult(req);
		if(!errors.isEmpty()){
			console.log(errors);
			return res.render('main/loginUsuario', { errors: errors });
			// falta mostrar errores en la vista
		} else {
			let usuariosDB = fs.readFileSync('data/usuarios.json', {encoding:'utf-8'});
			let usuarios = JSON.parse(usuariosDB);
			for (const usuario of usuarios) {
				if(usuario.user_email == req.body.user_email && (bcrypt.compareSync(usuario.user_passwd, req.body.user_passwd))){
					sessionData = req.session;
					//creamos una sesion con toda la info del usuario
					delete usuario.user_passwd;
					sessionData.user = usuario;
					//res.json(sessionData.usuario); (para ver si la info paso bien)
					return res.redirect('/perfil');
				} else {
					res.send('error en el login');
				}
			}
		}
	},
	registroUsuario: (req, res) => {
		res.render('main/registroUsuario', { title: 'Express' });
	},
	valRegUsuario: (req,res) => {
		// Guardar info en la DB y redireccionar al perfil
		let contenidoJSON = fs.readFileSync('data/usuarios.json', {encoding:'utf-8'});
		let id = 0;
		
		if (contenidoJSON == ''){
			contenido = [];
			id = 1 } 
		else {
			contenido = JSON.parse(contenidoJSON);
			let cont = {
				ruta: 'data/usuarios.json',
				file: contenido
			}
			id = dbFunctions.getNewId(cont);
		}
		req.body.user_passwd = bcrypt.hashSync(req.body.user_passwd,10);
		req.body.user_id = id;
		let usuario = {
			...req.body
		};

		contenido.push(usuario);
		
		contenidoJSON = JSON.stringify(contenido);
		fs.writeFileSync('data/usuarios.json',contenidoJSON);
		
		req.session.user = usuario;
		return res.redirect('registro/cv');
	},
	completarCv : (req,res) => {
		let user = req.session.user;
		res.render('main/completarRegistro', { user: user });
	},
	valCompletarCv : (req,res) => {
		// validar info y cargar el CV
		req.body.user_id = req.body.user_id;
		let user_info = {
			ruta: 'data/usuarios.json',
			file: {
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
		let users = dbFunctions.getAllCompanies();
		let user = users.file.filter(item => item.cmp_user_email == req.body.cmp_user_email);
		let login = loginFunctions.companyLogin(req,user[0],req.body.cmp_user_passwd);
		if(login)
		{
			req.session.data = user[0];
			req.session.user_email = user[0].cmp_user_email;
			return res.redirect('/empresa/perfil');
		}
		
		return res.redirect('/empresa/login');
	},
	registroEmpresa: (req, res) => {
		res.render('main/registroEmpresa', { title: 'Express' });
	},
	valRegEmpresa: (req,res) => {
		
		// Guardar info en la DB y redireccionar al perfil
		//la funcion getAllCompanies devuelve un obj con las prop:
		//ruta: con el path del json de las empresas
		//file: con los datos del json de empresas
		let allCompanies = dbFunctions.getAllCompanies();
		
		//la funcion getNewId recibe como param el obj de las empresas
		// y devuelve un nuevo id para la neuva empresa
		var newid = dbFunctions.getNewId(allCompanies);
		req.body.cmp_user_passwd = bcrypt.hashSync(req.body.cmp_user_passwd,12);
		let newCompany = {
			cmp_id: newid,
			// trae los datos del form con los nombres del inputs
			...req.body,
			cmp_avatar: req.file.filename
		};
		
		//la funcion writeFile recibe como primer param el obj nuevo creado
		// y 2do param el obj con todas las compañias.
		dbFunctions.writeFile(newCompany,allCompanies);
		
		res.redirect('/');
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
		res.redirect('/');
	}
};

module.exports = controller;
