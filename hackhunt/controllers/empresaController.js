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
		let empresa = dbFunctions.getCompanyById(req.session.data.cmp_id);
		delete empresa.cmp_user_passwd;
		res.render("empresa/info", {empresa:empresa, title: "Express" });
	},
	modificarInfo: (req,res)=>{
		let empresa = dbFunctions.modifyCompany(req.params.id);
		console.log(req.file);
		if(typeof req.file == 'undefined')
		{
			req.body.cmp_avatar == empresa.file.cmp_avatar;
		}
		else
		{
			
			req.body.cmp_avatar = req.file.filename;
		}
		 empresa.file = {
			...empresa.file,
			...req.body
		
		}
		dbFunctions.saveUpdates(empresa);
		return res.redirect('/empresa/informacion'); 
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
		let adv_Json = dbFunctions.getAllAnuncios();
		 
		let date = new Date();
		let adv_fechaAct = `${date.getDate()}/${date.getMonth()+1}/${date.getUTCFullYear()}`
		let id = dbFunctions.getNewId(adv_Json);
		let anuncio = {
			// identificadores
			adv_id : id,
			// traer empresa de sesion
			adv_cmp_id : req.session.user_id, //id de la empresa que publico
			adv_cmp_name: req.session.data.cmp_name,
			adv_cmp_avatar: req.session.data.cmp_avatar,
			// info POST
			...req.body,
			adv_publication : adv_fechaAct,
			// info para empresa
			nuevos : 0,
			candidatos : 0,
			destacados : 0,
			postulantes : [],
			favoritos : []
		}

		dbFunctions.writeFile(anuncio,adv_Json); 

		return res.redirect(`/detalle?id=${id}`);
	},
	modificarPerfil: (req,res)=>
	{
		let user = dbFunctions.modifyCompany(req.session.user_id);
		//aca van los datos para modificar
		dbFunctions.saveUpdates(user);
		return res.redirect('/perfil');
		
	},
	modificarPublicacion: (req, res) => {

		let publicacion = dbFunctions.getAnuncioById(req.params.id);
		res.render("empresa/modificarPublicacion", { publicacion:publicacion, title: "Express" })
	},
	actualizarPublicacion: (req, res) => {
		// actualizar info en la DB y enviar a la vista previa 
		let anuncio = dbFunctions.modifyAnuncio(req.params.id);
		
		anuncio.file = {
			anu_id: anuncio.file.anu_id,
			anu_empresa_id: anuncio.file.anu_empresa_id,
			anu_empresa_name: anuncio.file.anu_empresa_name,
			anu_empresa_avatar: anuncio.file.anu_empresa_avatar,
			...req.body
		}
		dbFunctions.saveUpdates(anuncio);
		return res.redirect("/empresa/perfil");
	},

	borrarPublicacion: (req,res) =>
	{
		dbFunctions.deleteAnuncio(req.params.id);
		return res.redirect("/empresa/perfil");
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
