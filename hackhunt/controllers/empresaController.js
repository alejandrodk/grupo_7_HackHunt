const fs = require('fs');
const dbFunctions = require('../helpers/readjson.js');
const db = require('../database/models');

const controller = {
	perfil: (req, res) => {
		let anuncios = dbFunctions.getAllAnuncios();
		/*let company = dbFunctions.getCompanyById(req.params.id);*/
	
		db.empresas.findByPk(req.session.user.id,{
			attributes: {exclude: ['cmp_user_passwd']}
		})
		.then(result => {
			console.log("llegue aqui 1")
			return res.render("empresa/perfil", {empresa: result, anuncios: anuncios.file });
		})


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
		db.anuncios.findAll({where:{cmp_id:req.session.user.id}})
		.then(result => {
			 
			res.render("empresa/anuncios", { anuncios: result });
		})
	},
	anuncioDetalle: (req, res) => {
		res.render("empresa/anuncioDetalle", { title: "Express" });
	},
	crearPublicacion: (req, res) => {
		res.render("empresa/crearPublicacion", { title: "Express" });
	},
	postearPublicacion : (req,res) => {
		
		
		req.body.adv_publication = "20/02/1991";
		db.anuncios.create(req.body)
		.then(respuesta =>{
			
			respuesta.addEmpresas(1)
			return res.send(respuesa)
		})

		//return res.redirect(`/detalle?id=${id}`);
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
