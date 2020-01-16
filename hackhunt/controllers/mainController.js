const fs = require('fs');
const bcrypt = require('bcrypt');
const dbFunctions = require('../helpers/readjson.js');

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
		let user_id = req.session.user.id;
		let usuarios = dbFunctions.getAllUsers().file;
		let infoCv = {
			...req.body
		}

		return res.redirect('/perfil');
	},
	loginEmpresa: (req, res) => {
		res.render('main/loginEmpresa', { title: 'Express' });
	},
	validarEmpresa: (req,res) => {
		// hacer validacion del login
		return res.redirect('empresa/perfil');
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
		req.body.cmp_passwd = bcrypt(req.body.cmp_passwd,12);
		let newCompany = {
			cmp_id: newid,
			// trae los datos del form con los nombres del inputs
			...req.body,
			cmp_avatar: req.file.filename
		};
		
		//la funcion writeFile recibe como primer param el obj nuevo creado
		// y 2do param el obj con todas las compañias.
		dbFunctions.writeFile(newCompany,allCompanies);
		
		return res.redirect('/empresa/perfil');
	},
	recuperar: (req,res) => {
		// consultar info en DB y enviar al correo los datos de la cuenta
		return res.redirect('/perfil');
	},
	recuperarEmpresa: (req,res) => {
		// consultar info en DB y enviar al correo los datos de la cuenta
		return res.redirect('/empresa/perfil');
	}
};

module.exports = controller;
