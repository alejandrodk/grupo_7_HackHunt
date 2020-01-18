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
		let errors_validation = validationResult(req);
		if(!errors_validation.isEmpty()){
			return res.render('main/loginUsuario', { error: errors_validation });
		} else {
			let usuariosDB = fs.readFileSync('data/usuarios.json', {encoding:'utf-8'});
			let usuarios = JSON.parse(usuariosDB);
			for (const usuario of usuarios) {
				if(usuario.email == req.body.correo && usuario.clave == req.body.clave){
					sessionData = req.session;
					//creamos una sesion con toda la info del usuario
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
		let contenido = fs.readFileSync('data/usuarios.json', {encoding:'utf-8'});
		let id;
		
		if (contenido == ''){
			contenido = [];
			id = 1 } 
		else {
			contenido = JSON.parse(contenido);
			id = contenido.length + 1 }

		let usuario = {
			nombre : req.body.nombre,
			apellido : req.body.apellido,
			email : req.body.email,
			clave : req.body.clave,
			tipo : 'user',
			id : id
		};

		contenido.push(usuario);
		
		let contenidoJSON = JSON.stringify(contenido);
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
		let user = req.session.user;
		//let usuarios = dbFunctions.getAllUsers().file;

		let infoCv = {
			...req.body
		};

		let usuariosAct = usuarios.map((userrr) => {
			if(userrr.id == user.id){
				user.nombre = req.body.user_name;
			}
		})
		res.json(usuariosAct);
		//return res.redirect('/perfil');
	},
	loginEmpresa: (req, res) => {
		res.render('main/loginEmpresa', { title: 'Express' });
	},
	validarEmpresa: (req,res) => {
		let users = dbFunctions.getAllCompanies();
		let user = users.file.filter(item => item.cmp_email == req.body.cmp_email);
		let login = loginFunctions.checkLogin(req,user[0]);
		if(login)
		{
			req.session.data = user[0];
			req.session.user_email = user[0].cmp_email;
			return res.redirect('/empresa/perfil');
		}
		else
		{
			return res.redirect('/empresa/login');
		}
		
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
		req.body.cmp_passwd = bcrypt.hashSync(req.body.cmp_passwd,12);
		console.log(req.body.cmp_passwd);
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
