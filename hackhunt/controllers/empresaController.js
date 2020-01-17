const fs = require('fs');
const dbFunctions = require('../helpers/readjson.js');
const controller = {
	perfil: (req, res) => {
		let anuncios = fs.readFileSync('data/anuncios.json', {encoding: 'utf-8'});
		let company = dbFunctions.getCompanyById(req.params.id);
		res.render("empresa/perfil", {empresa: company, anuncios: JSON.parse(anuncios) });
	},
	info: (req, res) => {
		res.render("empresa/info", { title: "Express" });
	},
	mensajes: (req, res) => {
		res.render("empresa/mensajes", { title: "Express" });
	},
	anuncios: (req, res) => {
		let anuncios = dbFunctions.getAllAnuncios();

		res.render("empresa/anuncios", { anuncios: anuncios.file });
	},
	anuncioDetalle: (req, res) => {
		res.render("empresa/anuncioDetalle", { title: "Express" });
	},
	crearPublicacion: (req, res) => {
		res.render("empresa/crearPublicacion", { title: "Express" });
	},
	postearPublicacion : (req,res) => {
		let anu_Json = dbFunctions.getAllAnuncios();
		 
		let date = new Date();
		let anu_fechaAct = `${date.getDate()}/${date.getMonth()+1}/${date.getUTCFullYear()}`
		let id = dbFunctions.getNewId(anu_Json);
		let anuncio = {
			// identificadores
			anu_id : id,
			// traer empresa de sesion
			empresa : '', //id de la empresa que publico
			// info POST
			anu_publicacion : anu_fechaAct,

			// info para empresa
			nuevos : 0,
			candidatos : 0,
			destacados : 0,
			postulantes : [],
			favoritos : []
		}

		if (contenido == ''){
			contenido = [];
		} else {
			contenido = JSON.parse(contenido);
		}
		
		contenido.push(anuncio);
		
		let contenidoJSON = JSON.stringify(contenido);
		fs.writeFileSync('data/anuncios.json',contenidoJSON);

		res.redirect(`/detalle?id=${id}`);
	},
	modificarPerfil: (req,res)=>
	{
		let user = dbFunctions.modifyCompany(req.session.user_id);
		//aca van los datos para modificar
		dbFunctions.saveUpdates(user);
		res.redirect('/perfil');
		
	},
	modificarPublicacion: (req, res) => {
		res.render("empresa/modificarPublicacion", { title: "Express" })
	},
	actualizarPublicacion: (req, res) => {
		// actualizar info en la DB y enviar a la vista previa 
		res.redirect("/detalle")
	},
	postulantes: (req, res) => {
		res.render("empresa/postulantes", { title: "Express" });
	},
	postulantesDetalle: (req, res) => {
		let id = req.query.id;
		// traer info de usuario de DB segun su ID
		// y guardarlo agrupado en objetos literales
		let perfil = '';
		let profesionales = '';
		let experiencia = '';
		let formacion = '';
		let idiomas = '';
		let skills = '';
		res.render("empresa/cv", 
		{ 
			perfil: perfil,
			profesionales: profesionales,
			experiencia: experiencia,
			formacion: formacion,
			idiomas: idiomas,
			skills: skills
		 });
	}
};

module.exports = controller;
