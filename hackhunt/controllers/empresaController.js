const fs = require('fs');
const dbFunctions = require('../helpers/readjson.js');
const controller = {
	perfil: (req, res) => {
		let anuncios = dbFunctions.getAllAnuncios();
		let company = dbFunctions.getCompanyById(req.params.id);
		res.render("empresa/perfil", {empresa: company, anuncios: anuncios.file });
	},
	configuracion: (req, res) => {
		res.render('empresaconfig');
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
			anu_empresa_id : req.session.user_id, //id de la empresa que publico
			anu_empresa_name: req.session.data.cmp_name,
			anu_empresa_avatar: req.session.data.cmp_avatar,
			// info POST
			...req.body,
			anu_publicacion : anu_fechaAct,
			// info para empresa
			nuevos : 0,
			candidatos : 0,
			destacados : 0,
			postulantes : [],
			favoritos : []
		}

		dbFunctions.writeFile(anuncio,anu_Json); 

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
