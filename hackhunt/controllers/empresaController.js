const fs = require('fs');
const dbFunctions = require('../helpers/readjson.js');
const db = require('../database/models');
const sequelize = require('sequelize')

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
		if(req.file.filename){
			req.body.cmp_avatar = req.file.filename;
		}
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
				//raw:true,
			 where:{cmp_id:req.session.user.id},
			 attributes:{include:[db.Sequelize.col('empresas.cmp_avatar')]},
			 include:[{
				 model: db.empresas, 
				 as: 'empresas',
				 attributes: ['cmp_avatar']
				},
				]
			})
		.then(result => { 
			db.sequelize.query(
			  	`select b.id, b.adv_id, b.visto from clientes as a inner join postulantes as b on a.user_id = b.cli_id inner join anuncios as c on b.adv_id = c.id inner join empresas as d on c.cmp_id = d.id where d.id = ${req.session.user.id}`)
			
			.then(resultado =>{
				console.log(resultado[0])
			
				res.render("empresa/anuncios", { anuncios: result, postulaciones:resultado[0] });
			})
			
		})

	},
	anuncioDetalle: (req, res) => {
		res.render("empresa/anuncioDetalle", { title: "Express" });
	},
	crearPublicacion: (req, res) => {
		db.skills.findAll()
		.then(skills =>{
			db.anuncios.findAll(
				{
					raw:true,
					where:{cmp_id:req.session.user.id},
					attributes:{include:[db.Sequelize.col("empresas.cmp_avatar")]}, 
					include:[{model:db.empresas,as:"empresas",attributes:[]}]
				}
			)
			.then(anuncios =>{
				
				res.render("empresa/crearPublicacion", { title: "Express", skills: skills, anuncios:anuncios });
			})
		})
	},
	postearPublicacion : (req,res) => {
		
		db.empresas.findByPk(req.session.user.id)
		.then(empresa =>{
			
			let fecha = new Date().toLocaleDateString().slice(0,10).split('-');
			req.body.adv_publication = fecha[2] + '/' + fecha[1] + '/' + fecha[0];
			let skills = req.body.elskill;
			delete req.body.adv_skills;
			db.anuncios.create(req.body)
			.then( anuncio =>{
				 empresa.addAnuncios(anuncio)				
				return anuncio
			})
				 .then(anuncio =>{
					for(let i = 0; i<skills.length;i++){

						anuncio.addAdv_skills(skills[i])
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
			
			include:['adv_skills']
			
		})

		.then(resultado =>{
			anuncios = resultado;
			db.skills.findAll()
			.then(skills=>{
				
				 res.render("empresa/modificarPublicacion", { publicacion:anuncios,skills:skills, title: "Express" })
			})
		})
	},
	adv_modificarSkills: (req,res) => {
		
	},
	actualizarPublicacion: (req, res) => {
		// actualizar info en la DB y enviar a la vista previa 
		
		db.anuncios.findOne({where:{cmp_id:req.session.user.id}})
			.then(anuncio => {
				for(let i = 0; i<req.body.elskill.length;i++){

					anuncio.addAdv_skills(req.body.elskill[i]);
				}
				delete req.body.elskill;
				anuncio.update(req.body);
				return res.redirect("/empresa/perfil");
			})
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
		db.anuncios.findByPk(req.params.id,
			{
				include:[{model:db.clientes, as:'candidatos', attributes:['user_id','user_name','user_lastname','user_email','user_avatar'],
				include:[{model:db.cliente_education, as: 'cliente_education',attributes:['user_career']}
				,{model:db.cliente_experience, as:'cliente_experience', attributes:['user_experience_description']},{model:db.skills, as:'skill'}]}
				,{model:db.empresas,as:'empresas',attributes:['cmp_name','cmp_avatar']}
				,{model:db.skills,as:'adv_skills'}
				]
			})
			.then(resultado => {
				//let skillsResult = resultado.compareSkills(anuncios.);
				//return res.send(resultado)
				res.render("empresa/postulantes", { title: "Express", anuncio:resultado });
			})
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
	},

	ajax:(req,res)=> 
	{
		console.log(req.body)
	}
};

module.exports = controller;
