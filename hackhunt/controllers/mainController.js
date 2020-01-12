const fs = require('fs');

const controller = {
	home: (req, res) => {
		let anuncios = fs.readFileSync('data/anuncios.json', {encoding : 'utf-8'} )
		res.render('main/index', { anuncios: JSON.parse(anuncios) });
	},
	busquedaHome: (req, res) => {
		// traer datos enviados en la barra de busqueda y mostrar resultados
		res.redirect('/');
	},
	detalleAnuncio: (req, res) => {
		id = req.query.id;
		let anuncios = fs.readFileSync('data/anuncios.json', {encoding : 'utf-8'} )
		res.render('main/detalleAnuncio', { anuncio: JSON.parse(anuncios)[id - 1] });
	},
	loginUsuario: (req, res) => {
		res.render('main/loginUsuario', { title: 'Express' });
	},
	validarUsuario: (req,res) => {
		// hacer validacion del login
		res.redirect('perfil');
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
		
		res.redirect('perfil');
	},
	loginEmpresa: (req, res) => {
		res.render('main/loginEmpresa', { title: 'Express' });
	},
	validarEmpresa: (req,res) => {
		// hacer validacion del login
		res.redirect('empresa/perfil');
	},
	registroEmpresa: (req, res) => {
		res.render('main/registroEmpresa', { title: 'Express' });
	},
	valRegEmpresa: (req,res) => {
		// Guardar info en la DB y redireccionar al perfil
		let contenido = fs.readFileSync('data/empresas.json', {encoding:'utf-8'});
		
		let usuario = {
			nombre : req.body.nombre,
			apellido : req.body.apellido,
			email : req.body.email,
			clave : req.body.clave,
			razonSocial : req.body.razon,
			cuit : req.body.cuit,
			telefono : req.body.telefono,
			rubro : req.body.rubro,
			tipo : req.body.tipo,
			id : (JSON.parse(contenido).length + 1),
			// agregar usuarios que siguen a esta pagina
			// para luego mostrar los anuncios de las empresas que sigues
			seguidores : []
		};
		
		if (contenido == ''){
			contenido = [];
		} else {
			contenido = JSON.parse(contenido);
		}
		
		contenido.push(usuario);
		
		let contenidoJSON = JSON.stringify(contenido);
		fs.writeFileSync('data/empresas.json',contenidoJSON);
		
		res.redirect('/empresa/perfil');
	},
	recuperar: (req,res) => {
		// consultar info en DB y enviar al correo los datos de la cuenta
		res.redirect('/perfil');
	},
	recuperarEmpresa: (req,res) => {
		// consultar info en DB y enviar al correo los datos de la cuenta
		res.redirect('/empresa/perfil');
	}
};

module.exports = controller;
