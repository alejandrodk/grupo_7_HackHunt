const fs = require('fs');
const dbFunctions = require('../helpers/readjson.js');
const db = require('../database/models');

const controller = {
	perfil: (req, res) => {
		let empresa;
		db.empresas.findByPk(req.session.user.id,{
			attributes: {exclude: ['cmp_user_passwd']}
		})
		.then(result => {
			empresa = result;
			return result.getAnuncios();
			 
			})
			.then(resultado =>{
				
				return res.render("empresa/perfil", {empresa: empresa, anuncios:resultado });
			})


	},
	configuracion: (req, res) => {
		res.render('empresaconfig');
	},
	info: (req, res) => {
		db.empresas.findByPk(req.session.user.id)
		.then(empresa =>{
			delete empresa.cmp_user_passwd;
			res.render("empresa/info", {empresa:empresa, title: "Express" });
		})
	},
	modificarInfo: (req,res)=>{
		db.empresas.update(req.body,{
			where:{id:req.session.user.id}
		})
		.then(()=>{

			return res.redirect('/empresa/informacion'); 
		})
		
	},
	mensajes: (req, res) => {
		res.render("empresa/mensajes", { title: "Express" });
	}, 
	anuncios: (req, res) => {
		db.anuncios.findAll(
			{
				raw:true,
			 where:{cmp_id:req.session.user.id},
			 attributes:{include:[db.Sequelize.col('empresas.cmp_avatar')]},
			 include:[{
				 model: db.empresas, 
				 as: 'empresas',
				 attributes: []
				}]
			})
		.then(result => {
			
			res.render("empresa/anuncios", { anuncios: result });
		})

	},
	anuncioDetalle: (req, res) => {
		res.render("empresa/anuncioDetalle", { title: "Express" });
	},
	crearPublicacion: (req, res) => {
		db.skills.findAll()
		.then(skills =>{
			res.render("empresa/crearPublicacion", { title: "Express", skills: skills });
		})
	},
	postearPublicacion : (req,res) => {
		
		db.empresas.findByPk(req.session.user.id)
		.then(empresa =>{
			
			let fecha = new Date().toLocaleDateString().slice(0,10).split('-');
			req.body.adv_publication = fecha[2] + '/' + fecha[1] + '/' + fecha[0];
			let skills = req.body.adv_skills;
			delete req.body.adv_skills;
			db.anuncios.create(req.body)
			.then( anuncio =>{
				 empresa.addAnuncios(anuncio)				
				return anuncio
			})
				 .then(anuncio =>{
					for(let i = 0; i<skills.length;i++){

						anuncio.addSkills(skills[i])
					}

					})
					 .then(()=>{
						 return res.redirect('/empresa/perfil');
						 
					 })
					})
						 .catch(err =>{
							 console.log(err);
						 
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
		let anuncios;
		db.anuncios.findByPk(req.params.id,{
			
			include:[{model:db.skills,as:'skills',attributes:['skill_name']
			}]
		})

		.then(resultado =>{
			anuncios = resultado;
			db.skills.findAll()
			.then(skills=>{

				return res.render("empresa/modificarPublicacion", { publicacion:anuncios,skills:skills, title: "Express" })
			})
		})
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
		db.anuncios.destroy({
			where: {id: req.params.id}
		})
		.then(()=>{

			return res.redirect("/empresa/perfil");
		})
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
